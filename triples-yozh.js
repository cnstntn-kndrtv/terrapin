// Ёж
var fromDB = [
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
