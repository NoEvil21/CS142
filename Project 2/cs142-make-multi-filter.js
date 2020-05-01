'use strict';

function cs142MakeMultiFilter(originalArray){
    var currentArray = originalArray;
    return function arrayFilterer(filerCritria, callback){
        if(typeof filerCritria !== "function"){
            return currentArray;
        }
        let modified = [];
        for(var i = 0 ; i < currentArray.length ; i++){
            if(filerCritria(currentArray[i]) == true){
                modified.push(currentArray[i]);
            }
        }
        currentArray = modified;
        if(typeof callback == "function"){
            var callbackwiththis = callback.bind(originalArray);
            callbackwiththis(currentArray);
        }
        
        return arrayFilterer;
    }
}
