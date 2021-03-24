// $(document).ready(function(){
//     var minDate = new Date();
//     $("#checkin").datepicker({
//         showAnim:'drop',
//         numberOfMonth: 1,
//         minDate: minDate,
//         dateFormat:'dd/mm/yy',
//         OnClose:function(selectedDate){
//             $('#checkout'),datepicker("option","minDate",selectedDate)
//         }
//     });
// })

var dateToday = new Date();
var dates = $("#checkin, #checkout").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 3,
    minDate: dateToday,
    onSelect: function(selectedDate) {
        var option = this.id == "checkin" ? "minDate" : "maxDate",
            instance = $(this).data("datepicker"),
            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
        dates.not(this).datepicker("option", option, date);
    }
});