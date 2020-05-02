'use strict';
var myObj = (function() {    
    var privateProp1 = 1;  var privateProp2 = "test";    
    var setPrivate1 = function(val1)  { privateProp1 = val1; }   
    var compute = function() {return privateProp1 + privateProp2;}   
    return {compute: compute, setPrivate1: setPrivate1};
})();

console.log(typeof myObj);
console.log(Object.keys(myObj));
console.log(myObj.compute());


/*
undefined case：

function readFileMethod() {
    fs.readFile(this.fileName, function (err, data) {
                if (!err) {    
                    console.log(this.fileName, 'has length', data.length);        
                }    
            }
        );
}
var obj = {fileName: "aFile", readFile: readFileMethod};
console.log(obj.readFile());

*/
var fs = require('fs');
function readFileMethod() {
    fs.readFile(this.fileName, (err, data) => {        
        if (!err) {    
            console.log(this.fileName, 'has length', data.length);        
        }    
    });
}
var obj = {fileName: "package.json", readFile: readFileMethod};
console.log(obj.readFile());