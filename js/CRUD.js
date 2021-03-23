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






// function add_host() {
//     var re_table = document.getElementById("review_table");
//     var ho_table = document.getElementById("host_add_table");

//     var row = ho_table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
//     cell3.innerHTML = "NEW CELL3";
//     cell4.innerHTML = "NEW CELL4";
// }



// // add Row
// function create_op() {
//     // get the table by id
//     // create a new row and cells
//     // get value from input text
//     // set the values into row cell's
//     // if (!validation()) {
//     var re_table = document.getElementById("review_table");
//     var newRow = re_table.insertRow(table.length),
//         cell1 = newRow.insertCell(0),
//         cell2 = newRow.insertCell(1),
//         cell3 = newRow.insertCell(2),
//         cell4 = newRow.insertCell(3),
//         add_email = document.getElementById("add_email").value,
//         add_location = document.getElementById("add_location").value,
//         add_abn = document.getElementById("add_abn").value,
//         add_phone = document.getElementById("add_phone").value;

//     cell1.innerHTML = add_email;
//     cell2.innerHTML = add_location;
//     cell3.innerHTML = add_abn;
//     cell4.innerHTML = add_phone;
//     // call the function to set the event to the new row
//     select_op();
//     // }
// }


// function select_op() {
//     var add_table = document.getElementById("host_add_table");
//     for (var i = 1; i < add_table.rows.length; i++) {
//         add_table.rows[i].onclick = function() {
//             // get the seected row index
//             rIndex = this.rowIndex;
//             document.getElementById("add_email").value = this.cells[0].innerHTML;
//             document.getElementById("add_location").value = this.cells[1].innerHTML;
//             document.getElementById("add_abn").value = this.cells[2].innerHTML;
//             document.getElementById("add_phone").value = this.cells[3].innerHTML;
//         };
//     }
// }
// select_op();



// add the host ------------ host page
// function add_op() {
//     // get variable and call the id from html realated table
//     var host_table = document.getElementById('host_table');
//     var add_table = document.getElementById('host_add_table')
//     var temp;
//     // search table row by step by step
//     for (var i = 1; i < add_table.rows.length; i++) {
//         // click the row delete button and delete the related row
//         add_table.rows[i].cells[4].onclick = function() {
//             // popup window show the warning Message
//             var pop_window = confirm("Execute Add, are you sure?");
//             // valid the delete button and delete it the userinterface (html)_
//             if (pop_window === true) {
//                 temp = this.parentElement.rowIndex;
//                 host_table.insertRow(temp);
//             }
//         };
//     }
// }


// delete the review Option ---- customer page
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


// ------------------------------create Row---------------------------
function create_op() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    var host_add_table = document.getElementById("host_add_table");
    if (!validation()) {
        var newRow = host_add_table.insertRow(host_add_table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            // cell5 = newRow.insertCell(4),
            add_email = document.getElementById("edit_h_email").value,
            add_location = document.getElementById("edit_h_location").value,
            add_abn = document.getElementById("edit_h_ABN").value,
            add_phone = document.getElementById("edit_h_pn").value;
        // add_btn = document.getElementById("add").value;

        cell1.innerHTML = add_email;
        cell2.innerHTML = add_location;
        cell3.innerHTML = add_abn;
        cell4.innerHTML = add_phone;
        // cell4.innerHTML = add_btn;
        // call the function to set the event to the new row
        permission();
    }
}


// --------------------------validation-----------------------

// function emailIsValid(email) {
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
// }
// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


function validation() {
    var email_valid = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var isEmpty = false,
        edit_h_email = document.getElementById("edit_h_email").value,
        edit_h_location = document.getElementById("edit_h_location").value,
        edit_h_ABN = document.getElementById("edit_h_ABN").value,
        edit_h_pn = document.getElementById("edit_h_pn").value;

    if (edit_h_email === "") {
        alert("Email entry Connot Be Empty");
        isEmpty = true;
    } else if (edit_h_email.match(email_valid)) {
        alert("Email should be correct format");
        isEmpty = true;
    } else if (edit_h_location === "") {
        alert("Location entry Connot Be Empty");
        isEmpty = true;
    } else if (edit_h_ABN === "") {
        alert("ABN entry Connot Be Empty");
        isEmpty = true;
    } else if (edit_h_pn === "") {
        alert("Phone number Connot Be Empty");
        isEmpty = true;
    } else if (edit_h_pn.length != "11") {
        alert("Please enter 11 letter!");
        isEmpty = true;
    }
    return isEmpty;
}





