// const open = document.getElementById("open");
// const search_container = document.getElementById("search_container");
// const close = document.getElementById("close");

// open.addEventListener('click', () => {
//     search_container.classList.add('show');
// })


// close.addEventListener('click', () => {
//     search_container.classList.remove('show');
// })

function order_tab() {
    document.getElementById('order_content').style.display = "block";
    document.getElementById('rate_content').style.display = "none";
}


function rate_tab() {
    document.getElementById('order_content').style.display = "none";
    document.getElementById('rate_content').style.display = "block";
}

