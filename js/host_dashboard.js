// KIT 502 
// Group 3 last edit 26/03/2021
// display the specific card that is related to user's entry
function order_tab() {
    document.getElementById('order_content').style.display = "block";
    document.getElementById('rate_content').style.display = "none";
}

function rate_tab() {
    document.getElementById('order_content').style.display = "none";
    document.getElementById('rate_content').style.display = "block";
}