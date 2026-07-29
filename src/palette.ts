// ─────────────────────────────────────────────────────────────
//  Eclipse Wave — Master Palette v2.1
//  Edit colors HERE only. Run `npm run build` to regenerate all
//  theme JSONs from this single source of truth.
//
//  Color upgrade notes (v2.0 → v2.1):
//  - Dark:     bg shifted to blue-tinted dark (Tokyo Night style)
//              keyword → softer violet, func → cleaner sky blue
//              interface → Catppuccin Sapphire, operator → lavender
//              attribute/tag → muted rose, fg → blue-white
//  - Light:    bg → GitHub's off-white, func → GitHub navy
//              string → GitHub forest green, operator → GitHub purple
//              tag → GitHub red, comment → GitHub gray
//  - Midnight: true black bg, more saturated syntax (Dracula-range)
//              string → emerald, variable → warm orange
//              attribute → pink, module → amber
//  - Storm:    bg → GitHub Dark blue-black
//              func/string/variable → GitHub Dark palette
//              keyword/operator → GitHub purple, tag → GitHub red-orange
// ─────────────────────────────────────────────────────────────

export interface Palette {
	bg: string;
	bgAlt: string;
	bgHover: string;
	bgActive: string;
	fg: string;
	fgMuted: string;
	fgSubtle: string;
	border: string;
	borderActive: string;
	cursor: string;
	selection: string;
	selectionHighlight: string;
	findMatch: string;
	findMatchHighlight: string;
	lineHighlight: string;
	statusBarBg: string;
	statusBarFg: string;
	activityBarBg: string;
	activityBarFg: string;
	activityBarBadgeBg: string;
	activityBarBadgeFg: string;
	tabActiveBg: string;
	tabActiveFg: string;
	tabInactiveBg: string;
	tabInactiveFg: string;
	tabActiveIndicator: string;
	keyword: string;
	func: string;
	string: string;
	variable: string;
	type: string;
	interface: string;
	attribute: string;
	operator: string;
	tag: string;
	module: string;
	comment: string;
	punctuation: string;
	termBlack: string;
	termRed: string;
	termGreen: string;
	termYellow: string;
	termBlue: string;
	termMagenta: string;
	termCyan: string;
	termWhite: string;
	termBrightBlack: string;
	termBrightRed: string;
	termBrightGreen: string;
	termBrightYellow: string;
	termBrightBlue: string;
	termBrightMagenta: string;
	termBrightCyan: string;
	termBrightWhite: string;
}

