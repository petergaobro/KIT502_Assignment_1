// create the option

// function add_op() {

//     for (var i = 1; i < table.row.length; i++) {
//         table.row[i].onclick = function() {
//             rIndex = this.rowIndex;
//             document.getElementById("email".value) = this.cell[0].innerHTML;
//             document.getElementById("location".value) = this.cell[1].innerHTML;
//             document.getElementById("abn".value) = this.cell[2].innerHTML;
//             document.getElementById("phone".value) = this.cell[3].innerHTML;
//         };
//     }
// }

function add_host() {
    var re_table = document.getElementById("review_table");
    var ho_table = document.getElementById("host_add_table");

    var row = ho_table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
    cell4.innerHTML = "NEW CELL4";
}






// delete the review Option
function delete_op() {
    // get variable and call the id from html realated table
    var temp, table = document.getElementById('review_table');
    // search table row by step by step
    for (var i = 1; i < table.rows.length; i++) {
        // click the row delete button and delete the related row
        table.rows[i].cells[4].onclick = function() {
            // popup window show the warning Message
            var pop_window = confirm("Delete the customer detail, are you sure?");
            // valid the delete button and delete it the userinterface (html)_
            if (pop_window === true) {
                temp = this.parentElement.rowIndex;
                table.deleteRow(temp);
            }
        };
    }
}


function delete_host() {
    // get variable and call the id from html realated table
    var temp, table = document.getElementById('host_table');
    // search table row by step by step
    for (var i = 1; i < table.rows.length; i++) {
        // click the row delete button and delete the related row
        table.rows[i].cells[4].onclick = function() {
            // popup window show the warning Message
            var pop_window = confirm("Delete the host detail, are you sure?");
            // valid the delete button and delete it the userinterface (html)_
            if (pop_window === true) {
                temp = this.parentElement.rowIndex;
                table.deleteRow(temp);
            }
        };
    }
}