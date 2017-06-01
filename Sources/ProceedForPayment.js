$(document).ready(function(){
    $(document).on('click', 'input[type="radio"]', function(event){
        setTimeout(function(){ $('#validate').trigger('click');},500);
    });
    $('html,body').animate({ scrollTop: 9999 }, 'slow');
    
});