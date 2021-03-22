// create the option

// function create_op() {

// }






// delete the review Option
function delete_op() {
    // get variable and call the id from html realated table
    var temp, table = document.getElementById('review_table');
    // search table row by step by step
    for (var i = 1; i < table.rows.length; i++) {
        // click the row delete button and delete the related row
        table.rows[i].cells[4].onclick = function() {
            // popup window show the warning Message
            var pop_window = confirm("do you want to delete this row");
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
            var pop_window = confirm("do you want to delete this row");
            // valid the delete button and delete it the userinterface (html)_
            if (pop_window === true) {
                temp = this.parentElement.rowIndex;
                table.deleteRow(temp);
            }
        };
    }
}