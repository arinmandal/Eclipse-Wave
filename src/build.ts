// ─────────────────────────────────────────────────────────────
//  Eclipse Wave — Build Script
//  Run: npm run build
//  Generates: themes/*.json  +  contrast audit report
// ─────────────────────────────────────────────────────────────

import * as fs from "fs";
import * as path from "path";
import { dark, light, midnight, storm } from "./palette";
import type { Palette } from "./palette";
import { buildTheme } from "./build-theme";

// ── Contrast checker (WCAG 2.1) ──────────────────────────────
function hexToRgb(hex: string): [number, number, number] {
	const h = hex.replace("#", "").slice(0, 6);
	const n = parseInt(h, 16);
	return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
}

function linearize(c: number): number {
	const s = c / 255;
	return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function luminance(hex: string): number {
	const [r, g, b] = hexToRgb(hex);
	return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

function contrast(fg: string, bg: string): number {
	// Strip alpha channel if present (e.g. #RRGGBBAA)
	const f = fg.slice(0, 7);
	const b = bg.slice(0, 7);
	if (!f.match(/^#[0-9A-Fa-f]{6}$/) || !b.match(/^#[0-9A-Fa-f]{6}$/)) {
		return 999; // skip non-solid colors
	}
	const l1 = luminance(f);
	const l2 = luminance(b);
	const lighter = Math.max(l1, l2);
	const darker = Math.min(l1, l2);
	return (lighter + 0.05) / (darker + 0.05);
}

interface ContrastPair {
	token: string;
	fg: string;
	bg: string;
	ratio: number;
	pass: boolean;
}

// Checks all syntax tokens against the editor background
function auditContrast(name: string, p: Palette): ContrastPair[] {
	const pairs: [string, string][] = [
		["keyword", p.keyword],
		["func", p.func],
		["string", p.string],
		["variable", p.variable],
		["type", p.type],
		["interface", p.interface],
		["attribute", p.attribute],
		["operator", p.operator],
		["tag", p.tag],
		["module", p.module],
		["comment", p.comment],
		["punctuation", p.punctuation],
		["fg", p.fg],
		["fgMuted", p.fgMuted],
	];

	const results: ContrastPair[] = [];
	for (const [token, fg] of pairs) {
		const ratio = contrast(fg, p.bg);
		results.push({
			token,
			fg,
			bg: p.bg,
			ratio: Math.round(ratio * 100) / 100,
			// AA requires 4.5:1 for normal text; comments/muted can be 3:1
			pass:
				token === "comment" || token === "fgSubtle"
					? ratio >= 3.0
					: ratio >= 4.5,
		});
	}
	return results;
}

// ── Main build ────────────────────────────────────────────────
const variants: Array<{
	name: string;
	type: "dark" | "light";
	palette: Palette;
	file: string;
}> = [
	{
		name: "Eclipse Wave",
		type: "dark",
		palette: dark,
		file: "eclipse-wave-color-theme.json",
	},
	{
		name: "Eclipse Wave Light",
		type: "light",
		palette: light,
		file: "eclipse-wave-light-color-theme.json",
	},
	{
		name: "Eclipse Wave Midnight",
		type: "dark",
		palette: midnight,
		file: "eclipse-wave-midnight-color-theme.json",
	},
	{
		name: "Eclipse Wave Storm",
		type: "dark",
		palette: storm,
		file: "eclipse-wave-storm-color-theme.json",
	},
];

const themesDir = path.join(__dirname, "..", "themes");
if (!fs.existsSync(themesDir)) fs.mkdirSync(themesDir, { recursive: true });

let hasFailure = false;
console.log("\n🌊 Eclipse Wave — Build\n");

for (const v of variants) {
	// 1. Generate theme JSON
	const theme = buildTheme(v.name, v.type, v.palette);
	const outPath = path.join(themesDir, v.file);
	fs.writeFileSync(outPath, JSON.stringify(theme, null, 2) + "\n", "utf-8");
	console.log(`✅  Generated: themes/${v.file}`);

	// 2. Contrast audit
	const audit = auditContrast(v.name, v.palette);
	const failures = audit.filter((r) => !r.pass);
	if (failures.length > 0) {
		console.log(`\n⚠️  Contrast issues in [${v.name}]:`);
		for (const f of failures) {
			console.log(
				`    ${f.token.padEnd(14)} ${f.fg} on ${f.bg}  →  ${f.ratio}:1  (need 4.5:1)`,
			);
		}
		hasFailure = true;
	} else {
		console.log(`    Contrast: all tokens pass WCAG AA ✓`);
	}
	console.log();
}

if (hasFailure) {
	console.log(
		"❌  Build completed with contrast warnings. Fix before publishing.\n",
	);
	process.exit(1);
} else {
	console.log("✨  All 4 themes generated. Contrast checks passed.\n");
}
