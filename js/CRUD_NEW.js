// // Code goes here
// $(document).ready(function() {
//     var host_table = $('#host_table'); // hosttable 

//     var host_add_table = $('#table2'); // add table 

//     // host table click tbody
//     host_table.on('click', 'tbody tr', function() {
//         $(this).toggleClass('selected');
//     });

//     // host add table click tbody
//     host_add_table.on('click', 'tbody tr', function() {
//         $(this).toggleClass('selected');
//     });

//     $('#do_add').on('click', function() {
//         moveRows(host_add_table, host_table);
//     });

//     $('#do_delete').on('click', function() {
//         moveRows(host_table, host_add_table);
//     });

// });

// function moveRows(fromTable, toTable) {
//     var $row = fromTable.find(".selected");
//     $.each($row, function(k, v) {
//         if (this !== null) {
//             addRow = fromTable.fnGetData(this);
//             toTable.fnAddData(addRow);
//             fromTable.fnDeleteRow(this);
//         }
//     });
// }


function move(from, to) {
    // 獲取移動源  
    var fromBox = document.getElementById(from);
    // 獲取移動目的地  
    var toBox = document.getElementById(to);
    // 當移動源存在選中項時  
    while (fromBox.selectedIndex != -1) {
        // 將移動源中的選中項添加到移動目的地的末尾  
        toBox.appendChild(fromBox.options[fromBox.selectedIndex]);
    }
}