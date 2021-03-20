// const open = document.getElementById("open");
// const search_container = document.getElementById("search_container");
// const close = document.getElementById("close");

// open.addEventListener('click', () => {
//     search_container.classList.add('show');
// })


// close.addEventListener('click', () => {
//     search_container.classList.remove('show');
// })

function customer_tab() {
    document.getElementById('customer_content').style.display = "block";
    document.getElementById('order_content').style.display = "none";
    document.getElementById('inventory_content').style.display = "none";
    document.getElementById('account_content').style.display = "none";
    document.getElementById('q_n_a_content').style.display = "none";
}


function order_tab() {
    document.getElementById('customer_content').style.display = "none";
    document.getElementById('order_content').style.display = "block";
    document.getElementById('inventory_content').style.display = "none";
    document.getElementById('account_content').style.display = "none";
    document.getElementById('q_n_a_content').style.display = "none";
}

function inventory_tab() {
    document.getElementById('customer_content').style.display = "none";
    document.getElementById('order_content').style.display = "none";
    document.getElementById('inventory_content').style.display = "block";
    document.getElementById('account_content').style.display = "none";
    document.getElementById('q_n_a_content').style.display = "none";
}


function account_tab() {
    document.getElementById('customer_content').style.display = "none";
    document.getElementById('order_content').style.display = "none";
    document.getElementById('inventory_content').style.display = "none";
    document.getElementById('account_content').style.display = "block";
    document.getElementById('q_n_a_content').style.display = "none";
}

function q_n_a_tab() {
    document.getElementById('customer_content').style.display = "none";
    document.getElementById('order_content').style.display = "none";
    document.getElementById('inventory_content').style.display = "none";
    document.getElementById('account_content').style.display = "none";
    document.getElementById('q_n_a_content').style.display = "block";
}