$(function() {
    $('#full_label-selector').change(function(){
        $('.full_label').hide();
        $('.full_label.' + $(this).val()).show();
    });
});