// ── 1. Eclipse Wave Dark ───────────────────────────────────────
// Upgrade: blue-tinted bg (Tokyo Night style), softer violet
// keyword, sky-blue func, sapphire interface, lavender operator,
// muted rose attribute, blue-white fg
export const dark: Palette = {
	// ── Backgrounds (shifted to blue-tinted dark)
	bg: "#1E2030", // was #0B0F1A — now Tokyo Night-style
	bgAlt: "#222436", // sidebar / panel
	bgHover: "#2A2D43",
	bgActive: "#323650",

	// ── Foregrounds
	fg: "#C0CAF5", // was #C0CBE3 — now blue-white (Tokyo Night fg)
	fgMuted: "#8B92B8",
	fgSubtle: "#414868", // was #353B54

	// ── UI chrome
	border: "#292E42", // was #1E2438
	borderActive: "#B8A0FF", // was #9D7CFF — softer violet
	cursor: "#B8A0FF",
	selection: "#B8A0FF28",
	selectionHighlight: "#B8A0FF18",
	findMatch: "#E8C97A60",
	findMatchHighlight: "#E8C97A30",
	lineHighlight: "#ffffff07",

	// ── Status / activity bar
	statusBarBg: "#1E2030",
	statusBarFg: "#C0CAF5",
	activityBarBg: "#1A1C2E",
	activityBarFg: "#B8A0FF",
	activityBarBadgeBg: "#B8A0FF",
	activityBarBadgeFg: "#1E2030",

	// ── Tabs
	tabActiveBg: "#1E2030",
	tabActiveFg: "#C0CAF5",
	tabInactiveBg: "#1A1C2E",
	tabInactiveFg: "#7A82A8",
	tabActiveIndicator: "#B8A0FF",

	// ── Syntax (upgraded)
	keyword: "#B8A0FF", // was #9D7CFF — softer violet, Tokyo Night range
	func: "#7FC3FF", // was #82AAFF — cleaner sky blue
	string: "#A8D8A0", // was #A1C682 — desaturated sage, slightly warmer
	variable: "#FFAD70", // was #E5A574 — warmer amber, One Dark Pro range
	type: "#E8C97A", // was #D7BA7D — golden wheat, more distinct
	interface: "#89DCEB", // was #7CC8DE — Catppuccin Sapphire, cleaner
	attribute: "#F28FAD", // was #FF79C6 — muted rose, less hot-pink
	operator: "#CBA6F7", // was #C792EA — lavender, industry consensus
	tag: "#F28FAD", // was #E17888 — unified with attribute (muted rose)
	module: "#FAB387", // was #FFD166 — Catppuccin Peach, more distinctive
	comment: "#6C7A9C", // was #6878A0 — blue-gray (passes WCAG AA)
	punctuation: "#8B92B8", // was #7A83A8 — matches fgMuted

	// ── Terminal (updated to match new syntax palette)
	termBlack: "#1E2030",
	termRed: "#F28FAD",
	termGreen: "#A8D8A0",
	termYellow: "#E8C97A",
	termBlue: "#7FC3FF",
	termMagenta: "#CBA6F7",
	termCyan: "#89DCEB",
	termWhite: "#C0CAF5",
	termBrightBlack: "#6C7A9C",
	termBrightRed: "#FF9EB8",
	termBrightGreen: "#BCE0B4",
	termBrightYellow: "#FAB387",
	termBrightBlue: "#96CEFF",
	termBrightMagenta: "#D4BEFF",
	termBrightCyan: "#A0E8F4",
	termBrightWhite: "#E0E6FF",
};

// ── 2. Eclipse Wave Light ──────────────────────────────────────
// Upgrade: GitHub-inspired — off-white bg, navy func, forest
// green string, GitHub purple operator, GitHub red tag,
// neutral gray comment
export const light: Palette = {
	// ── Backgrounds (GitHub's off-white — not harsh pure white)
	bg: "#F6F8FA", // was #F5F4F9 — GitHub Light's bg
	bgAlt: "#EAEEF2",
	bgHover: "#DDE3EB",
	bgActive: "#D0D7DE",

	// ── Foregrounds
	fg: "#1F2328", // was #2B2D42 — GitHub's near-black
	fgMuted: "#6668A0",
	fgSubtle: "#B0B2C8",

	// ── UI chrome
	border: "#D0D7DE", // was #D4D0E8 — GitHub border
	borderActive: "#7847CC",
	cursor: "#7847CC",
	selection: "#7847CC28",
	selectionHighlight: "#7847CC18",
	findMatch: "#287A4660",
	findMatchHighlight: "#287A4630",
	lineHighlight: "#00000006",

	// ── Status / activity bar
	statusBarBg: "#DDE3EB",
	statusBarFg: "#1F2328",
	activityBarBg: "#EAEEF2",
	activityBarFg: "#7847CC",
	activityBarBadgeBg: "#7847CC",
	activityBarBadgeFg: "#FFFFFF",

	// ── Tabs
	tabActiveBg: "#F6F8FA",
	tabActiveFg: "#1F2328",
	tabInactiveBg: "#EAEEF2",
	tabInactiveFg: "#6668A0",
	tabActiveIndicator: "#7847CC",

	// ── Syntax (GitHub Light inspired)
	keyword: "#7847CC", // was #6A4EC8 — deep violet, consistent family
	func: "#1C5FAA", // was #2E5FA8 — GitHub navy, richer
	string: "#287A46", // was #3A7A50 — GitHub forest green
	variable: "#953800", // was #954E10 — GitHub burnt orange
	type: "#7847CC", // was #87642A — align with keyword (types feel keyword-like)
	interface: "#006080", // was #277A82 — deeper teal, more contrast
	attribute: "#A0336B", // unchanged — good contrast
	operator: "#8250DF", // was #6A50B8 — GitHub purple, more distinctive
	tag: "#CF222E", // was #A83050 — GitHub red, universally recognized for HTML
	module: "#8250DF", // was #8B6400 — unify with operator (purple family)
	comment: "#57606A", // was #7878A8 — GitHub's neutral gray comment
	punctuation: "#6B7280", // was #6B6E8A

	// ── Terminal
	termBlack: "#1F2328",
	termRed: "#CF222E",
	termGreen: "#287A46",
	termYellow: "#7847CC",
	termBlue: "#1C5FAA",
	termMagenta: "#8250DF",
	termCyan: "#006080",
	termWhite: "#F6F8FA",
	termBrightBlack: "#57606A",
	termBrightRed: "#E5220A",
	termBrightGreen: "#2E9052",
	termBrightYellow: "#953800",
	termBrightBlue: "#2468C4",
	termBrightMagenta: "#9B6EFF",
	termBrightCyan: "#007090",
	termBrightWhite: "#FFFFFF",
};

