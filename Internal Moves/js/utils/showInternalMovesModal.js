function showModal(){

    try{  

				

        var open_dialog = function(){

                var _html = document.createElement('div');
                    
                        _html.innerHTML =  '<style>.testStyle { border: 1px solid black;}</style>'+ 
                                                '<div class="wrapper" id="internalMoveTypes">' +
                                                    '<strong>Long Term Absence</strong>'+
                                                    '<ul>'+
                                                        '<li>Absent-Uniformed Service/Extension - away from MCSC/duty station > 180 days (OP)</li>'+
                                                        '<li>Detailed/Extension - away from MCSC/duty station > 180 days (OP)</li>'+
                                                        '<li>CEW (OP)</li>'+
                                                        '<li>FEMA (OP)</li>'+
                                                        '<li>MODA (OP)</li>'+
                                                    '</ul>'+

                                                    '<strong>Short Term Absence</strong>'+
                                                    '<ul>'+
                                                        '<li>Absent-Uniformed Service/Extension - away from MCSC/duty station <= 179 days (OP)</li>'+
                                                        '<li>Detailed/Extension - away from MCSC/duty station <= 179 days (OP)</li>'+
                                                        '<li>LWOP/Extension (OP)</li>'+
                                                        '<li>LWOP- Registration/Extension (OP)</li>'+
                                                    '</ul>'+

                                                    '<strong>Internal Moves</strong>'+
                                                    '<ul>'+
                                                        '<li>Detail/Extension - within MCSC/duty station (OP)</li>'+
                                                        '<li>Promotion</li>'+
                                                        '<li>Reassignment</li>'+
                                                        '<li>Reassignment NTE/Extension</li>'+
                                                        '<li>Temp Appt/Extension (OP)</li>'+
                                                        '<li>Temp Promotion/Extension (OP)</li>'+
                                                        '<li>Hierarchy Change</li>'+
                                                        '<li>Duty Location Change</li>'+
                                                        '<li>CLG</li>'+
                                                    '</ul>'+



                                                '</div>' +
                                       
                                            '<style>'+
                                               '#wrapper{position:relative;}' +
                                                '#dod_header{color:#000000;font-family:serif;margin-left:20px;text-align:center}'  +
                                                '#dod_header2{color:#000000;font-size:medium;font-family:serif;margin-left:70px}'  +
                                                '.dod_content{color:#000000;font-size:medium;font-family:serif;margin-left:120px}' +
                                                '#accept{margin-left:350px}'+		
                                            '<style>';
                


                //Using the DialogOptions class.
                var options = SP.UI.$create_DialogOptions();
                    
                //Using a generic object.
                options = {
                    title: 'Internal Moves Types',
                    width: 600,
                    height: 500,
                    allowMaximize:false,
                    showClose: true,
                    html: _html
                    
                        
                }; 
                       
                SP.UI.ModalDialog.showModalDialog(options);


    }//end open_dialog
    
    
    //load sp.js library before running script
    ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");
    

    }
    catch(e){
        console.log('showModal',e);
    }


}//showModal(id)

//event handler
$(document).ready(function(){

    $('.internalMovesLabel').click(function(e){
        showModal();    
    });

});



