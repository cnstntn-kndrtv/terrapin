var terrapinViewConfig = {
    labelInTitle: true,
    labelTag: 'rdf:label',
    prefixes: [],
    tripleDelimiter: '::',
    compactView: false,
    possibleLinkType: ['plain', 'curved'],
    linkType: 1, // from possibleLinkType

    showGrid: false,
    gridStep: 50,
    gridPointSize: 2,
    snapTogrid: false,

    width: $(document).width(),
    height: $(document).height() - 50,
    x: 0,
    y: 0,
    
    maxZoom: 5,
    minZoom: 0.3,

    zoomOnElementFocus: 1.2,

    overlapNodes: false,

    terrapinWidth: 240,
    connectorRadius: 6,

    subjectPillowHeight: 30,
    subjectTextWidth: 217,
    subjectTextMaxStrings: 3,
    
    predicateTextMaxStrings: 3,
    predicateTextWidth: 115,

    objectTextMaxStrings: 3,
    objectTextWidth: 115,

    contentIndent: 5,
}

terrapinViewConfig.minTerrapinX = 0;
terrapinViewConfig.maxTerrapinX = terrapinViewConfig.width - terrapinViewConfig.terrapinWidth;

terrapinViewConfig.minTerrapinY = 5;
terrapinViewConfig.maxTerrapinY = terrapinViewConfig.height - terrapinViewConfig.subjectPillowHeight;