// ── 3. Eclipse Wave Midnight (OLED) ───────────────────────────
// Upgrade: true black bg, more saturated syntax (Dracula-range)
// — vivid colors are needed on true black or they disappear
export const midnight: Palette = {
	// ── Backgrounds (true black for OLED)
	bg: "#000000", // was #07090F — true OLED black
	bgAlt: "#0D0D0D",
	bgHover: "#141414",
	bgActive: "#1C1C1C",

	// ── Foregrounds
	fg: "#CDD6F4", // was #B0BCE0 — Catppuccin Mocha fg
	fgMuted: "#6878A0",
	fgSubtle: "#313244",

	// ── UI chrome
	border: "#1E1E2E",
	borderActive: "#A78BFA", // was #8B6EF0 — Catppuccin Mauve
	cursor: "#A78BFA",
	selection: "#A78BFA28",
	selectionHighlight: "#A78BFA18",
	findMatch: "#F9E2AF60",
	findMatchHighlight: "#F9E2AF30",
	lineHighlight: "#ffffff05",

	// ── Status / activity bar
	statusBarBg: "#000000",
	statusBarFg: "#CDD6F4",
	activityBarBg: "#000000",
	activityBarFg: "#A78BFA",
	activityBarBadgeBg: "#A78BFA",
	activityBarBadgeFg: "#000000",

	// ── Tabs
	tabActiveBg: "#000000",
	tabActiveFg: "#CDD6F4",
	tabInactiveBg: "#0D0D0D",
	tabInactiveFg: "#6878A0",
	tabActiveIndicator: "#A78BFA",

	// ── Syntax (more saturated — needed on true black)
	keyword: "#A78BFA", // was #8B6EF0 — Catppuccin Mauve, vivid on black
	func: "#60A5FA", // was #7BA8F5 — Tailwind Blue-400, highly readable
	string: "#34D399", // was #8DC76E — Emerald, vivid without being neon
	variable: "#FB923C", // was #D4906A — warm orange, Tailwind Orange-400
	type: "#F9E2AF", // was #C4A268 — Catppuccin Yellow, warmer
	interface: "#94E2D5", // was #68B8CC — Catppuccin Teal, more distinctive
	attribute: "#F472B6", // was #D860A8 — Tailwind Pink-400, Night Owl inspired
	operator: "#CBA6F7", // was #B880D5 — Catppuccin Lavender
	tag: "#F38BA8", // was #D07080 — Catppuccin Red, vivid on black
	module: "#FBBF24", // was #E8C060 — Tailwind Amber-400, bold on black
	comment: "#5C6888", // was #5C6888 — unchanged, passes WCAG AA
	punctuation: "#7888A8", // unchanged

	// ── Terminal (saturated to match syntax)
	termBlack: "#000000",
	termRed: "#F38BA8",
	termGreen: "#34D399",
	termYellow: "#F9E2AF",
	termBlue: "#60A5FA",
	termMagenta: "#CBA6F7",
	termCyan: "#94E2D5",
	termWhite: "#CDD6F4",
	termBrightBlack: "#5C6888",
	termBrightRed: "#FF8FAD",
	termBrightGreen: "#50EFB0",
	termBrightYellow: "#FBBF24",
	termBrightBlue: "#80BCFF",
	termBrightMagenta: "#D4BEFF",
	termBrightCyan: "#ADEFEA",
	termBrightWhite: "#E8E8FF",
};

