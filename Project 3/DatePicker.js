'use strict';
class DatePicker {
    constructor(id, callback) {
        this.id = id;
        this.callback = callback;
    }

    render(date) {
        var formatdate = document.getElementById(this.id);
        formatdate.appendChild(this.createcal(date));
    }

    createcal(date) {
        
        var _month = [
            "Jan.",
            "Feb.",
            "Mar.",
            "Apr.",
            "May",
            "Jun.",
            "Jul.",
            "Aug.",
            "Sept.",
            "Oct.",
            "Nov.",
            "Dec."
        ];
        var _week = [
            "Sun.",
            "Mon.",
            "Tue.",
            "Wed.",
            "Thu.",
            "Fri.",
            "Sat."
        ];
        // Create table structure
        var cell;
        var table = document.createElement("table");
        var header = document.createElement("thead");
        var change_bar = document.createElement("tr");
        var first_line = document.createElement("tr");
        var week = document.createElement("tr");
        var dates = document.createElement("tbody");
        // Create controls
        var prev = document.createElement("span");
        prev.width = 100;
        prev.innerHTML = "<";
        prev.setAttribute("id","prev");
        var next = document.createElement("span");
        next.width = 100;
        next.innerHTML = ">";
        next.setAttribute("id","next");
        prev.addEventListener("click", () => {
            table.remove();
            date.setMonth(date.getMonth() - 1);
            this.render(date);
        });
        next.addEventListener("click", () => {
            table.remove();
            date.setMonth(date.getMonth() + 1);
            this.render(date);
        });
        //Week row
        for(let i = 0 ; i < _week.length ; i++){
            cell = document.createElement("th");
            cell.width = 50;
            cell.innerHTML = _week[i];
            first_line.appendChild(cell);
        }
        //header content
        var head_cell = document.createElement("th");
        head_cell.innerHTML = _month[date.getMonth()] + "  " + date.getFullYear();
        // filliing in the calendar

        //First line
        var curr_month_info = new Date(date.getFullYear(), date.getMonth(), 1);
        console.log("Month: ", curr_month_info);
        var first_day = curr_month_info.getDay();
        console.log("First day:",first_day);
        var last_max_date = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        for(let i = 0 ; i < 7 ; i++){
            cell = document.createElement("td");
            cell.width = 50;
            if(i < first_day){
                cell.setAttribute("class", "notinclude");
                cell.innerHTML = last_max_date -first_day +i + 1;
            }else {
                cell.setAttribute("class", "include");
                cell.innerHTML = i - first_day + 1;
            }
            week.appendChild(cell);
        }
        dates.appendChild(week);
        /*
            while(week.firstChild){
                week.removeChild(week.lastChild);
            }
        */
       //Main part of dates
        week = document.createElement("tr");
        var second_start = 7 - first_day + 1;
        var curr_max_date = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        console.log("Current Month date: ", curr_max_date);
        var counter = 0;
        while ( second_start <= curr_max_date){
            cell = document.createElement("td");
            cell.width = 50;
            cell.setAttribute("class", "include");
            cell.innerHTML = second_start;
            week.appendChild(cell);
            second_start++;
            counter++;
            if(counter === 7){
                dates.appendChild(week);
                week = document.createElement("tr");
                counter = 0;
            }
        }
        //Last line of the calendar
        var next_date_filling = 1;
        var last_day = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        while(last_day !== 6) {
            cell = document.createElement("td");
            cell.width = 50;
            cell.setAttribute("class", "notinclude");
            cell.innerHTML = next_date_filling;
            next_date_filling++;
            week.appendChild(cell);
            last_day++;
        }
        dates.appendChild(week);
        //Output to form the calendar
        table.appendChild(header);
        header.appendChild(change_bar);
        header.appendChild(first_line);
        change_bar.appendChild(prev);
        change_bar.appendChild(head_cell);
        change_bar.appendChild(next);
        table.appendChild(dates);
        
        return table;
    }
}

/*Same as 
DatePicker.prototype = {
    render(date){};
}
*/