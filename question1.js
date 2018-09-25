'use strict';

var fs = require('fs'),
    parseString = require('xml2js').parseString,
    xml2js = require('xml2js');

let student ;
module.exports.fileName ='test.xml';
module.exports.nodeValueToChange = 'Wipro.com';
module.exports.newXMLFileName = 'modifiedXMLFile.xml';
module.exports.result = '';

exports.modifyXMLData = function(callback) {
   fs.readFile(module.exports.fileName, 'utf-8', function (err, data){
    if(err) module.exports.result = 'false'
           return ; 
    // we log out the readFile results    
    console.log(data);
    // we then pass the data to our method here
    parseString(data, function(err, result){
        if(err) 
        console.log(err);
        // here we log the results of our xml string conversion
        console.log(result); 
        
        var json = result;
        
        json.root.graph[0].node[0].weight = module.exports.nodeValueToChange ;
        
        // create a new builder object and then convert
        // our json back to xml.
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(json);
        
        fs.writeFile(module.exports.newXMLFileName, xml, function(err, data){
            if (err) console.log(err);
            
            console.log("successfully written our update xml to file");
        })
        module.exports.result = 'true';
        callback('true')
                  
    });
});    
    
}

exports.modifyXMLData(function (result) {
    console.log(result);
});




