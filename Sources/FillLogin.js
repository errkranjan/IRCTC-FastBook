chrome.storage.sync.get('username',function(data){
    $('#usernameId').val(data.username); 
});
chrome.storage.sync.get('password',function(data){
    $('input[name="j_password"]').val(data.password);
    console.log(data.password);
});

$('input[name="j_captcha"]').focus();