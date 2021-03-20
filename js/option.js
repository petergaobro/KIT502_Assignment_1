$(Document).ready(function(){
    $("#name").on('change',function(){
        $(".data").hide();
        $("#" +$(this).val()).fadeIn();
    }).change();
});