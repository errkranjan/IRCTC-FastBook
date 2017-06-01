chrome.storage.sync.get("bnkDetails", function(data){
    Mydata=JSON.parse(data.bnkDetails);
    console.log(Mydata);
    $('#debitCardNumber').val(Mydata[0].value);
    $('#debitCardholderName').val(Mydata[1].value);
    $('#debiMonth').val(Mydata[2].value);
    $('#debiYear').val(Mydata[3].value);
    $('#cardPin').focus();
});