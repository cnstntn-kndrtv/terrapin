var jsonld = require('jsonld');

var doc = {
    "http://schema.org/name": "Manu Sporny",
    "http://schema.org/url": {
        "@id": "http://manu.sporny.org/"
    },
    "http://schema.org/image": {
        "@id": "http://manu.sporny.org/images/manu.png"
    }
};
var context = {
    "name": "http://schema.org/name",
    "homepage": {
        "@id": "http://schema.org/url",
        "@type": "@id"
    },
    "image": {
        "@id": "http://schema.org/image",
        "@type": "@id"
    }
};

let trtl = `@prefix dc: <http://purl.org/dc/terms/> .
@prefix lemon: <http://lemon-model.net/lemon#> .
@prefix lexinfo: <http://www.lexinfo.net/ontology/2.0/lexinfo#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

<http://russianword.net/words/100000> a lemon:LexicalEntry;
   rdfs:label "изгрязниться"@ru;
   rdfs:label "contaminated"@en;
   lemon:canonicalForm <http://russianword.net/words/100000#form>;
   lemon:entry <http://russianword.net/>;
   lexinfo:partOfSpeech lexinfo:verb .

<http://russianword.net/words/100000#form> a lemon:Form;
   lemon:writtenRep "изгрязниться"@ru;
   lemon:writtenRep "contaminated"@en .`

jsonld.compact(doc, context, (err, compacted) => {
    console.log(compacted);
    console.log('--------');
    
    jsonld.toRDF(compacted, {
        format: 'application/nquads'
    }, function(err, nquads) {
        console.log(nquads);
    });
});

// jsonld.fromRDF(trtl, {
//     format: 'application/nquads'
// }, function(err, doc) {
//     console.log(err);
//     console.log(doc);
// });
