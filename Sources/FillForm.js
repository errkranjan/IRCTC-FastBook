chrome.storage.sync.get("passDetals", function(data){
    Mydata=JSON.parse(data.passDetals);
    //console.log(Mydata);
    //Fill first passenger
    if(Mydata[0].value!=''){
        $('[id*="addPassengerForm\\:psdetail\\:0\\:p"]').val(Mydata[0].value);
        $('#addPassengerForm\\:psdetail\\:0\\:psgnAge').val(Mydata[1].value);
        $('#addPassengerForm\\:psdetail\\:0\\:psgnGender').val(Mydata[2].value);
        $('#addPassengerForm\\:psdetail\\:0\\:berthChoice').val(Mydata[3].value);
        $('#addPassengerForm\\:psdetail\\:0\\:nationality').val(Mydata[4].value);
    }
    //Fill 2nd passenger
    if(Mydata[5].value!=''){
        $('[id*="addPassengerForm\\:psdetail\\:1\\:p"]').val(Mydata[5].value);
        $('#addPassengerForm\\:psdetail\\:1\\:psgnAge').val(Mydata[6].value);
        $('#addPassengerForm\\:psdetail\\:1\\:psgnGender').val(Mydata[7].value);
        $('#addPassengerForm\\:psdetail\\:1\\:berthChoice').val(Mydata[8].value);
        $('#addPassengerForm\\:psdetail\\:1\\:nationality').val(Mydata[9].value);
    }
    //Fill 3rd passenger
    if(Mydata[10].value!=''){
        $('[id*="addPassengerForm\\:psdetail\\:2\\:p"]').val(Mydata[10].value);
        $('#addPassengerForm\\:psdetail\\:2\\:psgnAge').val(Mydata[11].value);
        $('#addPassengerForm\\:psdetail\\:2\\:psgnGender').val(Mydata[12].value);
        $('#addPassengerForm\\:psdetail\\:2\\:berthChoice').val(Mydata[13].value);
        $('#addPassengerForm\\:psdetail\\:2\\:nationality').val(Mydata[14].value);
    }
    //Fill 4th passenger
    if(Mydata[15].value!=''){
        $('[id*="addPassengerForm\\:psdetail\\:3\\:p"]').val(Mydata[15].value);
        $('#addPassengerForm\\:psdetail\\:3\\:psgnAge').val(Mydata[16].value);
        $('#addPassengerForm\\:psdetail\\:3\\:psgnGender').val(Mydata[17].value);
        $('#addPassengerForm\\:psdetail\\:3\\:berthChoice').val(Mydata[18].value);
        $('#addPassengerForm\\:psdetail\\:3\\:nationality').val(Mydata[19].value);
    }
    //Fill 5th passenger
    if(Mydata[20].value!=''){
        $('[id*="addPassengerForm\\:psdetail\\:4\\:p"]').val(Mydata[20].value);
        $('#addPassengerForm\\:psdetail\\:4\\:psgnAge').val(Mydata[21].value);
        $('#addPassengerForm\\:psdetail\\:4\\:psgnGender').val(Mydata[22].value);
        $('#addPassengerForm\\:psdetail\\:4\\:berthChoice').val(Mydata[23].value);
        $('#addPassengerForm\\:psdetail\\:4\\:nationality').val(Mydata[24].value);
    }
     //Fill 5th passenger
    if(Mydata[25].value!=''){
        $('[id*="addPassengerForm\\:psdetail\\:5\\:p"]').val(Mydata[25].value);
        $('#addPassengerForm\\:psdetail\\:5\\:psgnAge').val(Mydata[26].value);
        $('#addPassengerForm\\:psdetail\\:5\\:psgnGender').val(Mydata[27].value);
        $('#addPassengerForm\\:psdetail\\:5\\:berthChoice').val(Mydata[28].value);
        $('#addPassengerForm\\:psdetail\\:5\\:nationality').val(Mydata[29].value);
    }
    //Check consider auto upgradation
    $('#addPassengerForm\\:autoUpgrade').prop('checked','checked')
    //fill mobile number
    $('#addPassengerForm\\:mobileNo').val(Mydata[30].value);
    //focus captcha
    $('#j_captcha').focus();
    //Focus stage rec
    $('html,body').animate({ scrollTop: 9999 }, 'slow');
    $('#Stage_Rectangle').focus();
});