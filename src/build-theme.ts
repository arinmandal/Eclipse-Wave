// ─────────────────────────────────────────────────────────────
//  Eclipse Wave — Theme Builder
//  Converts a Palette into a complete VS Code theme JSON object.
//  305+ UI keys + semantic + TextMate token rules.
// ─────────────────────────────────────────────────────────────

import type { Palette } from "./palette";

export function buildTheme(
	name: string,
	type: "dark" | "light",
	p: Palette,
): object {
	return {
		name,
		type,
		semanticHighlighting: true,

		// ── Semantic token rules ─────────────────────────────────
		semanticTokenColors: {
			// Basic categories
			keyword: { foreground: p.keyword, bold: false },
			function: { foreground: p.func },
			"function.declaration": { foreground: p.func, bold: false },
			method: { foreground: p.func },
			variable: { foreground: p.variable },
			"variable.readonly": { foreground: p.variable },
			"variable.defaultLibrary": { foreground: p.interface },
			parameter: { foreground: p.type, italic: true },
			type: { foreground: p.type },
			class: { foreground: p.type },
			interface: { foreground: p.interface },
			enum: { foreground: p.operator },
			enumMember: { foreground: p.variable },
			namespace: { foreground: p.attribute },
			property: { foreground: p.interface },
			decorator: { foreground: p.operator, italic: true },
			string: { foreground: p.string },
			number: { foreground: p.variable },
			operator: { foreground: p.operator },
			comment: { foreground: p.comment, italic: true },
			macro: { foreground: p.module },
			// Modifiers
			"*.mutable": { underline: true },
			"*.async": { italic: true },
			"*.deprecated": { strikethrough: true },
			"*.static": { italic: true },
			"*.abstract": { italic: true },
		},

		// ── UI color keys ────────────────────────────────────────
		colors: {
			// Editor
			"editor.background": p.bg,
			"editor.foreground": p.fg,
			"editor.lineHighlightBackground": p.lineHighlight,
			"editor.selectionBackground": p.selection,
			"editor.selectionHighlightBackground": p.selectionHighlight,
			"editor.inactiveSelectionBackground": p.selectionHighlight,
			"editor.findMatchBackground": p.findMatch,
			"editor.findMatchHighlightBackground": p.findMatchHighlight,
			"editor.hoverHighlightBackground": p.selectionHighlight,
			"editor.wordHighlightBackground": p.selectionHighlight,
			"editor.wordHighlightStrongBackground": p.selection,
			"editorCursor.foreground": p.cursor,
			"editorCursor.background": p.bg,
			"editorWhitespace.foreground": p.fgSubtle,
			"editorIndentGuide.background1": p.fgSubtle,
			"editorIndentGuide.activeBackground1": p.fgMuted,
			"editorLineNumber.foreground": p.fgSubtle,
			"editorLineNumber.activeForeground": p.fgMuted,
			"editorRuler.foreground": p.border,
			"editorBracketMatch.background": p.selection,
			"editorBracketMatch.border": p.cursor,
			"editorOverviewRuler.border": p.border,
			"editorOverviewRuler.findMatchForeground": p.findMatch,
			"editorOverviewRuler.selectionHighlightForeground": p.selection,
			"editorOverviewRuler.errorForeground": "#E17888",
			"editorOverviewRuler.warningForeground": "#D7BA7D",
			"editorOverviewRuler.infoForeground": p.interface,
			"editorGutter.background": p.bg,
			"editorGutter.addedBackground": "#A1C682",
			"editorGutter.modifiedBackground": "#7CC8DE",
			"editorGutter.deletedBackground": "#E17888",
			"editorCodeLens.foreground": p.fgMuted,
			"editorLightBulb.foreground": p.module,
			"editorLink.activeForeground": p.func,

			// Ghost text (Copilot / inline suggestions)
			"editorGhostText.foreground": p.fgMuted,
			"editorGhostText.background": "#00000000",
			"editorGhostText.border": "#00000000",
			"inlineSuggestion.foreground": p.fgMuted,

			// Errors / warnings / info squiggles
			"editorError.foreground": "#E17888",
			"editorWarning.foreground": "#D7BA7D",
			"editorInfo.foreground": p.interface,
			"editorHint.foreground": p.comment,

			// Diff editor
			"diffEditor.insertedTextBackground": "#A1C68218",
			"diffEditor.removedTextBackground": "#E1788818",
			"diffEditor.insertedLineBackground": "#A1C68210",
			"diffEditor.removedLineBackground": "#E1788810",
			"diffEditorGutter.insertedLineBackground": "#A1C68220",
			"diffEditorGutter.removedLineBackground": "#E1788820",
			"diffEditorOverview.insertedForeground": "#A1C682",
			"diffEditorOverview.removedForeground": "#E17888",

			// Workbench chrome
			focusBorder: p.borderActive,
			foreground: p.fg,
			descriptionForeground: p.fgMuted,
			errorForeground: "#E17888",
			"widget.shadow": "#00000040",
			"selection.background": p.selection,
			"icon.foreground": p.fgMuted,
			disabledForeground: p.fgSubtle,

			// Input
			"input.background": p.bgAlt,
			"input.border": p.border,
			"input.foreground": p.fg,
			"input.placeholderForeground": p.fgMuted,
			"inputOption.activeBackground": p.selection,
			"inputOption.activeBorder": p.borderActive,
			"inputOption.activeForeground": p.fg,
			"inputValidation.errorBackground": p.bgAlt,
			"inputValidation.errorBorder": "#E17888",
			"inputValidation.errorForeground": "#E17888",
			"inputValidation.warningBackground": p.bgAlt,
			"inputValidation.warningBorder": "#D7BA7D",
			"inputValidation.warningForeground": "#D7BA7D",
			"inputValidation.infoBackground": p.bgAlt,
			"inputValidation.infoBorder": p.interface,
			"inputValidation.infoForeground": p.interface,

			// Buttons
			"button.background": p.borderActive,
			"button.foreground": p.bg,
			"button.hoverBackground": p.cursor,
			"button.secondaryBackground": p.bgActive,
			"button.secondaryForeground": p.fg,
			"button.secondaryHoverBackground": p.bgHover,

			// Dropdowns / selects
			"dropdown.background": p.bgAlt,
			"dropdown.border": p.border,
			"dropdown.foreground": p.fg,
			"dropdown.listBackground": p.bgAlt,

			// Sidebar
			"sideBar.background": p.bgAlt,
			"sideBar.foreground": p.fg,
			"sideBar.border": p.border,
			"sideBar.dropBackground": p.bgActive,
			"sideBarTitle.foreground": p.fgMuted,
			"sideBarSectionHeader.background": p.bgAlt,
			"sideBarSectionHeader.foreground": p.fgMuted,
			"sideBarSectionHeader.border": p.border,

			// Activity bar
			"activityBar.background": p.activityBarBg,
			"activityBar.foreground": p.activityBarFg,
			"activityBar.inactiveForeground": p.fgSubtle,
			"activityBar.border": p.border,
			"activityBar.activeBorder": p.activityBarFg,
			"activityBar.activeBackground": p.bgAlt,
			"activityBarBadge.background": p.activityBarBadgeBg,
			"activityBarBadge.foreground": p.activityBarBadgeFg,

			// Status bar
			"statusBar.background": p.statusBarBg,
			"statusBar.foreground": p.statusBarFg,
			"statusBar.border": p.border,
			"statusBar.noFolderBackground": p.statusBarBg,
			"statusBar.noFolderForeground": p.statusBarFg,
			"statusBar.debuggingBackground": "#E17888",
			"statusBar.debuggingForeground": "#FFFFFF",
			"statusBarItem.hoverBackground": p.bgHover,
			"statusBarItem.activeBackground": p.bgActive,
			"statusBarItem.remoteBackground": p.activityBarFg,
			"statusBarItem.remoteForeground": p.bg,
			"statusBarItem.errorBackground": "#E17888",
			"statusBarItem.errorForeground": "#FFFFFF",
			"statusBarItem.warningBackground": "#D7BA7D",
			"statusBarItem.warningForeground": p.bg,

			// Title bar
			"titleBar.activeBackground": p.activityBarBg,
			"titleBar.activeForeground": p.fg,
			"titleBar.inactiveBackground": p.activityBarBg,
			"titleBar.inactiveForeground": p.fgMuted,
			"titleBar.border": p.border,

			// Tabs
			"editorGroupHeader.tabsBackground": p.tabInactiveBg,
			"editorGroupHeader.tabsBorder": p.border,
			"tab.activeBackground": p.tabActiveBg,
			"tab.activeForeground": p.tabActiveFg,
			"tab.activeBorder": "#00000000",
			"tab.activeBorderTop": p.tabActiveIndicator,
			"tab.inactiveBackground": p.tabInactiveBg,
			"tab.inactiveForeground": p.tabInactiveFg,
			"tab.border": p.border,
			"tab.hoverBackground": p.bgHover,
			"tab.hoverForeground": p.fg,
			"tab.unfocusedActiveBackground": p.tabInactiveBg,
			"tab.unfocusedActiveForeground": p.fgMuted,
			"tab.unfocusedInactiveBackground": p.tabInactiveBg,
			"tab.unfocusedInactiveForeground": p.fgSubtle,

			// Explorer
			"list.activeSelectionBackground": p.bgActive,
			"list.activeSelectionForeground": p.fg,
			"list.inactiveSelectionBackground": p.bgHover,
			"list.inactiveSelectionForeground": p.fg,
			"list.hoverBackground": p.bgHover,
			"list.hoverForeground": p.fg,
			"list.focusBackground": p.bgActive,
			"list.focusForeground": p.fg,
			"list.highlightForeground": p.borderActive,
			"list.dropBackground": p.bgActive,
			"list.errorForeground": "#E17888",
			"list.warningForeground": "#D7BA7D",
			"listFilterWidget.background": p.bgAlt,
			"listFilterWidget.outline": p.borderActive,
			"listFilterWidget.noMatchesOutline": "#E17888",

			// Tree
			"tree.indentGuidesStroke": p.fgSubtle,
			"tree.tableColumnsSeparator": p.border,

			// Scrollbar
			"scrollbar.shadow": "#00000020",
			"scrollbarSlider.background": p.fgSubtle + "60",
			"scrollbarSlider.hoverBackground": p.fgMuted + "80",
			"scrollbarSlider.activeBackground": p.fgMuted + "A0",

			// Minimap
			"minimap.background": p.bgAlt,
			"minimap.selectionHighlight": p.selection,
			"minimap.findMatchHighlight": p.findMatch,
			"minimap.errorHighlight": "#E17888",
			"minimap.warningHighlight": "#D7BA7D",
			"minimapGutter.addedBackground": "#A1C682",
			"minimapGutter.modifiedBackground": "#7CC8DE",
			"minimapGutter.deletedBackground": "#E17888",

			// Panel (terminal area)
			"panel.background": p.bgAlt,
			"panel.border": p.border,
			"panelTitle.activeForeground": p.fg,
			"panelTitle.activeBorder": p.borderActive,
			"panelTitle.inactiveForeground": p.fgMuted,

			// Terminal
			"terminal.background": p.bg,
			"terminal.foreground": p.fg,
			"terminal.selectionBackground": p.selection,
			"terminal.inactiveSelectionBackground": p.selectionHighlight,
			"terminal.cursor.background": p.bg,
			"terminal.cursor.foreground": p.cursor,
			"terminalCursor.background": p.bg,
			"terminalCursor.foreground": p.cursor,
			"terminal.border": p.border,
			"terminal.ansiBlack": p.termBlack,
			"terminal.ansiRed": p.termRed,
			"terminal.ansiGreen": p.termGreen,
			"terminal.ansiYellow": p.termYellow,
			"terminal.ansiBlue": p.termBlue,
			"terminal.ansiMagenta": p.termMagenta,
			"terminal.ansiCyan": p.termCyan,
			"terminal.ansiWhite": p.termWhite,
			"terminal.ansiBrightBlack": p.termBrightBlack,
			"terminal.ansiBrightRed": p.termBrightRed,
			"terminal.ansiBrightGreen": p.termBrightGreen,
			"terminal.ansiBrightYellow": p.termBrightYellow,
			"terminal.ansiBrightBlue": p.termBrightBlue,
			"terminal.ansiBrightMagenta": p.termBrightMagenta,
			"terminal.ansiBrightCyan": p.termBrightCyan,
			"terminal.ansiBrightWhite": p.termBrightWhite,

			// Peek view
			"peekView.border": p.borderActive,
			"peekViewEditor.background": p.bgAlt,
			"peekViewEditor.matchHighlightBackground": p.findMatch,
			"peekViewResult.background": p.bgAlt,
			"peekViewResult.fileForeground": p.fg,
			"peekViewResult.lineForeground": p.fgMuted,
			"peekViewResult.matchHighlightBackground": p.findMatchHighlight,
			"peekViewResult.selectionBackground": p.bgActive,
			"peekViewResult.selectionForeground": p.fg,
			"peekViewTitle.background": p.bgActive,
			"peekViewTitleDescription.foreground": p.fgMuted,
			"peekViewTitleLabel.foreground": p.fg,

			// Notifications
			"notifications.background": p.bgAlt,
			"notifications.foreground": p.fg,
			"notifications.border": p.border,
			"notificationsErrorIcon.foreground": "#E17888",
			"notificationsWarningIcon.foreground": "#D7BA7D",
			"notificationsInfoIcon.foreground": p.interface,
			"notificationCenterHeader.background": p.bgActive,
			"notificationCenterHeader.foreground": p.fg,

			// Badges
			"badge.background": p.borderActive,
			"badge.foreground": p.bg,

			// Quick open / command palette
			"quickInput.background": p.bgAlt,
			"quickInput.foreground": p.fg,
			"quickInputTitle.background": p.bgActive,
			"quickInputList.focusBackground": p.bgActive,
			"quickInputList.focusForeground": p.fg,
			"quickInputList.focusIconForeground": p.borderActive,

			// Breadcrumbs
			"breadcrumb.background": p.bgAlt,
			"breadcrumb.foreground": p.fgMuted,
			"breadcrumb.focusForeground": p.fg,
			"breadcrumb.activeSelectionForeground": p.fg,
			"breadcrumbPicker.background": p.bgAlt,

			// Git decorations
			"gitDecoration.addedResourceForeground": "#A1C682",
			"gitDecoration.modifiedResourceForeground": "#7CC8DE",
			"gitDecoration.deletedResourceForeground": "#E17888",
			"gitDecoration.renamedResourceForeground": p.module,
			"gitDecoration.untrackedResourceForeground": "#A1C682",
			"gitDecoration.ignoredResourceForeground": p.fgSubtle,
			"gitDecoration.conflictingResourceForeground": "#D7BA7D",
			"gitDecoration.stageModifiedResourceForeground": "#7CC8DE",
			"gitDecoration.stageDeletedResourceForeground": "#E17888",
			"gitDecoration.submoduleResourceForeground": p.func,

			// Merge editor
			"mergeEditor.change.background": "#7CC8DE10",
			"mergeEditor.change.word.background": "#7CC8DE30",
			"mergeEditor.conflict.input1.background": "#A1C68218",
			"mergeEditor.conflict.input2.background": "#82AAFF18",

			// Settings editor
			"settings.headerForeground": p.fg,
			"settings.modifiedItemIndicator": p.borderActive,
			"settings.dropdownBackground": p.bgAlt,
			"settings.dropdownBorder": p.border,
			"settings.dropdownForeground": p.fg,
			"settings.checkboxBackground": p.bgAlt,
			"settings.checkboxBorder": p.border,
			"settings.checkboxForeground": p.fg,
			"settings.textInputBackground": p.bgAlt,
			"settings.textInputBorder": p.border,
			"settings.textInputForeground": p.fg,
			"settings.numberInputBackground": p.bgAlt,
			"settings.numberInputBorder": p.border,
			"settings.numberInputForeground": p.fg,
			"settings.focusedRowBackground": p.bgHover,
			"settings.rowHoverBackground": p.bgHover,

			// Charts
			"charts.foreground": p.fg,
			"charts.lines": p.fgMuted,
			"charts.red": "#E17888",
			"charts.blue": p.func,
			"charts.yellow": "#D7BA7D",
			"charts.orange": p.variable,
			"charts.green": "#A1C682",
			"charts.purple": p.keyword,

			// Debug
			"debugToolBar.background": p.bgAlt,
			"editor.stackFrameHighlightBackground": p.findMatchHighlight,
			"editor.focusedStackFrameHighlightBackground": p.selection,
			"debugView.exceptionLabelBackground": "#E1788830",
			"debugView.exceptionLabelForeground": "#E17888",
			"debugView.stateLabelBackground": p.bgActive,
			"debugView.stateLabelForeground": p.fg,
			"debugView.valueChangedHighlight": p.borderActive,
			"debugTokenExpression.name": p.func,
			"debugTokenExpression.value": p.string,
			"debugTokenExpression.string": p.string,
			"debugTokenExpression.boolean": p.keyword,
			"debugTokenExpression.number": p.variable,
			"debugTokenExpression.error": "#E17888",

			// Notebook
			"notebook.cellBorderColor": p.border,
			"notebook.focusedCellBorder": p.borderActive,
			"notebook.inactiveFocusedCellBorder": p.border,
			"notebook.cellStatusBarItemHoverBackground": p.bgHover,
			"notebook.editorBackground": p.bg,
			"notebook.cellEditorBackground": p.bgAlt,
			"notebook.outputContainerBackground": p.bgAlt,
			"notebook.selectedCellBackground": p.bgHover,

			// Symbol icon colors (IntelliSense autocomplete icons — 35 keys)
			"symbolIcon.arrayForeground": p.variable,
			"symbolIcon.booleanForeground": p.keyword,
			"symbolIcon.classForeground": p.type,
			"symbolIcon.colorForeground": p.attribute,
			"symbolIcon.constantForeground": p.module,
			"symbolIcon.constructorForeground": p.func,
			"symbolIcon.enumeratorForeground": p.operator,
			"symbolIcon.enumeratorMemberForeground": p.variable,
			"symbolIcon.eventForeground": p.attribute,
			"symbolIcon.fieldForeground": p.interface,
			"symbolIcon.fileForeground": p.fgMuted,
			"symbolIcon.folderForeground": p.fgMuted,
			"symbolIcon.functionForeground": p.func,
			"symbolIcon.interfaceForeground": p.interface,
			"symbolIcon.keyForeground": p.keyword,
			"symbolIcon.keywordForeground": p.keyword,
			"symbolIcon.methodForeground": p.func,
			"symbolIcon.moduleForeground": p.module,
			"symbolIcon.namespaceForeground": p.attribute,
			"symbolIcon.nullForeground": p.keyword,
			"symbolIcon.numberForeground": p.variable,
			"symbolIcon.objectForeground": p.type,
			"symbolIcon.operatorForeground": p.operator,
			"symbolIcon.packageForeground": p.module,
			"symbolIcon.propertyForeground": p.interface,
			"symbolIcon.referenceForeground": p.func,
			"symbolIcon.snippetForeground": p.string,
			"symbolIcon.stringForeground": p.string,
			"symbolIcon.structForeground": p.type,
			"symbolIcon.textForeground": p.fg,
			"symbolIcon.typeParameterForeground": p.type,
			"symbolIcon.unitForeground": p.variable,
			"symbolIcon.variableForeground": p.variable,
			"symbolIcon.classForeground2": p.type,
			"symbolIcon.functionForeground2": p.func,

			// Bracket pair colorization
			"editorBracketHighlight.foreground1": p.keyword,
			"editorBracketHighlight.foreground2": p.func,
			"editorBracketHighlight.foreground3": p.module,
			"editorBracketHighlight.foreground4": p.string,
			"editorBracketHighlight.foreground5": p.interface,
			"editorBracketHighlight.foreground6": p.operator,
			"editorBracketHighlight.unexpectedBracket.foreground": "#E17888",
			"editorBracketPairGuide.background1": p.keyword + "20",
			"editorBracketPairGuide.background2": p.func + "20",
			"editorBracketPairGuide.background3": p.module + "20",
			"editorBracketPairGuide.activeBackground1": p.keyword + "40",
			"editorBracketPairGuide.activeBackground2": p.func + "40",
			"editorBracketPairGuide.activeBackground3": p.module + "40",

			// Command center
			"commandCenter.background": p.bgAlt,
			"commandCenter.foreground": p.fg,
			"commandCenter.activeForeground": p.fg,
			"commandCenter.activeBackground": p.bgActive,
			"commandCenter.border": p.border,
			"commandCenter.inactiveBorder": p.border,

			// Misc
			"progressBar.background": p.borderActive,
			"pickerGroup.border": p.border,
			"pickerGroup.foreground": p.fgMuted,
			"keybindingLabel.background": p.bgActive,
			"keybindingLabel.foreground": p.fg,
			"keybindingLabel.border": p.border,
			"keybindingLabel.bottomBorder": p.border,
			"extensionBadge.remoteForeground": p.fg,
			"extensionBadge.remoteBackground": p.bgActive,
			"walkThrough.embeddedEditorBackground": p.bgAlt,
			"welcomePage.tileBackground": p.bgAlt,
			"welcomePage.tileHoverBackground": p.bgHover,
			"welcomePage.tileBorder": p.border,
			"welcomePage.progress.background": p.bgActive,
			"welcomePage.progress.foreground": p.borderActive,
		},

		// ── TextMate token rules ─────────────────────────────────
		tokenColors: [
			// Base
			{ scope: [""], settings: { foreground: p.fg } },

			// Comments
			{
				scope: [
					"comment",
					"punctuation.definition.comment",
					"string.quoted.docstring",
				],
				settings: { foreground: p.comment, fontStyle: "italic" },
			},

			// Keywords & control flow
			{
				scope: [
					"keyword",
					"keyword.control",
					"keyword.operator.new",
					"keyword.operator.delete",
					"keyword.other.using",
					"keyword.other.import",
					"keyword.other.export",
					"storage.type",
					"storage.modifier",
					"keyword.control.import",
					"keyword.control.export",
					"keyword.control.from",
					"keyword.control.as",
				],
				settings: { foreground: p.keyword },
			},

			// Functions & methods
			{
				scope: [
					"entity.name.function",
					"meta.function-call",
					"support.function",
					"entity.name.method",
					"meta.method-call.js",
					"support.function.misc",
					"keyword.other.special-method",
					"entity.name.function.python",
				],
				settings: { foreground: p.func },
			},

			// Strings
			{
				scope: [
					"string",
					"string.quoted",
					"string.template",
					"string.interpolated",
					"string.regexp",
					"markup.inline.raw",
				],
				settings: { foreground: p.string },
			},

			// Numbers
			{
				scope: ["constant.numeric", "constant.language.numeric"],
				settings: { foreground: p.variable },
			},

			// Variables & parameters
			{
				scope: [
					"variable",
					"variable.other",
					"variable.object.property",
					"variable.other.object.property",
					"variable.other.constant",
					"variable.parameter.function",
				],
				settings: { foreground: p.variable },
			},

			// Types / classes
			{
				scope: [
					"entity.name.type",
					"entity.name.class",
					"entity.name.struct",
					"entity.name.enum",
					"support.class",
					"support.type",
					"meta.type.annotation",
					"entity.other.inherited-class",
				],
				settings: { foreground: p.type },
			},

			// Interfaces / DOM / type annotations
			{
				scope: [
					"entity.name.type.interface",
					"support.type.builtin",
					"support.constant.property-descriptor",
					"support.variable.property",
					"support.variable.dom",
					"entity.other.attribute-name.pseudo-class",
					"entity.other.attribute-name.pseudo-element",
				],
				settings: { foreground: p.interface },
			},

			// Operators & decorators & enums
			{
				scope: [
					"keyword.operator",
					"keyword.operator.logical",
					"keyword.operator.arithmetic",
					"keyword.operator.assignment",
					"keyword.operator.comparison",
					"keyword.operator.bitwise",
					"keyword.operator.type.annotation",
					"meta.decorator",
					"punctuation.decorator",
					"constant.language.enum",
				],
				settings: { foreground: p.operator },
			},

			// HTML tags
			{
				scope: [
					"entity.name.tag",
					"meta.tag.sgml",
					"markup.deleted.git_gutter",
					"entity.name.tag.html",
					"entity.name.tag.xml",
				],
				settings: { foreground: p.tag },
			},

			// HTML attributes
			{
				scope: [
					"entity.other.attribute-name",
					"entity.other.attribute-name.html",
					"entity.other.attribute-name.xml",
				],
				settings: { foreground: p.attribute },
			},

			// CSS properties
			{
				scope: [
					"support.type.property-name",
					"support.type.property-name.css",
					"entity.name.tag.css",
				],
				settings: { foreground: p.interface },
			},

			// CSS values / units
			{
				scope: [
					"support.constant.property-value.css",
					"constant.other.color",
					"constant.other.unit",
				],
				settings: { foreground: p.string },
			},

			// Imports / modules / React components
			{
				scope: [
					"entity.name.module",
					"variable.other.module",
					"support.other.module",
					"keyword.control.module",
					"meta.import",
					"meta.export",
					"entity.name.tag.jsx",
					"entity.name.tag.tsx",
				],
				settings: { foreground: p.module },
			},

			// JSON keys
			{
				scope: [
					"support.type.property-name.json",
					"string.json meta.structure.dictionary.json > string.quoted.json",
				],
				settings: { foreground: p.func },
			},

			// Markdown headings
			{
				scope: ["markup.heading", "entity.name.section.markdown"],
				settings: { foreground: p.keyword, fontStyle: "bold" },
			},

			// Markdown bold / italic
			{
				scope: ["markup.bold", "markup.bold.markdown"],
				settings: { foreground: p.type, fontStyle: "bold" },
			},
			{
				scope: ["markup.italic", "markup.italic.markdown"],
				settings: { foreground: p.variable, fontStyle: "italic" },
			},

			// Markdown links
			{
				scope: ["markup.underline.link", "string.other.link.description"],
				settings: { foreground: p.func },
			},

			// Markdown code blocks
			{
				scope: ["markup.fenced_code", "markup.inline.raw.string.markdown"],
				settings: { foreground: p.string },
			},

			// Punctuation (brackets, commas, colons)
			{
				scope: [
					"punctuation.definition",
					"punctuation.separator",
					"punctuation.terminator",
					"punctuation.accessor",
					"meta.brace.round",
					"meta.brace.curly",
					"meta.brace.square",
				],
				settings: { foreground: p.punctuation },
			},

			// Boolean / null / undefined
			{
				scope: [
					"constant.language.boolean",
					"constant.language.null",
					"constant.language.undefined",
					"constant.language.infinity",
					"constant.language.nan",
				],
				settings: { foreground: p.keyword },
			},

			// Template string expressions
			{
				scope: ["punctuation.definition.template-expression"],
				settings: { foreground: p.operator },
			},

			// Escape sequences
			{
				scope: ["constant.character.escape"],
				settings: { foreground: p.module },
			},

			// Regex
			{
				scope: ["string.regexp", "string.regexp.character-class"],
				settings: { foreground: p.attribute },
			},

			// SQL keywords
			{
				scope: ["keyword.other.DML", "keyword.other.DDL", "keyword.other.SQL"],
				settings: { foreground: p.keyword },
			},

			// Shell / bash
			{
				scope: ["keyword.operator.pipe", "keyword.operator.redirect"],
				settings: { foreground: p.operator },
			},

			// TOML / INI keys
			{
				scope: ["keyword.other.definition.ini", "variable.other.key.toml"],
				settings: { foreground: p.func },
			},

			// Dockerfile
			{
				scope: ["keyword.other.special-method.dockerfile"],
				settings: { foreground: p.keyword },
			},

			// GraphQL
			{
				scope: ["keyword.operation.graphql", "entity.name.fragment.graphql"],
				settings: { foreground: p.keyword },
			},

			// YAML keys
			{
				scope: ["entity.name.tag.yaml"],
				settings: { foreground: p.func },
			},
		],
	};
}
