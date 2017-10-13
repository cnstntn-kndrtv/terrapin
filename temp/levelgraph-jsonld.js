let level = require("levelup"),
    levelgraph = require('levelgraph');
    // levelgraphJSONLD = require('levelgraph-jsonld'),
    // yourDB = level("./db"),
    // db_js = levelgraphJSONLD(levelgraph(yourDB));

var db = levelgraph(level("./db"));

// let triples = [
//     {
//         subject: 's2',
//         predicate: 'p',
//         object: 'o1'
//     },
//     {
//         subject: 's2',
//         predicate: 'p',
//         object: 'o2'
//     },
//     {
//         subject: 's2',
//         predicate: 'p2',
//         object: 'o3'
//     },
// ]
//
// db.put(triples, function(err) {
// });

// s, s2
results = {}
db.get({}, function(err, list) {
    results['s'] = []
    list.forEach((l) => {
        results['s'].push({predicate: l.predicate, object: l.object});
    });
    console.log(results);
});

// var N3 = require('n3');
//
// let trtl = `@prefix dc: <http://purl.org/dc/terms/> .
//             @prefix lemon: <http://lemon-model.net/lemon#> .
//             @prefix lexinfo: <http://www.lexinfo.net/ontology/2.0/lexinfo#> .
//             @prefix owl: <http://www.w3.org/2002/07/owl#> .
//             @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
//             @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
//             @prefix skos: <http://www.w3.org/2004/02/skos/core#> .
//
//             <http://russianword.net/words/100000> a lemon:LexicalEntry;
//                rdfs:label "изгрязниться"@ru;
//                rdfs:label "contaminated"@en;
//                lemon:canonicalForm <http://russianword.net/words/100000#form>;
//                lemon:entry <http://russianword.net/>;
//                lexinfo:partOfSpeech lexinfo:verb .
//
//             <http://russianword.net/words/100000#form> a lemon:Form;
//                lemon:writtenRep "изгрязниться"@ru;
//                lemon:writtenRep "contaminated"@en .`
//
// var parser = N3.Parser();
//
// parser.parse(trtl, (error, triple, prefixes) => {
//     if (triple)
//         console.log(triple);
//
//     else
//         console.log("# That's all, folks!", prefixes)
// })
