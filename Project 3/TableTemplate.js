class TableTemplate {
    static fillIn(id, dict, columnName) {
        var row_list = document.getElementById(id).getElementsByTagName("tbody")[0].getElementsByTagName("tr");
        
        var trlen = row_list.length;
        console.log("Rows of the table: " , trlen);
        
        if(columnName === undefined){
            // let head = row_list[0];
            // let tprocessor = new Cs142TemplateProcessor(head.innerHTML);
            // head.innerHTML = tprocessor.fillIn(dict);
            // console.log("Current header: ", head);
            for(let i = 0 ; i < row_list.length ; i++) {
                let innerprocessor = new Cs142TemplateProcessor(row_list[i].innerHTML);
                console.log("Current html value: ", row_list[i].innerHTML);
                row_list[i].innerHTML = innerprocessor.fillIn(dict);
            }
        } else {
            let head = row_list[0];
            let tprocessor = new Cs142TemplateProcessor(head.innerHTML);
            head.innerHTML = tprocessor.fillIn(dict);

            var found = -1;
            var index = 0;
            while(found === -1) {
                if(head.cells[index].innerHTML === columnName){
                    found = 1;
                    break;
                }
                else {
                    index++;
                }
            }
            for(let i = 1 ; i < row_list.length ; i++) {
                let inner = row_list[i].cells[index];
                let innerprocessor = new Cs142TemplateProcessor(inner.innerHTML);
                inner.innerHTML = innerprocessor.fillIn(dict);
            }
        }
        // document.getElementById(id).style.visibility = "visible";
        document.getElementById(id).setAttribute("style", "visibility:visible");
    }
}

