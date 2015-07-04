'use strict';
var fs = require('fs');
var xml2js = require('xml2js');
var _ = require('lodash');
var fname = process.argv[2];

var parser = new xml2js.Parser();
fs.readFile(fname, function (err, data) {
    parser.parseString(data, function (err, result) {
        _.each(result.cashBack.programme, function(p){
            var pgName = p.name.join(' ');
            _.each(p.action, function(a){
                console.log(pgName+';'+a.$.montantCom);
            })
        });
    });
});