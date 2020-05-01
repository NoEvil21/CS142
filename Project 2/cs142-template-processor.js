'use strict';

function Cs142TemplateProcessor(template){
    this.inistr = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dict) {
    var outputstr = this.inistr;
    for(let key in dict){
        outputstr = outputstr.replace(`{{${key}}}`,dict[key]);
    }
    outputstr = outputstr.replace(/{{.*}}/,"");
    return outputstr;
}