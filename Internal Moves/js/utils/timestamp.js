

//Override the OnPickerFinish function in DatePicker.js to fire the event when the date is updated from the date picker.
//Source: https://theway4ward.wordpress.com/2013/07/30/211/
//Overriden Sharepoint function for date fields.
var MyDateField = 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff211_ctl00_ctl00_DateTimeField_DateTimeFieldDate';//this might require static change
function OnPickerFinish(resultfield){


    clickDatePicker(null,"","");
	if (resultfield.id == MyDateField)
	{
        var fieldName = $(resultfield).prop('title');
        var actualMoveDate  = $("input[title='Actual Move Date']").val();
        var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        var lastModified1 = $("input[title='LastModified1']").val(currentDate);
 
	}

 }



$(document).ready(function(){


        var timeStamp = (function () {


            function GetTimeStamps(){
                try{
                    var lastModified1 = $("input[title='LastModified1']").val();
                    var lastModified2 = $("input[title='LastModified2']").val();
                    var lastModified3 = $("input[title='LastModified3']").val();
                    var lastModified4 = $("input[title='LastModified5']").val();

                    console.log(lastModified1, lastModified1.length);

                    var applyLastModified1 = (lastModified1.length > 0) ? $('#AMDLastModified').text('Last Modified: ' +lastModified1) : $('#AMDLastModified').text('');
                    var applyLastModified2 = (lastModified2.length > 0) ? $('#G1LastModified').text('Last Modified: ' +lastModified2) : $('#G1LastModified').text('');
                    var applyLastModified3 = (lastModified3.length > 0) ? $('#G2LastModified').text('Last Modified: ' +lastModified3) : $('#G2LastModified').text('');
                    var applyLastModified4 = (lastModified4.length > 0) ? $('#G6LastModified').text('Last Modified: ' +lastModified4) : $('#G6LastModified').text('');


                    
                    /*$('#G2LastModified').text('Last Modified: ' +lastModified2);
                    $('#G4LastModified').text('Last Modified: ' +lastModified3);
                    $('#G6LastModified').text('Last Modified: ' +lastModified4);*/



                }
                catch(e){
                    console.log(e);
                }
            }

            function G1Section(){
                try{

                    //G1 checkboxes
                    var updateMOL = $('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff401_ctl00_ctl00_BooleanField');

                    //G1 notes
                    var G1Notes =  $("textarea[title='G1 Notes and Comments']");

                    //current date
                    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');



                    updateMOL.click(function (e) { //update MOL             
                        $("input[title='LastModified2']").val(currentDate);
                    });

                    G1Notes.bind('input propertychange', function() {    
                        $("input[title='LastModified2']").val(currentDate);
                    });


                }
                catch(e){
                    console.log(e);
                }
            }

            function G2Section(){
                try{

                    //G2 checkboxes
                    var elementBind = $('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff371_ctl00_ctl00_BooleanField')
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff491_ctl00_ctl00_BooleanField')
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff461_ctl00_ctl00_BooleanField')

                    //current date
                    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');



                    $(elementBind).on('click',function (e) { 
                        
                        var checked = $(this).is(":checked");
                        var elemID = $(this).prop('id');

                        setTimeStamp(elemID);

                    });

                    //G2 notes
                    var G2Notes =  $("textarea[title='G2 Notes and Comments']");

                    G2Notes.bind('input propertychange', function() {             
                        $("input[title='LastModified3']").val(currentDate);
                    });

                }
                catch(e){
                    console.log(e);
                }
            }

            function G4Section(){
                try{

                    console.log('update g4 section')

                }
                catch(e){
                    console.log(e);
                }
            }

            function G6Section(){
                try{

                    //G6 checkboxes
                    var elementBind = $('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff501_ctl00_ctl00_BooleanField')//Verify SCO SCA Status
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff441_ctl00_ctl00_BooleanField')//Verify Alt Token
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff431_ctl00_ctl00_BooleanField')//Verify Admin Dev Accts
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff341_ctl00_ctl00_BooleanField')//Equipment Setup/On-hand 
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff381_ctl00_ctl00_BooleanField')//Update Database
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff481_ctl00_ctl00_BooleanField')//Verify ITPRAS Acct
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff411_ctl00_ctl00_BooleanField')//Update Software License Database 
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff451_ctl00_ctl00_BooleanField')//Verify BES Acct 
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff471_ctl00_ctl00_BooleanField')//Verify Group Mailbox Ownership
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff521_ctl00_ctl00_BooleanField')//Verify SIPR Token
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff511_ctl00_ctl00_BooleanField')//Verify SD and DL Membership
                                        .add('#ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff391_ctl00_ctl00_BooleanField')//Update GAL 

                    //current date
                    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');


                    $(elementBind).on('click',function (e) { 

                        var checked = $(this).is(":checked");
                        var elemID = $(this).prop('id');

                        setTimeStamp(elemID);

                    });

                    //G6 notes
                    var G6Notes = $("textarea[title='G6 Notes and Comments']");

                    G6Notes.bind('input propertychange', function() {             
                        $("input[title='LastModified5']").val(currentDate);
                    });


                }
                catch(e){
                    console.log(e);
                }
            }

            function setTimeStamp(elemID){
                try{

                    //current date
                    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');


                    switch(elemID){

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff401_ctl00_ctl00_BooleanField'://updateMOL
                            $("input[title='LastModified3']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff371_ctl00_ctl00_BooleanField'://updateBadge
                            $("input[title='LastModified3']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff491_ctl00_ctl00_BooleanField'://verifyJPAS
                            $("input[title='LastModified3']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff461_ctl00_ctl00_BooleanField'://verifyControlledAccess
                             $("input[title='LastModified3']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff501_ctl00_ctl00_BooleanField'://Verify SCO SCA Status
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff441_ctl00_ctl00_BooleanField'://Verify Alt Token
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff431_ctl00_ctl00_BooleanField'://Verify Admin Dev Accts
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff341_ctl00_ctl00_BooleanField'://Equipment Setup/On-hand
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff381_ctl00_ctl00_BooleanField'://Update Database
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff481_ctl00_ctl00_BooleanField'://Verify ITPRAS Acct
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff411_ctl00_ctl00_BooleanField'://Update Software License Database
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff451_ctl00_ctl00_BooleanField'://Verify BES Acct 
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff471_ctl00_ctl00_BooleanField'://Verify Group Mailbox Ownership
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff521_ctl00_ctl00_BooleanField'://Verify SIPR Token
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff511_ctl00_ctl00_BooleanField'://Verify SD and DL Membership 
                            $("input[title='LastModified5']").val(currentDate);
                        break;

                        case 'ctl00_ctl42_g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242_ff391_ctl00_ctl00_BooleanField'://Update GAL 
                            $("input[title='LastModified5']").val(currentDate);
                        break;
     
 
                    }

                }
                catch(e){
                    console.log(e);
                }
            }

            

            return {

                _setTimeStamps: function () {
                    GetTimeStamps();
                    G1Section();
                    G2Section();
                    G4Section();
                    G6Section();
                }
            };
            
            

        }());

        //timeStamp namespace
        timeStamp._setTimeStamps(); //set time stamps


});



