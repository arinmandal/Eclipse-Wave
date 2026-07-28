// ─────────────────────────────────────────────────────────────
//  Eclipse Wave — Master Palette
//  Edit colors HERE only. Run `npm run build` to regenerate all
//  theme JSONs from this single source of truth.
// ─────────────────────────────────────────────────────────────

export interface Palette {
	// Editor backgrounds
	bg: string;
	bgAlt: string; // sidebar, panel
	bgHover: string; // list hover
	bgActive: string; // list active / selection

	// Foregrounds
	fg: string;
	fgMuted: string; // comments, inactive text
	fgSubtle: string; // line numbers, indent guides

	// UI chrome
	border: string;
	borderActive: string;
	cursor: string;
	selection: string;
	selectionHighlight: string;
	findMatch: string;
	findMatchHighlight: string;
	lineHighlight: string;

	// Status bar / activity bar
	statusBarBg: string;
	statusBarFg: string;
	activityBarBg: string;
	activityBarFg: string;
	activityBarBadgeBg: string;
	activityBarBadgeFg: string;

	// Tabs
	tabActiveBg: string;
	tabActiveFg: string;
	tabInactiveBg: string;
	tabInactiveFg: string;
	tabActiveIndicator: string;

	// Syntax tokens
	keyword: string; // if, for, return, const …
	func: string; // function names, methods
	string: string; // string literals
	variable: string; // variables, numbers
	type: string; // classes, types, parameters
	interface: string; // type annotations, DOM, interfaces
	attribute: string; // HTML attrs, regex, namespaces
	operator: string; // operators, decorators, enums
	tag: string; // HTML tags
	module: string; // React components, imports
	comment: string; // all comments
	punctuation: string; // brackets, commas

