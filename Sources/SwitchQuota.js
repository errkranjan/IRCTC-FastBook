chrome.storage.sync.get('quota',function(data){
    $('input[name="quota"][value="'+data.quota+'"]').prop('checked',true);
});