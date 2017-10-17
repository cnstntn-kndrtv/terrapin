var fromDB = [
    {subject: ':optik', object: 'ontolex#Word', predicate: 'rdf#type' },
    {subject: ':optik', object: ':optik:lemma', predicate: 'ontolex#canonicalForm' },
    // {subject: ':optik', object: ':optik:form1_optik', predicate: 'ontolex#otherForm' },
    {subject: ':optik', object: ':optik:form2_optika', predicate: 'ontolex#otherForm' },
    {subject: ':optik', object: ':optik:form3_optiku', predicate: 'ontolex#otherForm' },
    {subject: ':optik', object: ':optik:form4_optika', predicate: 'ontolex#otherForm' },
    // {subject: ':optik', object: ':optik:form5_optikom', predicate: 'ontolex#otherForm' },
    // {subject: ':optik', object: ':optik:form6_optike', predicate: 'ontolex#otherForm' },
    // {subject: ':optik', object: ':optik:form7_optiki', predicate: 'ontolex#otherForm' },
    // {subject: ':optik', object: ':optik:form8_optikov', predicate: 'ontolex#otherForm' },
    // {subject: ':optik', object: ':optik:form9_optikam', predicate: 'ontolex#otherForm' },
    // {subject: ':optik', object: ':optik:form10_optikov', predicate: 'ontolex#otherForm' },
    // {subject: ':optik', object: ':optik:form11_optikami', predicate: 'ontolex#otherForm' },
    // {subject: ':optik', object: ':optik:form12_optikah', predicate: 'ontolex#otherForm' },
    {subject: ':optik:lemma', object: '"оптик"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':optik:lemma', object: '"ˈoptʲɪk"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':optik:lemma', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    {subject: ':optik:lemma', object: 'lexinfo#animate', predicate: 'lexinfo#animacy' },
    {subject: ':optik:lemma', object: 'lexinfo#masculine', predicate: 'lexinfo#gender' },

    // {subject: ':optik:form1_optik', object: '"ˈoptʲɪk"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':optik:form1_optik', object: '"оптик"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optik:form1_optik', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':optik:form1_optik', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
        
    {subject: ':optik:form2_optika', object: '"ˈoptʲɪkə"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':optik:form2_optika', object: '"оптика"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':optik:form2_optika', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':optik:form2_optika', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },

    {subject: ':optik:form3_optiku', object: '"оптику"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':optik:form3_optiku', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':optik:form3_optiku', object: 'lexinfo#dativeCase', predicate: 'lexinfo#case' },

    {subject: ':optik:form4_optika', object: '"ˈoptʲɪkə"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':optik:form4_optika', object: '"оптика"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':optik:form4_optika', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':optik:form4_optika', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },

    // {subject: ':optik:form5_optikom', object: '"оптиком"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optik:form5_optikom', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':optik:form5_optikom', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },

    // {subject: ':optik:form6_optike', object: '"оптике"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optik:form6_optike', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':optik:form6_optike', object: 'lexinfo#locativeCase', predicate: 'lexinfo#case' },

    // {subject: ':optik:form7_optiki', object: '"оптики"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optik:form7_optiki', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optik:form7_optiki', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },

    // {subject: ':optik:form8_optikov', object: '"оптиков"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optik:form8_optikov', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optik:form8_optikov', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },

    // {subject: ':optik:form9_optikam', object: '"оптикам"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optik:form9_optikam', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optik:form9_optikam', object: 'lexinfo#dativeCase', predicate: 'lexinfo#case' },

    // {subject: ':optik:form10_optikov', object: '"оптиков"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optik:form10_optikov', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optik:form10_optikov', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },

    // {subject: ':optik:form11_optikami', object: '"оптиками"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optik:form11_optikami', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optik:form11_optikami', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },

    // {subject: ':optik:form12_optikah', object: '"оптиках"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optik:form12_optikah', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optik:form12_optikah', object: 'lexinfo#locativeCase', predicate: 'lexinfo#case' },

    {subject: ':optika', object: 'ontolex#Word', predicate: 'rdf#type' },
    {subject: ':optika', object: ':optika:lemma', predicate: 'ontolex#canonicalForm' },
    {subject: ':optika', object: ':optika:form1_optika', predicate: 'ontolex#otherForm' },
    {subject: ':optika', object: ':optika:form2_optiki', predicate: 'ontolex#otherForm' },
    {subject: ':optika', object: ':optika:form3_optike', predicate: 'ontolex#otherForm' },
    // {subject: ':optika', object: ':optika:form4_optiku', predicate: 'ontolex#otherForm' },
    // {subject: ':optika', object: ':optika:form5_optikoy', predicate: 'ontolex#otherForm' },
    // {subject: ':optika', object: ':optika:form6_optikoyu', predicate: 'ontolex#otherForm' },
    // {subject: ':optika', object: ':optika:form7_optike', predicate: 'ontolex#otherForm' },
    // {subject: ':optika', object: ':optika:form8_optiki', predicate: 'ontolex#otherForm' },
    // {subject: ':optika', object: ':optika:form9_optik', predicate: 'ontolex#otherForm' },
    // {subject: ':optika', object: ':optika:form10_optikam', predicate: 'ontolex#otherForm' },
    // {subject: ':optika', object: ':optika:form11_optiki', predicate: 'ontolex#otherForm' },
    // {subject: ':optika', object: ':optika:form12_optikami', predicate: 'ontolex#otherForm' },
    // {subject: ':optika', object: ':optika:form13_optikah', predicate: 'ontolex#otherForm' },

    {subject: ':optika:lemma', object: '"оптика"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':optika:lemma', object: '"ˈoptʲɪkə"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':optika:lemma', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    {subject: ':optika:lemma', object: 'lexinfo#inanimate', predicate: 'lexinfo#animacy' },
    {subject: ':optika:lemma', object: 'lexinfo#feminine', predicate: 'lexinfo#gender' },

    {subject: ':optika:form1_optika', object: '"ˈoptʲɪkə"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':optika:form1_optika', object: '"оптика"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':optika:form1_optika', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':optika:form1_optika', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },

    {subject: ':optika:form2_optiki', object: '"оптики"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':optika:form2_optiki', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':optika:form2_optiki', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },

    {subject: ':optika:form3_optike', object: '"оптике"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':optika:form3_optike', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':optika:form3_optike', object: 'lexinfo#dativeCase', predicate: 'lexinfo#case' },

    // {subject: ':optika:form4_optiku', object: '"оптику"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optika:form4_optiku', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':optika:form4_optiku', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':optika:form5_optikoy', object: '"оптикой"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optika:form5_optikoy', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':optika:form5_optikoy', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':optika:form6_optikoyu', object: '"оптикою"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optika:form6_optikoyu', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':optika:form6_optikoyu', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':optika:form7_optike', object: '"оптике"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optika:form7_optike', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':optika:form7_optike', object: 'lexinfo#locativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':optika:form8_optiki', object: '"оптики"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optika:form8_optiki', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optika:form8_optiki', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':optika:form9_optik', object: '"ˈoptʲɪk"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':optika:form9_optik', object: '"оптик"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optika:form9_optik', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optika:form9_optik', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':optika:form10_optikam', object: '"оптикам"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optika:form10_optikam', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optika:form10_optikam', object: 'lexinfo#dativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':optika:form11_optiki', object: '"оптики"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optika:form11_optiki', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optika:form11_optiki', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':optika:form12_optikami', object: '"оптиками"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optika:form12_optikami', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optika:form12_optikami', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':optika:form13_optikah', object: '"оптиках"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':optika:form13_optikah', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':optika:form13_optikah', object: 'lexinfo#locativeCase', predicate: 'lexinfo#case' }
]
