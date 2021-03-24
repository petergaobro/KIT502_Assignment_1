// --------------------------------------------customer------------------------------------
function create_customer() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    var customer_table = document.getElementById("customer_table");
    // check the format is correct or not by calling valid function
    if (!valid_cust()) {
        // assign the variable for the name which called by id
        var newRow = customer_table.insertRow(customer_table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            edit_c_fname = document.getElementById("edit_c_fname").value,
            edit_c_lname = document.getElementById("edit_c_lname").value,
            edit_c_email = document.getElementById("edit_c_email").value,
            edit_c_add = document.getElementById("edit_c_add").value,
            edit_c_pn = document.getElementById("edit_c_pn").value;
        // insert cells in the table, and realise the create function
        cell1.innerHTML = edit_c_fname;
        cell2.innerHTML = edit_c_lname;
        cell3.innerHTML = edit_c_email;
        cell4.innerHTML = edit_c_add;
        cell5.innerHTML = edit_c_pn;
    }
}

// delete the review Option ---- customer page
function delete_customer() {
    // get variable and call the id from html realated table
    var temp, customer_table = document.getElementById('customer_table');
    // search table row by step by step
    for (var i = 1; i < customer_table.rows.length; i++) {
        // click the row delete button and delete the related row
        customer_table.rows[i].cells[4].onclick = function() {
            // popup window show the warning Message
            var pop_window = confirm("Delete the customer detail, are you sure?");
            // valid the delete button and delete it the userinterface (html)_
            if (pop_window === true) {
                temp = this.parentElement.rowIndex;
                customer_table.deleteRow(temp);
            }
        };
    }
}

// select row to edit for customer 
function select_edit_customer() {
    // assign the table which is called by id
    var customer_table = document.getElementById('customer_table');
    for (var n = 1; n < customer_table.rows.length; n++) {
        // select the row in host add table
        customer_table.rows[n].onclick = function() {
            // get the seected row index
            temp = this.rowIndex;
            document.getElementById("edit_c_fname").value = this.cells[0].innerHTML;
            document.getElementById("edit_c_lname").value = this.cells[1].innerHTML;
            document.getElementById("edit_c_email").value = this.cells[2].innerHTML;
            document.getElementById("edit_c_add").value = this.cells[3].innerHTML;
            document.getElementById("edit_c_pn").value = this.cells[4].innerHTML;
        };
    }
}
// calling itself
select_edit_customer();

// select and edit customer
function edit_customer() {
    var customer_table = document.getElementById("customer_table");
    var edit_c_fname = document.getElementById("edit_c_fname").value,
        edit_c_lname = document.getElementById("edit_c_lname").value,
        edit_c_email = document.getElementById("edit_c_email").value,
        edit_c_add = document.getElementById("edit_c_add").value,
        edit_c_pn = document.getElementById("edit_c_pn").value;
    if (!valid_cust()) {
        customer_table.rows[temp].cells[0].innerHTML = edit_c_fname;
        customer_table.rows[temp].cells[1].innerHTML = edit_c_lname;
        customer_table.rows[temp].cells[2].innerHTML = edit_c_email;
        customer_table.rows[temp].cells[3].innerHTML = edit_c_add;
        customer_table.rows[temp].cells[4].innerHTML = edit_c_pn;
    }
}





// entry validation for customer 
function valid_cust() {
    var email_valid = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var do_Empty = false,
        // customer part
        edit_c_fname = document.getElementById("edit_c_fname").value,
        edit_c_lname = document.getElementById("edit_c_lname").value,
        edit_c_email = document.getElementById("edit_c_email").value,
        edit_c_add = document.getElementById("edit_c_add").value,
        edit_c_pn = document.getElementById("edit_c_pn").value;


    if (edit_c_email === "") {
        // host part
        alert("Email entry Connot Be Empty");
        do_Empty = true;
    } else if (edit_c_email.match(email_valid)) {
        alert("Email should be correct format");
        do_Empty = false;
    } else if (edit_c_fname === "") {
        alert("First name entry Connot Be Empty");
        do_Empty = true;
    } else if (edit_c_lname === "") {
        alert("Last name entry Connot Be Empty");
        do_Empty = true;
    } else if (edit_c_add === "") {
        alert("Address Connot Be Empty");
        do_Empty = true;
    } else if (edit_c_pn === "") {
        alert("Phone number Connot Be Empty");
        do_Empty = true;
    } else if (edit_c_pn.length != "10") {
        alert("Please enter 10 letter!");
        do_Empty = true;
    }
    return do_Empty;
}





// ----------------------------------------------------host---------------------------------
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
        // host part
        edit_h_email = document.getElementById("edit_h_email").value,
        edit_h_location = document.getElementById("edit_h_location").value,
        edit_h_ABN = document.getElementById("edit_h_ABN").value,
        edit_h_pn = document.getElementById("edit_h_pn").value;



    if (edit_h_email === "") {
        // host part
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
    } else if (edit_h_pn.length != "10") {
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