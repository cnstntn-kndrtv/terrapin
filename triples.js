//chatBot
var fromDB = [
    {subject: 'hi_base', predicate: 'input', object: 'hi', visible: false },
    {subject: 'hi_base', predicate: 'contextInput', object: 'null', visible: false},
    {subject: 'hi_base', predicate: 'context', object: 'c1' },
    {subject: 'hi_base', predicate: 'response', object: 'whats ur name?_c1' },
    {subject: 'hi_base', predicate: 'action', object: '() => {}' },

    {subject: 'whats ur name?_c1', predicate: 'input', object: 'null', visible: false },
    {subject: 'whats ur name?_c1', predicate: 'context', object: 'c1' },
    {subject: 'whats ur name?_c1', predicate: 'response', object: 'nice to meet u' },
    {subject: 'whats ur name?_c1', predicate: 'action', object: '() => {}' },
]
