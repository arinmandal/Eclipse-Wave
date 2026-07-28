// Eclipse Wave — Syntax Token Builder
// Generates tokenColors and semanticTokenColors for a given palette p

// Helper: creates a tokenColor entry
const tc = (name, scope, settings) => ({
  name,
  scope: Array.isArray(scope) ? scope : [scope],
  settings,
});

module.exports = {

  buildTokenColors(p) {
    return [
      // ── SECTION 1: CORE ELEMENTS ──────────────────────────────────────────
      tc('Comments',
        ['comment', 'punctuation.definition.comment'],
        { foreground: p.cmt, fontStyle: 'italic' }),

      tc('Strings',
        ['string', 'punctuation.definition.string'],
        { foreground: p.str }),

      // Template literal BASE stays same color as strings
      tc('Template String Base',
        'string.template',
        { foreground: p.str }),

      tc('Numbers & Booleans',
        ['constant.numeric', 'constant.language'],
        { foreground: p.num }),

      // ── SECTION 2: KEYWORDS, STORAGE & OPERATORS ──────────────────────────
      tc('Keywords',
        ['keyword.control', 'keyword.other'],
        { foreground: p.kw, fontStyle: 'italic' }),

      tc('Storage Types & Modifiers',
        ['storage.type', 'storage.modifier'],
        { foreground: p.kw, fontStyle: 'italic' }),

      tc('Logical Operators (&&, ||, !)',
        'keyword.operator.logical',
        { foreground: p.op }),

      tc('Comparison Operators (===, !==, >, <)',
        ['keyword.operator.comparison', 'keyword.operator.relational'],
        { foreground: p.op }),

      tc('Assignment Operators (=, +=, -=)',
        'keyword.operator.assignment',
        { foreground: p.op }),

      tc('Arithmetic & Other Operators',
        'keyword.operator',
        { foreground: p.op }),

      tc('New Keyword',
        'keyword.operator.new',
        { foreground: p.kw, fontStyle: 'bold' }),

      tc('Punctuation (Brackets, Commas, Semicolons)',
        ['punctuation.separator', 'punctuation.terminator', 'punctuation.section', 'punctuation.accessor'],
        { foreground: p.fgd }),

      // ── SECTION 3: FUNCTIONS & CLASSES ────────────────────────────────────
      tc('Function Declarations & Calls',
        ['entity.name.function', 'meta.function-call', 'support.function'],
        { foreground: p.fn }),

      tc('Class & Type Declarations',
        ['entity.name.class', 'entity.name.type', 'support.class', 'support.type'],
        { foreground: p.typ }),

      tc('Inherited Class',
        'entity.other.inherited-class',
        { foreground: p.typ, fontStyle: 'italic' }),

      // ── SECTION 4: VARIABLES, CONSTANTS & PARAMETERS ─────────────────────
      tc('Variables',
        ['variable.other.object', 'variable.other.readwrite'],
        { foreground: p.vr }),

      tc('Object Properties & Keys',
        ['variable.other.property', 'support.type.property-name'],
        { foreground: p.prop }),

      tc('Language Constants & Built-ins (this, null, undefined)',
        ['variable.language', 'support.constant'],
        { foreground: p.lang }),

      tc('Function Parameters',
        'variable.parameter',
        { foreground: p.typ, fontStyle: 'italic' }),

      tc('this / self / super',
        ['variable.language.this', 'variable.language.self', 'variable.language.super'],
        { foreground: p.accl, fontStyle: 'italic' }),

      // ── SECTION 5: HTML & CSS ─────────────────────────────────────────────
      tc('HTML Tags',
        'entity.name.tag',
        { foreground: p.tag }),

      tc('HTML Tag Brackets (< >)',
        ['punctuation.definition.tag.begin', 'punctuation.definition.tag.end'],
        { foreground: p.lnum }),

      tc('HTML / CSS Attributes',
        ['entity.other.attribute-name', 'support.type.vendored.property-name'],
        { foreground: p.attr }),

      tc('HTML / CSS Attribute Values (quoted strings)',
        'string.quoted',
        { foreground: p.str }),

      tc('CSS Selectors (ID, Class)',
        ['entity.other.attribute-name.id', 'entity.other.attribute-name.class.css'],
        { foreground: p.typ }),

      tc('CSS Pseudo-classes (:hover, :focus)',
        'entity.other.attribute-name.pseudo-class',
        { foreground: p.attr }),

      tc('CSS Pseudo-elements (::before, ::after)',
        'entity.other.attribute-name.pseudo-element',
        { foreground: p.attr }),

      tc('CSS At-rules (@media, @import, @keyframes)',
        ['keyword.control.at-rule', 'keyword.at-rule'],
        { foreground: p.kw, fontStyle: 'italic' }),

      tc('CSS Property Values',
        ['support.constant.property-value', 'constant.other.color'],
        { foreground: p.num }),

      // ── SECTION 5b: SCSS ──────────────────────────────────────────────────
      tc('SCSS Variables ($var)',
        ['variable.scss', 'variable.other.scss', 'variable.sass'],
        { foreground: p.vr }),

      tc('SCSS Tag Selectors',
        'entity.name.tag.scss',
        { foreground: p.tag }),

      tc('SCSS Interpolation (#{...})',
        ['punctuation.section.interpolation', 'string.interpolated.scss'],
        { foreground: p.tpl }),

      // ── SECTION 6: MARKDOWN ───────────────────────────────────────────────
      tc('Markdown Headings',
        'entity.name.section.markdown',
        { foreground: p.acc, fontStyle: 'bold' }),

      tc('Markdown Heading Punctuation (# symbols)',
        'punctuation.definition.heading.markdown',
        { foreground: p.acc }),

      tc('Markdown Bold',
        'markup.bold.markdown',
        { fontStyle: 'bold' }),

      tc('Markdown Italic',
        'markup.italic.markdown',
        { fontStyle: 'italic' }),

      tc('Markdown Link URL',
        'markup.underline.link.markdown',
        { foreground: p.fn, fontStyle: 'underline' }),

      tc('Markdown Inline Code',
        'markup.inline.raw.string.markdown',
        { foreground: p.str }),

      tc('Markdown Fenced Code Block',
        ['markup.fenced_code.block.markdown', 'punctuation.definition.markdown'],
        { foreground: p.str }),

      tc('Markdown List Markers',
        ['punctuation.definition.list.begin.markdown', 'markup.list'],
        { foreground: p.prop }),

      tc('Markdown Blockquotes',
        ['markup.quote.markdown', 'punctuation.definition.quote.begin.markdown'],
        { foreground: p.cmt, fontStyle: 'italic' }),

      tc('Markdown Strikethrough',
        'markup.strikethrough',
        { foreground: p.lnum, fontStyle: 'strikethrough' }),

      // ── SECTION 7: REACT / JSX ────────────────────────────────────────────
      tc('JSX / TSX Component Tags',
        'support.class.component',
        { foreground: p.jsx }),

      tc('JSX Children / Text Nodes',
        'meta.jsx.children',
        { foreground: p.fgm }),

      tc('JSX Tag Meta',
        ['meta.tag.jsx', 'meta.tag.tsx'],
        { foreground: p.tag }),

      // ── SECTION 8: TEMPLATE STRINGS ──────────────────────────────────────
      // Only the ${} expression brackets & content get the warm orange
      tc('Template String Expression Delimiters (${...})',
        ['punctuation.definition.template-expression', 'meta.template.expression'],
        { foreground: p.tpl }),

      // ── SECTION 9: TYPE SYSTEM ────────────────────────────────────────────
      tc('Type Annotations (primitive types)',
        ['entity.name.type.module', 'support.type.primitive'],
        { foreground: p.prop }),

      tc('TypeScript Interface',
        'entity.name.type.interface',
        { foreground: p.iface, fontStyle: 'italic' }),

      tc('TypeScript Enum',
        'entity.name.type.enum',
        { foreground: p.enm }),

      tc('Enum Member',
        'variable.other.enummember',
        { foreground: p.num }),

      // ── SECTION 10: JSON / YAML / TOML ───────────────────────────────────
      tc('JSON / YAML Keys',
        ['support.type.property-name.json', 'entity.name.tag.yaml'],
        { foreground: p.fn }),

      tc('YAML Anchors & Aliases',
        ['entity.name.type.anchor.yaml', 'variable.other.alias.yaml'],
        { foreground: p.accl }),

      tc('TOML Table Headers',
        ['entity.name.table.toml', 'support.type.property-name.table.toml'],
        { foreground: p.fn }),

      // ── SECTION 11: IMPORTS, EXPORTS & FLOW CONTROL ───────────────────────
      tc('Import / Export Keywords',
        ['keyword.control.import', 'keyword.control.export', 'keyword.control.from', 'keyword.control.default', 'keyword.control.as'],
        { foreground: p.kw, fontStyle: 'italic' }),

      tc('Flow Control (return, break, continue, yield, throw)',
        ['keyword.control.flow', 'keyword.control.trycatch', 'keyword.control.loop', 'keyword.control.conditional'],
        { foreground: p.kw, fontStyle: 'italic' }),

      // ── SECTION 12: LANGUAGE-SPECIFIC ────────────────────────────────────
      tc('Python Decorators',
        'entity.name.function.decorator',
        { foreground: p.op }),

      tc('Python f-string Interpolation Braces',
        ['constant.character.format.placeholder.begin.python', 'constant.character.format.placeholder.end.python'],
        { foreground: p.tpl }),

      tc('Regular Expressions',
        'string.regexp',
        { foreground: p.rx }),

      tc('Escape Characters',
        'constant.character.escape',
        { foreground: p.tpl }),

      tc('DOM Variables (document, window)',
        ['support.variable.dom', 'support.variable.property.dom'],
        { foreground: p.prop }),

      tc('Console & Node Built-ins',
        ['support.function.console', 'support.class.console', 'support.variable.object.node', 'support.variable.object.process'],
        { foreground: p.prop }),

      tc('Module Name',
        'entity.name.module',
        { foreground: p.jsx }),

      // ── SECTION 13: EXTENDED LANGUAGES ────────────────────────────────────
      tc('Go Package Name',
        ['entity.name.package.go', 'entity.name.import.go'],
        { foreground: p.jsx }),

      tc('Rust Lifetime Annotations',
        ['entity.name.type.lifetime.rust', 'punctuation.definition.lifetime.rust'],
        { foreground: p.attr, fontStyle: 'italic' }),

      tc('Rust Macro',
        'entity.name.function.macro',
        { foreground: p.op }),

      tc('Java / C# Annotations',
        ['storage.type.annotation.java', 'punctuation.definition.annotation.java', 'storage.type.annotation'],
        { foreground: p.op, fontStyle: 'italic' }),

      tc('Shell Variables',
        ['variable.other.normal.shell', 'punctuation.definition.variable.shell'],
        { foreground: p.vr }),

      tc('SQL Keywords',
        ['keyword.other.DML.sql', 'keyword.other.DDL.sql', 'keyword.other.sql'],
        { foreground: p.kw, fontStyle: 'bold' }),

      tc('Docker Keywords',
        'keyword.other.special-method.dockerfile',
        { foreground: p.kw, fontStyle: 'bold' }),

      tc('GraphQL Types',
        ['support.type.graphql', 'entity.name.type.graphql'],
        { foreground: p.typ }),

      tc('GraphQL Field Names',
        'variable.graphql',
        { foreground: p.prop }),

      // ── SECTION 14: DIFF & GIT ────────────────────────────────────────────
      tc('Diff - Inserted', 'markup.inserted', { foreground: p.ins }),
      tc('Diff - Deleted',  'markup.deleted',  { foreground: p.del }),
      tc('Diff - Changed',  'markup.changed',  { foreground: p.wrn }),

      // ── SECTION 15: INVALID & DEPRECATED ─────────────────────────────────
      tc('Invalid or Illegal',
        'invalid.illegal',
        { foreground: p.err, fontStyle: 'italic bold' }),

      tc('Deprecated',
        'invalid.deprecated',
        { foreground: p.wrn, fontStyle: 'italic strikethrough' }),

      tc('Object Literal Key',
        'meta.object-literal.key',
        { foreground: p.prop }),
    ];
  },

  buildSemanticTokenColors(p) {
    return {
      // ── Variables ───────────────────────────────────────────────────────
      'variable':                         { foreground: p.vr },
      'variable.declaration':             { foreground: p.vr },
      'variable.readonly':                { foreground: p.vr, fontStyle: 'bold' },
      'variable.defaultLibrary':          { foreground: p.prop },
      'variable.readonly.defaultLibrary': { foreground: p.prop, fontStyle: 'bold' },
      // ── Parameters ──────────────────────────────────────────────────────
      'parameter':                        { foreground: p.typ, fontStyle: 'italic' },
      'selfParameter':                    { foreground: p.accl, fontStyle: 'italic' },
      // ── Functions & Methods ──────────────────────────────────────────────
      'function':                         { foreground: p.fn },
      'function.declaration':             { foreground: p.fn },
      'function.defaultLibrary':          { foreground: p.fn, fontStyle: 'italic' },
      'method':                           { foreground: p.fn },
      'method.declaration':               { foreground: p.fn, fontStyle: 'bold' },
      // ── Properties ──────────────────────────────────────────────────────
      'property':                         { foreground: p.prop },
      'property.declaration':             { foreground: p.prop },
      'property.readonly':                { fontStyle: 'bold' },
      // ── Types & Classes ──────────────────────────────────────────────────
      'class':                            { foreground: p.typ },
      'interface':                        { foreground: p.iface },
      'enum':                             { foreground: p.enm },
      'enumMember':                       { foreground: p.num },
      'struct':                           { foreground: p.typ },
      'type':                             { foreground: p.typ },
      'typeParameter':                    { foreground: p.typ, fontStyle: 'italic' },
      'namespace':                        { foreground: p.ns },
      // ── Special ──────────────────────────────────────────────────────────
      'decorator':                        { foreground: p.op, fontStyle: 'italic' },
      'macro':                            { foreground: p.op },
      'event':                            { foreground: p.attr },
      'regexp':                           { foreground: p.rx },
      'label':                            { foreground: p.kw },
      // ── Modifier Tokens (Rust, TS, C++) ──────────────────────────────────
      '*.mutable':                        { fontStyle: 'underline' },       // Rust mut variables
      '*.async':                          { fontStyle: 'italic' },          // async functions
      '*.deprecated':                     { fontStyle: 'strikethrough' },   // deprecated symbols
      '*.static':                         { fontStyle: 'bold' },            // static members
      '*.abstract':                       { fontStyle: 'italic' },          // abstract classes
      '*.unsafe':                         { foreground: p.err },            // Rust unsafe blocks
      'magicFunction':                    { foreground: p.fn, fontStyle: 'bold' }, // Python dunders
    };
  },
};