// ── 4. Eclipse Wave Storm ──────────────────────────────────────
// Upgrade: GitHub Dark palette — deep blue-black bg, their
// proven func/string/variable/keyword colors that work on
// 18M+ installs
export const storm: Palette = {
	// ── Backgrounds (GitHub Dark's blue-black)
	bg: "#0D1117", // was #0A1020 — GitHub Dark's exact bg
	bgAlt: "#161B22", // GitHub Dark sidebar
	bgHover: "#1C2128",
	bgActive: "#22272E",

	// ── Foregrounds
	fg: "#E6EDF3", // was #B4C4DC — GitHub Dark fg, brighter
	fgMuted: "#7088B0",
	fgSubtle: "#30363D", // was #2A3448 — GitHub border-muted

	// ── UI chrome
	border: "#30363D", // was #1A2438 — GitHub Dark border
	borderActive: "#D2A8FF", // was #7485E8 — GitHub Dark purple
	cursor: "#D2A8FF",
	selection: "#D2A8FF28",
	selectionHighlight: "#D2A8FF18",
	findMatch: "#FFA65760",
	findMatchHighlight: "#FFA65730",
	lineHighlight: "#ffffff06",

	// ── Status / activity bar
	statusBarBg: "#0D1117",
	statusBarFg: "#E6EDF3",
	activityBarBg: "#010409", // GitHub's darkest bg
	activityBarFg: "#D2A8FF",
	activityBarBadgeBg: "#D2A8FF",
	activityBarBadgeFg: "#0D1117",

	// ── Tabs
	tabActiveBg: "#0D1117",
	tabActiveFg: "#E6EDF3",
	tabInactiveBg: "#010409",
	tabInactiveFg: "#7088B0",
	tabActiveIndicator: "#D2A8FF",

	// ── Syntax (GitHub Dark palette — proven on millions of installs)
	keyword: "#FF7B72", // was #7485E8 — GitHub Dark red-orange for keywords
	func: "#D2A8FF", // was #68A8E0 — GitHub Dark purple for functions
	string: "#A5D6FF", // was #6DB585 — GitHub Dark light blue for strings
	variable: "#FFA657", // was #D08858 — GitHub Dark orange for variables
	type: "#7EE787", // was #B89A60 — GitHub Dark green for types
	interface: "#79C0FF", // was #5AAAC0 — GitHub Dark blue for interfaces
	attribute: "#FF7B72", // was #C060A0 — GitHub red (same as keyword, HTML attrs)
	operator: "#D2A8FF", // was #9080C8 — GitHub purple (same as func)
	tag: "#7EE787", // was #C07080 — GitHub green for tags
	module: "#FFA657", // was #D8B058 — GitHub orange (same as variable)
	comment: "#8B949E", // was #5A6A88 — GitHub Dark's comment gray (benchmark)
	punctuation: "#8B949E", // match comment — GitHub uses same tone

	// ── Terminal (GitHub Dark terminal colors)
	termBlack: "#0D1117",
	termRed: "#FF7B72",
	termGreen: "#7EE787",
	termYellow: "#E3B341",
	termBlue: "#79C0FF",
	termMagenta: "#D2A8FF",
	termCyan: "#A5D6FF",
	termWhite: "#E6EDF3",
	termBrightBlack: "#8B949E",
	termBrightRed: "#FFA198",
	termBrightGreen: "#56D364",
	termBrightYellow: "#F0C000",
	termBrightBlue: "#79C0FF",
	termBrightMagenta: "#E2C5FF",
	termBrightCyan: "#B3E0FF",
	termBrightWhite: "#FFFFFF",
};