var fromDB_optic = [
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

var fromDB_mir = [
    {subject: ':mir', object: 'ontolex#Word', predicate: 'rdf#type' },
    {subject: ':mir', object: ':mir:lemma', predicate: 'ontolex#canonicalForm' },
    // {subject: ':mir', object: ':mir:form1_mir', predicate: 'ontolex#otherForm' },
    {subject: ':mir', object: ':mir:form2_mira', predicate: 'ontolex#otherForm' },
    {subject: ':mir', object: ':mir:form3_miru', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form4_mir', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form5_mirom', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form6_mire', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form7_miry', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form8_mirov', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form9_miram', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form10_miry', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form11_mirami', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form12_mirah', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form13_miru', predicate: 'ontolex#otherForm' },
    // {subject: ':mir', object: ':mir:form14_miru', predicate: 'ontolex#otherForm' },
    {subject: ':mir:lemma', object: '"мир"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':mir:lemma', object: '"mʲir"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':mir:lemma', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    {subject: ':mir:lemma', object: 'lexinfo#inanimate', predicate: 'lexinfo#animacy' },
    {subject: ':mir:lemma', object: 'lexinfo#masculine', predicate: 'lexinfo#gender' },
    // {subject: ':mir:form1_mir', object: '"mʲir"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':mir:form1_mir', object: '"мир"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form1_mir', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':mir:form1_mir', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
    {subject: ':mir:form2_mira', object: '"ˈmʲirə"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':mir:form2_mira', object: '"мира"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':mir:form2_mira', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':mir:form3_miru', object: '"миру"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':mir:form3_miru', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':mir:form3_miru', object: 'lexinfo#dativeCase', predicate: 'lexinfo#case' },
    // {subject: ':mir:form4_mir', object: '"mʲir"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':mir:form4_mir', object: '"мир"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form4_mir', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':mir:form4_mir', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },
    // {subject: ':mir:form5_mirom', object: '"ˈmʲirəm"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':mir:form5_mirom', object: '"миром"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form5_mirom', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':mir:form5_mirom', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },
    // {subject: ':mir:form6_mire', object: '"мире"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form6_mire', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':mir:form7_miry', object: '"миры"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form7_miry', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':mir:form7_miry', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
    // {subject: ':mir:form8_mirov', object: '"миров"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form8_mirov', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':mir:form8_mirov', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },
    // {subject: ':mir:form9_miram', object: '"мирам"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form9_miram', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':mir:form9_miram', object: 'lexinfo#dativeCase', predicate: 'lexinfo#case' },
    // {subject: ':mir:form10_miry', object: '"миры"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form10_miry', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':mir:form10_miry', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },
    // {subject: ':mir:form11_mirami', object: '"мирами"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form11_mirami', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':mir:form11_mirami', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },
    // {subject: ':mir:form12_mirah', object: '"мирах"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form12_mirah', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':mir:form12_mirah', object: 'lexinfo#locativeCase', predicate: 'lexinfo#case' },
    // {subject: ':mir:form13_miru', object: '"миру"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form13_miru', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':mir:form14_miru', object: '"миру"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':mir:form14_miru', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
]

// Ёж
var fromDB_yozh = [
    {subject: ':1_yozh', object: 'ontolex#Word', predicate: 'rdf#type' },
    {subject: ':1_yozh', object: ':1_yozh:lemma', predicate: 'ontolex#canonicalForm' },
    {subject: ':1_yozh', object: ':1_yozh:form1_yozh', predicate: 'ontolex#otherForm' },
    {subject: ':1_yozh', object: ':1_yozh:form2_ezha', predicate: 'ontolex#otherForm' },
    // {subject: ':1_yozh', object: ':1_yozh:form3_ezhu', predicate: 'ontolex#otherForm' },
    // {subject: ':1_yozh', object: ':1_yozh:form4_ezha', predicate: 'ontolex#otherForm' },
    // {subject: ':1_yozh', object: ':1_yozh:form5_ezhom', predicate: 'ontolex#otherForm' },
    // {subject: ':1_yozh', object: ':1_yozh:form6_ezhe', predicate: 'ontolex#otherForm' },
    // {subject: ':1_yozh', object: ':1_yozh:form7_ezhi', predicate: 'ontolex#otherForm' },
    // {subject: ':1_yozh', object: ':1_yozh:form8_ezhey', predicate: 'ontolex#otherForm' },
    // {subject: ':1_yozh', object: ':1_yozh:form9_ezham', predicate: 'ontolex#otherForm' },
    // {subject: ':1_yozh', object: ':1_yozh:form10_ezhey', predicate: 'ontolex#otherForm' },
    // {subject: ':1_yozh', object: ':1_yozh:form11_ezhami', predicate: 'ontolex#otherForm' },
    // {subject: ':1_yozh', object: ':1_yozh:form12_ezhah', predicate: 'ontolex#otherForm' },
    
    {subject: ':1_yozh:lemma', object: '"ёж"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':1_yozh:lemma', object: '"jɵʂ"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':1_yozh:lemma', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    {subject: ':1_yozh:lemma', object: 'lexinfo#animate', predicate: 'lexinfo#animacy' },
    {subject: ':1_yozh:lemma', object: 'lexinfo#masculine', predicate: 'lexinfo#gender' },
    
    {subject: ':1_yozh:form1_yozh', object: '"jɵʂ"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':1_yozh:form1_yozh', object: '"ёж"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':1_yozh:form1_yozh', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':1_yozh:form1_yozh', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
    
    {subject: ':1_yozh:form2_ezha', object: '"jɪˈʐa"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':1_yozh:form2_ezha', object: '"ежа"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':1_yozh:form2_ezha', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':1_yozh:form2_ezha', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },
    
    // {subject: ':1_yozh:form3_ezhu', object: '"ежу"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':1_yozh:form3_ezhu', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':1_yozh:form3_ezhu', object: 'lexinfo#dativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':1_yozh:form4_ezha', object: '"jɪˈʐa"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':1_yozh:form4_ezha', object: '"ежа"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':1_yozh:form4_ezha', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':1_yozh:form4_ezha', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':1_yozh:form5_ezhom', object: '"ɪ̯ɪˈʐom"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':1_yozh:form5_ezhom', object: '"ежом"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':1_yozh:form5_ezhom', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':1_yozh:form5_ezhom', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':1_yozh:form6_ezhe', object: '"ˈjeʐɪ̈"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':1_yozh:form6_ezhe', object: '"еже"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':1_yozh:form6_ezhe', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':1_yozh:form6_ezhe', object: 'lexinfo#locativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':1_yozh:form7_ezhi', object: '"ежи"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':1_yozh:form7_ezhi', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':1_yozh:form7_ezhi', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':1_yozh:form8_ezhey', object: '"ежей"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':1_yozh:form8_ezhey', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':1_yozh:form8_ezhey', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':1_yozh:form9_ezham', object: '"ежам"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':1_yozh:form9_ezham', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':1_yozh:form9_ezham', object: 'lexinfo#dativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':1_yozh:form10_ezhey', object: '"ежей"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':1_yozh:form10_ezhey', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':1_yozh:form10_ezhey', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':1_yozh:form11_ezhami', object: '"ежами"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':1_yozh:form11_ezhami', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':1_yozh:form11_ezhami', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':1_yozh:form12_ezhah', object: '"ежах"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':1_yozh:form12_ezhah', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':1_yozh:form12_ezhah', object: 'lexinfo#locativeCase', predicate: 'lexinfo#case' },
    
    {subject: ':2_yozh', object: 'ontolex#Word', predicate: 'rdf#type' },
    {subject: ':2_yozh', object: ':2_yozh:lemma', predicate: 'ontolex#canonicalForm' },
    {subject: ':2_yozh', object: ':2_yozh:form1_yozh', predicate: 'ontolex#otherForm' },
    {subject: ':2_yozh', object: ':2_yozh:form2_ezha', predicate: 'ontolex#otherForm' },
    // {subject: ':2_yozh', object: ':2_yozh:form3_ezhu', predicate: 'ontolex#otherForm' },
    // {subject: ':2_yozh', object: ':2_yozh:form4_yozh', predicate: 'ontolex#otherForm' },
    // {subject: ':2_yozh', object: ':2_yozh:form5_ezhom', predicate: 'ontolex#otherForm' },
    // {subject: ':2_yozh', object: ':2_yozh:form6_ezhe', predicate: 'ontolex#otherForm' },
    // {subject: ':2_yozh', object: ':2_yozh:form7_ezhi', predicate: 'ontolex#otherForm' },
    // {subject: ':2_yozh', object: ':2_yozh:form8_ezhey', predicate: 'ontolex#otherForm' },
    // {subject: ':2_yozh', object: ':2_yozh:form9_ezham', predicate: 'ontolex#otherForm' },
    // {subject: ':2_yozh', object: ':2_yozh:form10_ezhi', predicate: 'ontolex#otherForm' },
    // {subject: ':2_yozh', object: ':2_yozh:form11_ezhami', predicate: 'ontolex#otherForm' },
    // {subject: ':2_yozh', object: ':2_yozh:form12_ezhah', predicate: 'ontolex#otherForm' },
    
    {subject: ':2_yozh:lemma', object: '"ёж"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':2_yozh:lemma', object: '"jɵʂ"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':2_yozh:lemma', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    {subject: ':2_yozh:lemma', object: 'lexinfo#inanimate', predicate: 'lexinfo#animacy' },
    {subject: ':2_yozh:lemma', object: 'lexinfo#masculine', predicate: 'lexinfo#gender' },
    
    {subject: ':2_yozh:form1_yozh', object: '"jɵʂ"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':2_yozh:form1_yozh', object: '"ёж"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':2_yozh:form1_yozh', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':2_yozh:form1_yozh', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
    
    {subject: ':2_yozh:form2_ezha', object: '"jɪˈʐa"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    {subject: ':2_yozh:form2_ezha', object: '"ежа"@ru', predicate: 'ontolex#writtenRep' },
    {subject: ':2_yozh:form2_ezha', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: ':2_yozh:form2_ezha', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },
    
    // {subject: ':2_yozh:form3_ezhu', object: '"ежу"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':2_yozh:form3_ezhu', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':2_yozh:form3_ezhu', object: 'lexinfo#dativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':2_yozh:form4_yozh', object: '"jɵʂ"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':2_yozh:form4_yozh', object: '"ёж"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':2_yozh:form4_yozh', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':2_yozh:form4_yozh', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':2_yozh:form5_ezhom', object: '"ɪ̯ɪˈʐom"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':2_yozh:form5_ezhom', object: '"ежом"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':2_yozh:form5_ezhom', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':2_yozh:form5_ezhom', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':2_yozh:form6_ezhe', object: '"ˈjeʐɪ̈"@ru-fonipa', predicate: 'ontolex#phoneticRep' },
    // {subject: ':2_yozh:form6_ezhe', object: '"еже"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':2_yozh:form6_ezhe', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: ':2_yozh:form6_ezhe', object: 'lexinfo#locativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':2_yozh:form7_ezhi', object: '"ежи"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':2_yozh:form7_ezhi', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':2_yozh:form7_ezhi', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':2_yozh:form8_ezhey', object: '"ежей"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':2_yozh:form8_ezhey', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':2_yozh:form8_ezhey', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':2_yozh:form9_ezham', object: '"ежам"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':2_yozh:form9_ezham', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':2_yozh:form9_ezham', object: 'lexinfo#dativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':2_yozh:form10_ezhi', object: '"ежи"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':2_yozh:form10_ezhi', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':2_yozh:form10_ezhi', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':2_yozh:form11_ezhami', object: '"ежами"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':2_yozh:form11_ezhami', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':2_yozh:form11_ezhami', object: 'lexinfo#instrumentalCase', predicate: 'lexinfo#case' },
    //
    // {subject: ':2_yozh:form12_ezhah', object: '"ежах"@ru', predicate: 'ontolex#writtenRep' },
    // {subject: ':2_yozh:form12_ezhah', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: ':2_yozh:form12_ezhah', object: 'lexinfo#locativeCase', predicate: 'lexinfo#case' },
]

//аффикс
var fromDB = [
    //     {subject: 'http://kloud.one/russian-affix-ontology', object: 'owl#Ontology', predicate: 'rdf#type' },
    // {subject: 'http://kloud.one/russian-affix-ontology', object: 'http://kloud.one/russian-affix-ontology/1.0.0', predicate: 'owl#versionIRI' },
    // {subject: 'http://kloud.one/russian-affix-ontology', object: '"01-12-2016"', predicate: 'http://purl.org/dc/terms/date' },
    // {subject: 'http://kloud.one/russian-affix-ontology', object: '"RusAffOnto"@en', predicate: 'rdfs#label' },
    // {subject: 'http://kloud.one/russian-affix-ontology', object: '"Онтология Аффиксов Русского Языка"@ru', predicate: 'rdf#title' },
    // {subject: 'http://kloud.one/russian-affix-ontology', object: '"Russian Affixes Ontology"@en', predicate: 'rdf#title' },
    {subject: '#a1', object: 'owl#NamedIndividual', predicate: 'rdf#type' },
    {subject: '#a1', object: 'lexinfo#Suffix', predicate: 'rdf#type' },
    {subject: '#a1', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    {subject: '#a1', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: '#a1', object: 'lexinfo#masculine', predicate: 'lexinfo#gender' },
    {subject: '#a1', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
    {subject: '#a1', object: '"а"@ru', predicate: 'rdfs#label' },
    {subject: '#a2', object: 'owl#NamedIndividual', predicate: 'rdf#type' },
    {subject: '#a2', object: 'lexinfo#Suffix', predicate: 'rdf#type' },
    {subject: '#a2', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    {subject: '#a2', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    {subject: '#a2', object: 'lexinfo#masculine', predicate: 'lexinfo#gender' },
    {subject: '#a2', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },
    {subject: '#a2', object: '"а"@ru', predicate: 'rdfs#label' },
    {subject: '#a1', object: '#a2', predicate: 'something' },
    // {subject: '#a3', object: 'owl#NamedIndividual', predicate: 'rdf#type' },
    // {subject: '#a3', object: 'lexinfo#Suffix', predicate: 'rdf#type' },
    // {subject: '#a3', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    // {subject: '#a3', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: '#a3', object: 'lexinfo#masculine', predicate: 'lexinfo#gender' },
    // {subject: '#a3', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },
    // {subject: '#a3', object: '"а"@ru', predicate: 'rdfs#label' },
    // {subject: '#a4', object: 'owl#NamedIndividual', predicate: 'rdf#type' },
    // {subject: '#a4', object: 'lexinfo#Suffix', predicate: 'rdf#type' },
    // {subject: '#a4', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    // {subject: '#a4', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: '#a4', object: 'lexinfo#feminine', predicate: 'lexinfo#gender' },
    // {subject: '#a4', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
    // {subject: '#a4', object: '"а"@ru', predicate: 'rdfs#label' },
    // {subject: '#a5', object: 'owl#NamedIndividual', predicate: 'rdf#type' },
    // {subject: '#a5', object: 'lexinfo#Suffix', predicate: 'rdf#type' },
    // {subject: '#a5', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    // {subject: '#a5', object: 'lexinfo#singular', predicate: 'lexinfo#number' },
    // {subject: '#a5', object: 'lexinfo#neuter', predicate: 'lexinfo#gender' },
    // {subject: '#a5', object: 'lexinfo#genitiveCase', predicate: 'lexinfo#case' },
    // {subject: '#a5', object: '"а"@ru', predicate: 'rdfs#label' },
    // {subject: '#a6', object: 'owl#NamedIndividual', predicate: 'rdf#type' },
    // {subject: '#a6', object: 'lexinfo#Suffix', predicate: 'rdf#type' },
    // {subject: '#a6', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    // {subject: '#a6', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: '#a6', object: 'lexinfo#neuter', predicate: 'lexinfo#gender' },
    // {subject: '#a6', object: 'lexinfo#nominativeCase', predicate: 'lexinfo#case' },
    // {subject: '#a6', object: '"а"@ru', predicate: 'rdfs#label' },
    // {subject: '#a7', object: 'owl#NamedIndividual', predicate: 'rdf#type' },
    // {subject: '#a7', object: 'lexinfo#Suffix', predicate: 'rdf#type' },
    // {subject: '#a7', object: 'lexinfo#noun', predicate: 'lexinfo#partOfSpeech' },
    // {subject: '#a7', object: 'lexinfo#plural', predicate: 'lexinfo#number' },
    // {subject: '#a7', object: 'lexinfo#neuter', predicate: 'lexinfo#gender' },
    // {subject: '#a7', object: 'lexinfo#accusativeCase', predicate: 'lexinfo#case' },
    // {subject: '#a7', object: '"а"@ru', predicate: 'rdfs#label' },
]

var links = [],
    nodes = [];

var uniqueSubjects = new Map(),
    uniquePredicates = new Map(),
    uniqueObjects = new Map(),
    uniqueSubjectsAndObjects = new Set();

fromDB.forEach((triple) => {
    uniqueSubjects.set(triple.subject);
    uniquePredicates.set(triple.predicate);
    uniqueObjects.set(triple.object);

    uniqueSubjectsAndObjects.add(triple.subject);
    uniqueSubjectsAndObjects.add(triple.object);
});


// nodes
uniqueSubjectsAndObjects.forEach( (subject) => {
    let triples = [],
        uniquePredicates = new Set(),
        predicates = {};
    
    fromDB.forEach( (triple) => {
        if (triple.subject == subject) {
            triples.push(triple);
            uniquePredicates.add(triple.predicate);
        }
    })
    uniquePredicates.forEach( (predicate) => {
        predicates[predicate] = [];
        triples.forEach( (triple) => {
            if (triple.predicate == predicate) {
                predicates[predicate].push(triple.object);
            }
        })
    })
    let label = (uniquePredicates.has(terrapinViewConfig.labelTag)) ? predicates[terrapinViewConfig.labelTag][0] : subject;

    let terrapin = {
        id: subject,
        label: label,
        predicates: predicates,
        numOfOutcomes: 0,
        numOfIncomes: 0,

    }
    nodes.push(terrapin);
})

//links
nodes.forEach( (n) => {
    for (let predicate in n['predicates']) {
        // if (n['predicates'].hasOwnProperty(predicate) && predicate != terrapinViewConfig.labelTag) {
        if (n['predicates'].hasOwnProperty(predicate)) {
            let objects = n['predicates'][predicate];
            n.numOfOutcomes += objects.length;
            objects.forEach((object) => {
                links.push({
                    fullViewSource: n.id + terrapinViewConfig.tripleDelimiter + predicate + terrapinViewConfig.tripleDelimiter + object,
                    source: n.id,
                    target: object,
                    predicate: predicate,
                })
                for (let i = 0; i < nodes.length; i++) {
                    if (nodes[i].id == object) {
                        nodes[i].numOfIncomes += 1;
                        break;
                    }
                }
            })
        }
    }
})

var color = d3.scaleOrdinal(d3.schemeCategory20);

var zoom = d3.zoom()
            .scaleExtent([terrapinViewConfig.minZoom, terrapinViewConfig.maxZoom])
            .translateExtent([ 
                [
                    snapTogrid(0 - terrapinViewConfig.width / terrapinViewConfig.minZoom), 
                    snapTogrid(0 - terrapinViewConfig.height / terrapinViewConfig.minZoom)
                ], [
                    terrapinViewConfig.width * terrapinViewConfig.maxZoom, 
                    terrapinViewConfig.height * terrapinViewConfig.maxZoom
                ]
            ])
            .on('zoom', zoomed)
            .on('end', zoomEnded);

var svg = d3.select('#graphView').append('svg')
    .attr('width', terrapinViewConfig.width)
    .attr('height', terrapinViewConfig.height)
    .style('top', terrapinViewConfig.x)
    .style('left', terrapinViewConfig.y)
    .call(zoom);

var canvas = svg.append('g').attr('id', 'canvas').attr('class', 'colored');

// search vars
var searchButton = $('#searchButton');
var searchField = $('#searchField');
var searchREsults = [];


// go!
createGrid();
createPlainLinks(links);
createCurvedLinks(links);
createNodes(nodes);
simulate(nodes, links);

// grid
var grid;
function createGrid() {
    let x,
        minX = snapTogrid(0 - terrapinViewConfig.width / terrapinViewConfig.minZoom),
        maxX = terrapinViewConfig.width * terrapinViewConfig.maxZoom,
        y = snapTogrid(0 - terrapinViewConfig.height / terrapinViewConfig.minZoom),
        maxY = terrapinViewConfig.height * terrapinViewConfig.maxZoom;
    
    grid = canvas.append('g')
        .attr('id', 'grid')
    
    // grid border
    grid
        .append('rect')
        .attr('x', minX)
        .attr('y', y)
        .attr('width', maxX - minX)
        .attr('height', maxY - y);
    
    // begining of coords
    // TODO killme
    grid.append('circle').attr('cx', 0).attr('cy', 0).attr('r', 3).attr('fill', 'orange').attr('id', 'imTheBegining');
    
    // grid
    while (y <= maxY) {
        grid
            .append('line')
                .attr('x1', minX)
                .attr('x2', maxX)
                .attr('y1', y)
                .attr('y2', y)
                .attr('stroke-width', terrapinViewConfig.gridPointSize)
                .attr('stroke-dasharray', [terrapinViewConfig.gridPointSize, terrapinViewConfig.gridStep]);
        
        y += terrapinViewConfig.gridStep;
    }
}

// nodes
var node;
function createNodes(nodes) {
    node = canvas.append('g')
            .attr('class', 'nodes')
        .selectAll('svg')
            .data(nodes)
            .enter()
                .append('svg')
                    .attr('id', (d) => { return d.id; })
                    .call(d3.drag()
                        .on('start', dragStarted)
                        .on('drag', dragged)
                        .on('end', dragEnded))
                        .on('click', clicked);

    // node title
    var terrapinBodyY;
    node.append( (d) => {
        var title = d3.select(createElement('svg'))
        var titlePillow = d3.select(createElement('rect'));
        var titleText = d3.select(createElement('text'));
        titleText
            .attr('class', 'terrapin-title-text')
            .attr('y', terrapinViewConfig.contentIndent)
            .attr('x', terrapinViewConfig.connectorRadius * 2 + terrapinViewConfig.contentIndent)
            .text(() => { return d.label; })
                .call(wrapText, terrapinViewConfig.subjectTextWidth, terrapinViewConfig.subjectTextMaxStrings);

        var titleTextHeight = getSizeNotRendered(titleText).height;

        titlePillow
            .attr('class', 'terrapin-title-pillow')
            .attr('x', terrapinViewConfig.connectorRadius + 1)
            .attr('width', terrapinViewConfig.terrapinWidth - 2)
            .attr('height', titleTextHeight * 2 + terrapinViewConfig.contentIndent)
            .attr('rx', 5)
            .attr('fill', () => { return color(d.id)});
        
        terrapinBodyY = titleTextHeight + terrapinViewConfig.contentIndent * 2;
        title.append(() => { return titlePillow.node(); });
        title.append(() => { return titleText.node(); });

        return title.node();

    })
    // node title connector
    node.append('circle')
        .attr('class', 'terrapin-connection-point')
        .attr('r', terrapinViewConfig.connectorRadius)
        .attr('cx', terrapinViewConfig.connectorRadius)
        .attr('cy', terrapinViewConfig.subjectPillowHeight / 2)

    // node body
    node.append( (d) => {
        var body = d3.select(createElement('svg'));
        body.attr('class', 'terrapin-body')
            .attr('x', terrapinViewConfig.connectorRadius)
            .attr('y', terrapinBodyY)
        
        var id,
            objectColor,
            bodyBlock, 
            predicateBlock, 
            objectsBlock, 
            objectPillow, 
            objectText, 
            objectPillowHeight, 
            predicateBlockHeight, 
            objectsBlockHeight,
            objectPillowY,
            objectsBlockY = 0,
            predicateBlockY,
            maxHeight = 0,
            objects,
            bodyBlockY = 0,
            offsetx,
            offsety;

        for (var predicate in d.predicates) {
            if (d.predicates.hasOwnProperty(predicate)) {
                objects = d.predicates[predicate];
                bodyBlock = d3.select(createElement('svg'));
                predicateBlock = d3.select(createElement('text'));
                objectsBlock = d3.select(createElement('svg'));
                objectPillowY = 0;

                objects.forEach((object) => {
                    objectPillow = d3.select(createElement('svg'));
                    objectText = d3.select(createElement('text'));

                    // object text create
                    objectText
                        .attr('class', 'terrapin-object-text')
                        .attr('x', terrapinViewConfig.contentIndent)
                        .attr('y', terrapinViewConfig.contentIndent)
                        .text(object)
                            .call(wrapText, terrapinViewConfig.objectTextWidth, terrapinViewConfig.objectTextMaxStrings);

                    objectPillowHeight = getSizeNotRendered(objectText).height  + terrapinViewConfig.contentIndent * 2;

                    
                    objectColor = color(object);

                    // object pillow create
                    objectPillow
                        .append('rect')
                            .attr('class', 'terrapin-object-pillow')
                            .attr('width', terrapinViewConfig.objectTextWidth + terrapinViewConfig.contentIndent * 2)
                            .attr('height', objectPillowHeight)
                            .attr('rx', 5)
                            .attr('fill', objectColor);
                    
                    // connection point
                    id = d.id + terrapinViewConfig.tripleDelimiter + predicate + terrapinViewConfig.tripleDelimiter + object;
                    objectPillow
                        .append('circle')
                            .attr('id', id)
                            .attr('class', 'sourceNodes')
                            .attr('cx', terrapinViewConfig.objectTextWidth + terrapinViewConfig.contentIndent * 2)
                            .attr('cy', objectPillowHeight / 2)
                            .attr('r', terrapinViewConfig.connectorRadius)
                            .attr('fill', objectColor)
                    // bind data
                    offsetx = terrapinViewConfig.connectorRadius + terrapinViewConfig.predicateTextWidth + terrapinViewConfig.objectTextWidth + terrapinViewConfig.contentIndent * 4;
                    offsety = terrapinBodyY + bodyBlockY + objectPillowY + terrapinViewConfig.contentIndent + objectPillowHeight / 2;
                    for (var i = 0, l = links.length; i < l; i++) {
                        if (links[i].fullViewSource == id) {
                            links[i].offsetx = offsetx;
                            links[i].offsety = offsety;
                            break;
                        }
                    }

                    // object assembly
                    objectPillow
                        .append(() => { return objectText.node(); });
                    
                    objectsBlock
                        .append(() => { return objectPillow.node(); })
                            .attr('y',  objectPillowY);

                    objectPillowY += objectPillowHeight + terrapinViewConfig.contentIndent;
                })

                // predicate 
                predicateBlock
                    .attr('x', terrapinViewConfig.contentIndent)
                    .attr('class', 'terrapin-predicate-text')
                    .text(predicate)
                        .call(wrapText, terrapinViewConfig.predicateTextWidth, terrapinViewConfig.predicateTextMaxStrings);

                predicateBlockHeight = getSizeNotRendered(predicateBlock).height;
                objectsBlockHeight = getSizeNotRendered(objectsBlock).height;

                if (predicateBlockHeight > objectsBlockHeight) {
                    maxHeight = predicateBlockHeight + terrapinViewConfig.contentIndent * 2;
                    predicateBlockY = terrapinViewConfig.contentIndent;
                    objectsBlockY = verticalAlign(objectsBlockHeight, maxHeight, predicateBlockY);
                } else {
                    maxHeight = objectsBlockHeight + terrapinViewConfig.contentIndent * 2;
                    objectsBlockY = terrapinViewConfig.contentIndent;
                    predicateBlockY = verticalAlign(predicateBlockHeight, maxHeight, objectsBlockY);
                }
                bodyBlock
                    .attr('y', bodyBlockY)
                    .append('rect')
                        .attr('width', terrapinViewConfig.terrapinWidth)
                        .attr('height', maxHeight)
                        .attr('class', 'terrapin-body-block');

                bodyBlock
                    .append(() => { return predicateBlock.node(); })
                        .attr('y', predicateBlockY);

                bodyBlock
                    .append(() => { return objectsBlock.node(); })
                        .attr('y', objectsBlockY)
                        .attr('x', terrapinViewConfig.predicateTextWidth + terrapinViewConfig.contentIndent * 2);
                
                d.predicates[predicate].yOffset = objectPillowY;
                bodyBlockY += maxHeight;

                body.append(() => { return bodyBlock.node(); });
            }
        }
        d.height = bodyBlockY + terrapinBodyY;
        d.width = terrapinViewConfig.connectorRadius * 2 + terrapinViewConfig.predicateTextWidth + terrapinViewConfig.objectTextWidth + terrapinViewConfig.contentIndent * 4;
        return body.node();
    })

    // create SOP subject actions
    node.each((d, i, n) => {
        // console.log(d, i, n[i]);

        var myState = {
            iWasFound: false,
            iamRearrangingNow: false,
            iamMovedNow: false,
            highlightConnected: false,
        }

        var myActions = {
            iWasFound: [_swichMyHeaderActiveClass, _addToSearchResults],
            iamRearrangingNow: []
        }

        function _swichMyHeaderActiveClass() {
            var isActive = d3.select(n[i]).select('.terrapin-title-pillow').classed('active')
            if (isActive) {
                d3.select(n[i]).select('.terrapin-title-pillow').classed('active', false)
            } else {
                d3.select(n[i]).select('.terrapin-title-pillow').classed('active', true)
            }
        }

        function _addToSearchResults() {
            console.log('added to search results', d.id);
        }

        function _changeClassToRearanging(params) {
            console.log('class changed to rearranging')
        }


        function changeState(stateName, stateValue) {
            if (myState[stateName] != stateValue) {
                myState[stateName] = stateValue;
                _executeAction(stateName);
            }
        }

        function _executeAction(state) {
            if (myActions.hasOwnProperty(state)) {
                var acts = myActions[state];
                for (var i = 0, l = acts.length; i < l; i++) {
                    acts[i]();
                }
            }
        }

        searchField.on('input', () => {
            var str = d.id.toLowerCase();
            var searchStr = searchField.val().toLowerCase();
            if ( searchStr != '' && ~str.indexOf(searchStr) ) {
                changeState('iWasFound', true);
            } else {
                changeState('iWasFound', false);
            }
        });

    })
}

// links
// plain
var plainLink;
var curvedLink;
function createPlainLinks(links) {
    plainLink = canvas
        .append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links)
            .enter()
                .append('line')
                .attr('stroke', (d) => { return color(d.target) });
}
// curved
function createCurvedLinks(links) {
    curvedLink = canvas
        .append('g')
            .attr('class', 'links')
            .selectAll('path')
            .data(links)
            .enter()
                .append('path')
                .attr('fill', 'none')
                .attr('stroke', (d) => { return color(d.target) });
}

// its alive!
var simulation;
function simulate(nodes, links) {
    let rectangleCollide = d3.bboxCollide((d) => {
        let box = [ 
                    // top left corner
                    [0 - terrapinViewConfig.connectorRadius, 0 - terrapinViewConfig.connectorRadius],
                    // bottom right corner
                    [d.width + terrapinViewConfig.connectorRadius, d.height + terrapinViewConfig.connectorRadius + 20]
                ];
        return box;
    });

    simulation = d3.forceSimulation()
                    .force('collide', rectangleCollide)
                    .force('charge', d3.forceManyBody().strength(200))
                    .force('link', d3.forceLink().id((d) => { return d.id }).distance(terrapinViewConfig.terrapinWidth + 100))
                    .force('center', d3.forceCenter( terrapinViewConfig.width / 2 - terrapinViewConfig.terrapinWidth / 2, terrapinViewConfig.height / 2 ) )

    simulation
        .nodes(nodes)
        .on('tick', tick);

    simulation.force('link').links(links);
}

var arranger = {};
arranger.getGroup = function(node) {
    if (node.numOfIncomes == 0) node.group = 'first';
    if (node.numOfOutcomes == 0) node.group = 'last';
}

function tick_() {
    updateNodePosition();
    switch (terrapinViewConfig.possibleLinkType[terrapinViewConfig.linkType]) {
        case 'plain':
            updatePlainLinks();
            break;
        case 'curved':
            updateCurvedSoftLinks();
            break;
    }
}

function tick() {
    let k = 120 * this.alpha();
    
    updateCurvedSoftLinks2(k);
    updateNodePosition();
}


function updateNodePosition() {
    node
        .attr('x', (d) => {
            return d.x; 
        })
        .attr('y', (d) => {
            return d.y; 
        });
}

function updatePlainLinks() {
    plainLink
        .attr("x1", (d) => {
            if (terrapinViewConfig.compactView) {
                return d.source.x + terrapinViewConfig.connectorRadius;
            } else {
                return d.source.x + d.offsetx;
            }
        })
        .attr("y1", (d) => { 
            if (terrapinViewConfig.compactView) {
                return d.source.y + terrapinViewConfig.subjectPillowHeight / 2;
            } else {
                return d.source.y + d.offsety;
            }
        })
        .attr("x2", (d) => { return d.target.x + terrapinViewConfig.connectorRadius; })
        .attr("y2", (d) => { return d.target.y + terrapinViewConfig.subjectPillowHeight / 2; });
}

function updateCurvedSoftLinks2(k) {
    curvedLink
        .each((d) => {
            let sourceIndex = (d.source.index) ? d.source.index : 1;
            let targetIndex = (d.target.index) ? d.target.index : 1;
            // let yOffset = Object.keys(d.source.predicates).indexOf(d.predicate)
            let yOffset = d.source.predicates[d.predicate].yOffset;
            d.source.x = snapTogrid(d.source.x - k);
            d.target.x = snapTogrid(d.target.x + k);
            d.target.y = d.source.y + yOffset;
            // d.target.y = snapTogrid(d.target.y + targetIndex);
            // d.source.y = snapTogrid(d.target.y + sourceIndex);
            
            
        })
        .attr('d', (d) => {
            let sourceX, sourceY;
            if (terrapinViewConfig.compactView) {
                sourceX = d.source.x + terrapinViewConfig.connectorRadius;
                sourceY = d.source.y + terrapinViewConfig.subjectPillowHeight / 2;
            } else {
                sourceX = d.source.x + d.offsetx;
                sourceY = d.source.y + d.offsety;
            }
            
            let targetX = d.target.x + terrapinViewConfig.connectorRadius,
                targetY = d.target.y + terrapinViewConfig.subjectPillowHeight / 2;
            
            let intermediateX = (sourceX + targetX) / 2,
                intermediateY = (sourceY + targetY) / 2;
            
            let connectionPointsDistance = Math.abs(targetX - sourceX),
                bendIndentX = (connectionPointsDistance > 200) ? 100 : ( (connectionPointsDistance / 2 < 15 ) ? 15 : connectionPointsDistance / 2 );

            let sourceControlX = sourceX + bendIndentX,
                sourceControlY = sourceY,
                targetControlX = targetX - bendIndentX,
                targetControlY = targetY,
                intermediateControlX = intermediateX,
                intermediateControlY = intermediateY;
            
            let coords = 
                "M " + sourceX + ", " + sourceY + " " +
                "C " + sourceControlX + ", " + sourceControlY + ", " + 
                    intermediateControlX + ", " + intermediateControlY + ", " + 
                    intermediateX + ", " + intermediateY + " " +
                "S " + targetControlX + ", " + targetControlY + ", " + 
                    targetX + ", " + targetY;
            
            return coords;
        })
}

function updateCurvedSoftLinks() {
    curvedLink
        .attr('d', (d) => {
            let sourceX, sourceY;
            if (terrapinViewConfig.compactView) {
                sourceX = d.source.x + terrapinViewConfig.connectorRadius;
                sourceY = d.source.y + terrapinViewConfig.subjectPillowHeight / 2;
            } else {
                sourceX = d.source.x + d.offsetx;
                sourceY = d.source.y + d.offsety;
            }
            
            let targetX = d.target.x + terrapinViewConfig.connectorRadius,
                targetY = d.target.y + terrapinViewConfig.subjectPillowHeight / 2;
            
            let intermediateX = (sourceX + targetX) / 2,
                intermediateY = (sourceY + targetY) / 2;
            
            let connectionPointsDistance = Math.abs(targetX - sourceX),
                bendIndentX = (connectionPointsDistance > 200) ? 100 : ( (connectionPointsDistance / 2 < 15 ) ? 15 : connectionPointsDistance / 2 );

            let sourceControlX = sourceX + bendIndentX,
                sourceControlY = sourceY,
                targetControlX = targetX - bendIndentX,
                targetControlY = targetY,
                intermediateControlX = intermediateX,
                intermediateControlY = intermediateY;
            
            let coords = 
                "M " + sourceX + ", " + sourceY + " " +
                "C " + sourceControlX + ", " + sourceControlY + ", " + 
                    intermediateControlX + ", " + intermediateControlY + ", " + 
                    intermediateX + ", " + intermediateY + " " +
                "S " + targetControlX + ", " + targetControlY + ", " + 
                    targetX + ", " + targetY;
            
            return coords;
        })
}

function updateCurvedSquaredLinks() {
    curvedLink
        .attr('d', (d) => {
            var targetBody = $('#' + d.target);
            var sourceBody = $('#' + d.parent);
            var targetBodyTopY = targetBody.position().top;
            var targetBodyBottomY = targetBodyTopY + targetBody.height();
            var sourceBodyTopY = sourceBody.position().top;
            var sourceBodyBottomY = sourceBodyTopY + sourceBody.height();

            var targetPosition = targetBody.position();
            var sourcePosition = $('#' + d.source).position();

            var sourceX = sourcePosition.left + terrapinViewConfig.connectorRadius / 2;
            var sourceY = sourcePosition.top - terrapinViewConfig.connectorRadius / 2;
            var targetX = targetPosition.left;
            var targetY = targetPosition.top  + terrapinViewConfig.connectorRadius;
            
            var isTargetBehind = (targetX >= sourceX) ? true : false;
            var isTargetAbove = (targetY < sourceBodyTopY) ? true : false;
            var isTargetBelow = (targetY > sourceBodyBottomY) ? true : false;
            
            var intermediateX = (sourceX + targetX) / 2;
            var intermediateY = (sourceY + targetY) / 2;
            
            var connectionPointsDistance = Math.abs(targetX - sourceX);
            var bendIndentX = (connectionPointsDistance > 200) ? 100 : ( (connectionPointsDistance / 2 < 15 ) ? 15 : connectionPointsDistance / 2 );
            var sourceControlX = sourceX + bendIndentX;
            var sourceControlY = sourceY;
            var targetControlX = targetX - bendIndentX;
            var targetControlY = targetY;
            var intermediateControlX = intermediateX;
            var intermediateControlY = intermediateY;
            
            var coords = 
                "M " + sourceX + ", " + sourceY + " " +
                "C " + sourceControlX + ", " + sourceControlY + ", " + 
                    intermediateControlX + ", " + intermediateControlY + ", " + 
                    intermediateX + ", " + intermediateY + " " +
                "S " + targetControlX + ", " + targetControlY + ", " + 
                    targetX + ", " + targetY;
                
            
            return coords;
        }).attr('whoami', (d) => {return d.source}) // TODO kill me
}

// TODO kill me or use me
d3.selection.prototype.position = function(parent) {
    var el = this.node();
    var elPos = el.getBoundingClientRect();
    var parentPos
    if (parent) parentPos = parent.node().getBoundingClientRect();
    else parentPos = d3.select('body').node().getBoundingClientRect();

    return {
        top: elPos.top - parentPos.top,
        left: elPos.left - parentPos.left,
        width: elPos.width,
        bottom: elPos.bottom - parentPos.top,
        height: elPos.height,
        right: elPos.right - parentPos.left
    };

};

// TODO kill me or use me
function checkIsTerrapinInCanvas(d) {
    return {
        x: ( (d.x >= 0) && (d.x + d.width < terrapinViewConfig.width) ) ? true : false,
        y: ( (d.y >= 0) && (d.y + d.height < terrapinViewConfig.height) ) ? true : false
    }
}

function moveToTop(element) {
    element.parentNode.appendChild(element);
}

// drag and click nodes
function dragStarted(d) {
    d3.event.sourceEvent.stopPropagation();
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
    moveToTop(this); // move to top
    d3.select(this)
        .classed("dragging", true)
        .style('cursor', 'move');
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragEnded(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
    d.x = snapTogrid(d.x);
    d.y = snapTogrid(d.y);
    d3.select(this)
        .classed("dragging", false)
        .style('cursor', 'default');
}

function clicked(d) {
    //
}

// zoom canvas
var resetZoomButton = $('#resetZoomButton').click(resetZoom);
function resetZoom() {
    svg.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity);
}

var previousTransform = 0;
function zoomed() {
    let currentTransform = d3.event.transform;
    if (currentTransform.k > previousTransform.k) svg.style('cursor', 'zoom-in');
    if (currentTransform.k < previousTransform.k) svg.style('cursor', 'zoom-out');
    // if ((currentTransform.x - previousTransform.x) > 10 || (currentTransform.x - previousTransform.x) > 10) canvas.style('cursor', 'move');
    previousTransform = currentTransform;
    canvas.attr('transform', currentTransform);
}

function zoomEnded() {
    svg.style('cursor', 'default');
}
// TODO
function zoomToElement(element) {
    let d = element.datum();
    let scale = terrapinViewConfig.zoomOnElementFocus,
        x = d.x + d.width / 2,
        y = d.y + d.height / 2;
    
    svg.call(zoom.transform, transform(scale, x, y));
}

function transform(scale, x, y) {
    return d3.zoomIdentity
        .translate(terrapinViewConfig.width / 2, terrapinViewConfig.height / 2)
        .translate( 0 - (x * scale), -(y * scale))
        .scale(scale);
}

// change nodes type from compact to full
var changeNodeTypeButton = $('#changeNodeTypeButton').click(changeNodeType);
function changeNodeType() {
    terrapinViewConfig.compactView = !terrapinViewConfig.compactView;
    if (terrapinViewConfig.compactView) $('.terrapin-body').hide();
    else $('.terrapin-body').show();
    tick();
}

// change links type
var changeLinksTypeButton = $('#changeLinksTypeButton').click(changeLinksType);
function changeLinksType() {
    let max = terrapinViewConfig.possibleLinkType.length - 1;
    if (terrapinViewConfig.linkType < max) terrapinViewConfig.linkType++;
    else terrapinViewConfig.linkType = 0;
    console.log(terrapinViewConfig.possibleLinkType[terrapinViewConfig.linkType]);
}

// change color
var changeColorButton = $('#changeColorButton').click(changeColor);
function changeColor() {
    let c = $('#canvas').attr('class');
    console.log(c);
    if (c == 'colored') $('#canvas').removeClass('colored').addClass('monochrome');
    else $('#canvas').removeClass('monochrome').addClass('colored');
}

// utils
function createElement(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
}
function verticalAlign(elementHeight, parentHeight, parentY) {
    return parentHeight / 2 - elementHeight / 2;
}
function getSizeNotRendered(element) {
    var svg = d3.select('body').append('svg');
    if (element.node().tagName == 'tspan') svg.append('text').append(() => {return element.node().cloneNode(true)});
    else svg.append(() => {return element.node().cloneNode(true)});
    var size = {
            height: svg.node().getBBox().height,
            width: svg.node().getBBox().width
    }
    svg.remove();
    return size;
}
function wrapText(text, width, maxLines) {
    text.each(function () {
        var text = d3.select(this),
            letters = text.text().split('').reverse(),
            currentText,
            currentTextWidth,
            letter,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr('y');
        var x = isNaN(parseFloat(text.attr('x'))) ? 0 : parseFloat(text.attr('x'));
        var dy = 1,
            lineEndMark = ' ...',
            lineEndMarkTspan = text.text(null).append('tspan').text(lineEndMark)
            lineEndMarkWidth = getSizeNotRendered(text).width
            tspan = text.text(null).append('tspan').attr('dy', dy + 'em');

        while (letter = letters.pop()) { // letters
            line.push(letter);
            tspan.text(line.join(''));
            currentText = tspan.text();
            currentTextWidth = Math.ceil(getSizeNotRendered(tspan).width);
            if ((lineNumber + 1) < maxLines) {
                if (currentTextWidth >= width) {
                    line.pop();
                    tspan.text(line.join(''));
                    line = [letter];
                    tspan = text.append('tspan')
                        .attr('x', 0)
                        .attr('dx', x)
                        .attr('dy', ++lineNumber / 10 + lineHeight + 'em')
                        .text(letter);
                }
            } else {
                if (currentTextWidth + lineEndMarkWidth >= width) {
                    tspan.text(currentText.slice(0, currentText.length - lineEndMark.length) + lineEndMark);
                    break;
                }
            }
        }
    });
}

function snapTogrid (coord) {
    if (terrapinViewConfig.snapTogrid) return Math.round(coord / terrapinViewConfig.gridStep) * terrapinViewConfig.gridStep;
    else return coord;
}



/*
     - zoom & minimap
     - curve links
     - highlight
*/