	// Terminal ANSI (16 colors)
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

// ── 1. Eclipse Wave (Dark — the original) ─────────────────────
export const dark: Palette = {
	bg: "#0B0F1A",
	bgAlt: "#0E1220",
	bgHover: "#141826",
	bgActive: "#1A1F30",
	fg: "#C0CBE3",
	fgMuted: "#7A82A8",
	fgSubtle: "#353B54",
	border: "#1E2438",
	borderActive: "#9D7CFF",
	cursor: "#9D7CFF",
	selection: "#9D7CFF28",
	selectionHighlight: "#9D7CFF18",
	findMatch: "#D7BA7D60",
	findMatchHighlight: "#D7BA7D30",
	lineHighlight: "#ffffff08",
	statusBarBg: "#0B0F1A",
	statusBarFg: "#C0CBE3",
	activityBarBg: "#090D17",
	activityBarFg: "#9D7CFF",
	activityBarBadgeBg: "#9D7CFF",
	activityBarBadgeFg: "#0B0F1A",
	tabActiveBg: "#0B0F1A",
	tabActiveFg: "#C0CBE3",
	tabInactiveBg: "#090D17",
	tabInactiveFg: "#5C6480",
	tabActiveIndicator: "#9D7CFF",
	keyword: "#9D7CFF",
	func: "#82AAFF",
	string: "#A1C682",
	variable: "#E5A574",
	type: "#D7BA7D",
	interface: "#7CC8DE",
	attribute: "#FF79C6",
	operator: "#C792EA",
	tag: "#E17888",
	module: "#FFD166",
	comment: "#6878A0",
	punctuation: "#7A83A8",
	termBlack: "#0B0F1A",
	termRed: "#E17888",
	termGreen: "#A1C682",
	termYellow: "#D7BA7D",
	termBlue: "#82AAFF",
	termMagenta: "#C792EA",
	termCyan: "#7CC8DE",
	termWhite: "#C0CBE3",
	termBrightBlack: "#4A5270",
	termBrightRed: "#FF8FA3",
	termBrightGreen: "#B8D89A",
	termBrightYellow: "#FFD166",
	termBrightBlue: "#9DBEFF",
	termBrightMagenta: "#D9A8FF",
	termBrightCyan: "#99D8EC",
	termBrightWhite: "#E8EDF8",
};

// ── 2. Eclipse Wave Light ──────────────────────────────────────
export const light: Palette = {
	bg: "#F5F4F9",
	bgAlt: "#EDEAF5",
	bgHover: "#E4E0F0",
	bgActive: "#D8D3EC",
	fg: "#2B2D42",
	fgMuted: "#6668A0",
	fgSubtle: "#B0B2C8",
	border: "#D4D0E8",
	borderActive: "#7A5FD0",
	cursor: "#7A5FD0",
	selection: "#7A5FD028",
	selectionHighlight: "#7A5FD018",
	findMatch: "#87642A60",
	findMatchHighlight: "#87642A30",
	lineHighlight: "#00000006",
	statusBarBg: "#E4E0F0",
	statusBarFg: "#2B2D42",
	activityBarBg: "#EDEAF5",
	activityBarFg: "#7A5FD0",
	activityBarBadgeBg: "#7A5FD0",
	activityBarBadgeFg: "#FFFFFF",
	tabActiveBg: "#F5F4F9",
	tabActiveFg: "#2B2D42",
	tabInactiveBg: "#EDEAF5",
	tabInactiveFg: "#7B7D9A",
	tabActiveIndicator: "#7A5FD0",
	keyword: "#6A4EC8",
	func: "#2E5FA8",
	string: "#3A7A50",
	variable: "#954E10",
	type: "#87642A",
	interface: "#277A82",
	attribute: "#A0336B",
	operator: "#6A50B8",
	tag: "#A83050",
	module: "#8B6400",
	comment: "#7878A8",
	punctuation: "#6B6E8A",
	termBlack: "#2B2D42",
	termRed: "#A83050",
	termGreen: "#3A7A50",
	termYellow: "#87642A",
	termBlue: "#2E5FA8",
	termMagenta: "#8065C0",
	termCyan: "#277A82",
	termWhite: "#F5F4F9",
	termBrightBlack: "#7B7D9A",
	termBrightRed: "#C03060",
	termBrightGreen: "#4A9060",
	termBrightYellow: "#A07830",
	termBrightBlue: "#4070C0",
	termBrightMagenta: "#9075D0",
	termBrightCyan: "#308898",
	termBrightWhite: "#FFFFFF",
};

// ── 3. Eclipse Wave Midnight (OLED / late night) ───────────────
export const midnight: Palette = {
	bg: "#07090F",
	bgAlt: "#0A0D14",
	bgHover: "#10141E",
	bgActive: "#161B27",
	fg: "#B0BCE0",
	fgMuted: "#6878A0",
	fgSubtle: "#2C3244",
	border: "#181E2E",
	borderActive: "#8B6EF0",
	cursor: "#8B6EF0",
	selection: "#8B6EF028",
	selectionHighlight: "#8B6EF018",
	findMatch: "#C4A26860",
	findMatchHighlight: "#C4A26830",
	lineHighlight: "#ffffff06",
	statusBarBg: "#07090F",
	statusBarFg: "#B0BCE0",
	activityBarBg: "#050709",
	activityBarFg: "#8B6EF0",
	activityBarBadgeBg: "#8B6EF0",
	activityBarBadgeFg: "#07090F",
	tabActiveBg: "#07090F",
	tabActiveFg: "#B0BCE0",
	tabInactiveBg: "#050709",
	tabInactiveFg: "#505870",
	tabActiveIndicator: "#8B6EF0",
	keyword: "#8B6EF0",
	func: "#7BA8F5",
	string: "#8DC76E",
	variable: "#D4906A",
	type: "#C4A268",
	interface: "#68B8CC",
	attribute: "#D860A8",
	operator: "#B880D5",
	tag: "#D07080",
	module: "#E8C060",
	comment: "#5C6888",
	punctuation: "#7888A8",
	termBlack: "#07090F",
	termRed: "#D07080",
	termGreen: "#8DC76E",
	termYellow: "#C4A268",
	termBlue: "#7BA8F5",
	termMagenta: "#B880D5",
	termCyan: "#68B8CC",
	termWhite: "#B0BCE0",
	termBrightBlack: "#404860",
	termBrightRed: "#E88090",
	termBrightGreen: "#A0D880",
	termBrightYellow: "#E8C060",
	termBrightBlue: "#94BCFF",
	termBrightMagenta: "#CC98E8",
	termBrightCyan: "#80CCE0",
	termBrightWhite: "#D8E0F8",
};

// ── 4. Eclipse Wave Storm (blue-gray / cool) ───────────────────
export const storm: Palette = {
	bg: "#0A1020",
	bgAlt: "#0D1428",
	bgHover: "#131A30",
	bgActive: "#1A2240",
	fg: "#B4C4DC",
	fgMuted: "#7088B0",
	fgSubtle: "#2A3448",
	border: "#1A2438",
	borderActive: "#7485E8",
	cursor: "#7485E8",
	selection: "#7485E828",
	selectionHighlight: "#7485E818",
	findMatch: "#B89A6060",
	findMatchHighlight: "#B89A6030",
	lineHighlight: "#ffffff07",
	statusBarBg: "#0A1020",
	statusBarFg: "#B4C4DC",
	activityBarBg: "#080E1C",
	activityBarFg: "#7485E8",
	activityBarBadgeBg: "#7485E8",
	activityBarBadgeFg: "#0A1020",
	tabActiveBg: "#0A1020",
	tabActiveFg: "#B4C4DC",
	tabInactiveBg: "#080E1C",
	tabInactiveFg: "#4C5C78",
	tabActiveIndicator: "#7485E8",
	keyword: "#7485E8",
	func: "#68A8E0",
	string: "#6DB585",
	variable: "#D08858",
	type: "#B89A60",
	interface: "#5AAAC0",
	attribute: "#C060A0",
	operator: "#9080C8",
	tag: "#C07080",
	module: "#D8B058",
	comment: "#5A6A88",
	punctuation: "#7888A8",
	termBlack: "#0A1020",
	termRed: "#C07080",
	termGreen: "#6DB585",
	termYellow: "#B89A60",
	termBlue: "#68A8E0",
	termMagenta: "#9080C8",
	termCyan: "#5AAAC0",
	termWhite: "#B4C4DC",
	termBrightBlack: "#3E4E68",
	termBrightRed: "#D88090",
	termBrightGreen: "#80C898",
	termBrightYellow: "#D4B060",
	termBrightBlue: "#80BCE0",
	termBrightMagenta: "#A890D8",
	termBrightCyan: "#70BED0",
	termBrightWhite: "#D0DDF0",
};