// --------------------------add, authentication, give host access-----------------------
function add_op() {
    var host_table = document.getElementById('host_table'),
        // host_add_table = document.getElementById('host_add_table'),
        new_row = host_table.insertRow(-1),
        cell1 = new_row.insertCell(0),
        cell2 = new_row.insertCell(1),
        cell3 = new_row.insertCell(2),
        cell4 = new_row.insertCell(3),
        cell5 = new_row.insertCell(4),

        add_email = document.getElementById("add_email").value,
        add_location = document.getElementById("add_location").value,
        add_abn = document.getElementById("add_abn").value,
        add_phone = document.getElementById("add_phone").value,
        add_action = document.getElementById("add_action").value;

    cell1.innerHTML = add_email;
    cell2.innerHTML = add_location;
    cell3.innerHTML = add_abn;
    cell4.innerHTML = add_phone;
    cell5.innerHTML = add_action;
    permission();
    document.getElementById("host_add_table").deleteRow(-1);
}

var temp;

function permission() {
    var add_table = document.getElementById('host_add_table');

    for (var i = 1; i < add_table.rows.length; i++) {
        add_table.rows[i].onclick = function() {
            // get the seected row index
            temp = this.rowIndex;
            document.getElementById("add_email").value = this.cells[0].innerHTML;
            document.getElementById("add_location").value = this.cells[1].innerHTML;
            document.getElementById("add_abn").value = this.cells[2].innerHTML;
            document.getElementById("add_phone").value = this.cells[2].innerHTML;
        };
    }
}
permission();





// select row to edit
function select_edit() {
    var add_table = document.getElementById('host_add_table');
    for (var n = 1; n < add_table.rows.length; n++) {
        // select the row in host add table
        add_table.rows[n].onclick = function() {
            // get the seected row index
            temp = this.rowIndex;
            document.getElementById("edit_h_email").value = this.cells[0].innerHTML;
            document.getElementById("edit_h_location").value = this.cells[1].innerHTML;
            document.getElementById("edit_h_ABN").value = this.cells[2].innerHTML;
            document.getElementById("edit_h_pn").value = this.cells[3].innerHTML;
        };
    }
}
select_edit();


function edit_op() {
    var add_table = document.getElementById("host_add_table");
    var edit_mail = document.getElementById("edit_h_email").value,
        edit_location = document.getElementById("edit_h_location").value,
        edit_abn = document.getElementById("edit_h_ABN").value,
        edit_phone = document.getElementById("edit_h_pn").value;
    if (!validation()) {
        add_table.rows[temp].cells[0].innerHTML = edit_mail;
        add_table.rows[temp].cells[1].innerHTML = edit_location;
        add_table.rows[temp].cells[2].innerHTML = edit_abn;
        add_table.rows[temp].cells[3].innerHTML = edit_phone;
    }
}





// delete the review Option ---- host page
function delete_host() {
    // get variable and call the id from html realated table
    var host_table = document.getElementById('host_table');
    // var host_add_table = document.getElementById('host_add_table');
    // search table row by step by step
    for (var i = 1; i < host_table.rows.length; i++) {
        // click the row delete button and delete the related row
        host_table.rows[i].cells[4].onclick = function() {
            // popup window show the warning Message
            var pop_window = confirm("Delete the host detail, are you sure?");
            // valid the delete button and delete it the userinterface (html)_
            if (pop_window === true) {
                temp = this.parentElement.rowIndex;
                // host_add_table.insertRow(temp);
                host_table.deleteRow(temp);

                // host_add_table.insertRow(temp);
                // host_add_table.insertRow(temp);
                // document.getElementById("host_add_table").insertRow(-1);
            }
        };
    }
}