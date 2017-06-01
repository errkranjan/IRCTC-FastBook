$(document).on('click','.tab',function(event){
    event.preventDefault();
    id=$(this).attr('data-action');
    $('.content').hide(1000);
    $('#'+id).show(2000);
});