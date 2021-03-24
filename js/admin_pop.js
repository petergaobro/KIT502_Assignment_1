// var div = document.getElementById('background');
// var close = document.getElementById('close-button');

// btn.onclick = function show() {
//     div.style.display = "block";
// }

// close.onclick = function close() {
//     div.style.display = "none";
// }

// window.onclick = function close(e) {
//     if (e.target == div) {
//         div.style.display = "none";
//     }
// }


// let result = prompt("Are you sure go to Dashboard?");
// console.log(result);

function do_logout() {
    alert("Are you sure want to logout?")
    location.href = "./login_reg.html"
}


function do_admin_login() {
    alert("Are you sure go to login/reg page?")
    location.href = "./login_admin.html"
}

function go_host_dashboard() {
    alert("Are you sure go to host dashboard?")
    location.href = "./host_dashboard.html"
}
function go_dashboard() {
    alert("Are you sure go to system manager Dashboard?")
    location.href = "./dashboard.html"
}

