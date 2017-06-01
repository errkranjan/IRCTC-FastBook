chrome.storage.sync.get('FrmStation',function(data){
    $('#jpform\\:fromStation').val(data.FrmStation);
    fillToStation();
});
function fillToStation(){
chrome.storage.sync.get('ToStation',function(data){
    $('#jpform\\:toStation').val(data.ToStation); 
    fillDate();
});
}
function fillDate(){
chrome.storage.sync.get('date',function(data){
    $('#jpform\\:journeyDateInputDate').val(data.date);
    submitNow();
});
}
function submitNow(){
$('#jpform\\:jpsubmit').trigger('click');
}
