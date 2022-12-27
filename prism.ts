//@ts-ignore
Prism.languages.gum = Prism.languages.extend("clike", {
    comment: /\b(?:-- ?.+\n)\b/,
    keyword:
        /\b(?:else|for|if|return|import|export|break|switch|case|continue|while|as|in|(?:local|global)!?(?:\[\])?)\b/,
    builtin: /\b(?:null)\b/,
    boolean: /\b(?:true|false)\b/,
    operator:
        /(?:[+\-*/%&|!=.^]-|and|or|not)/,
    number: /\b[0-9]+\b/,
    string: /[a-z]?"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'/,
    tag: /@([a-zA-Z_][a-zA-Z0-9_]*)/,
})