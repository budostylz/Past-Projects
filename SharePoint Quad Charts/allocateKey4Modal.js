//local storage works for IE 8.0+

/*

<summary>
	welcome_modal.js
	Shaun Lewis
	5 August 2015
	This js file produces a modal box within the 'CADIE' site collection.
	Local storage activates for IE 8.0 +
	JavaScript/JSOM API References:
		http://definitelytyped.org/docs/sharepoint--SharePoint/
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
	
	Functions: 
		open_dialog: Opens a modal dialog box upon page load.
		close_dialog: Closes a modal dialog box upon user action when pressing 'Accept' button.
		
</summary>


<precondition>
	 ExecuteOrDelayUntilScriptLoaded -> Static
	 open_dialog -> Static
	 close_dialog -> Static 
</precondition>

<parmeters>
	ExecuteOrDelayUntilScriptLoaded 
		open_dialog()-->callback function
		"sp.js" --> native SharePoint JavaScript library
		
	open_dialog -> void
		
	close_dialog -> void

</paremetrs>

<postcondition>
	ExecuteOrDelayUntilScriptLoaded 
		open_dialog is called
			
	open_dialog 
		Modal box opens when users enter site collection.
			
	close_dialog -> void
		Modal box closes
</postcondition>

<remarks>
	Steps
		0. ExecuteOrDelayUntilScriptLoaded Ref:https://msdn.microsoft.com/en-us/library/office/ff411788%28v=office.14%29.aspx
		1. Page is loaded 
		2. sp.js is loaded 
		3. open_dialog is called
		4. div element is created --> var _html
		5. html content is written --> _html.innerHTML
		6. local storage is defined --> if(typeof(Storage) !== "undefined") //Only works at IE 8+ Ref:http://www.w3schools.com/html/html5_webstorage.asp
		7. check existence with sessionStorage.clickcount --> if (sessionStorage.clickcount)
		8. call Number --> Number(
		9. add sessionStorage.clickcount to Number and increment + 1 --> Number(sessionStorage.clickcount)+1;
		10. assign sessionStorage.clickcount -->  sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
		11. call DialogOptions class and assign to options --> var options = SP.UI.$create_DialogOptions();
		12. create options json object for modal window properties --> options = { prop, prop, ...n}
		13. broswer displays modal box --> SP.UI.ModalDialog.showModalDialog(options); Ref: https://msdn.microsoft.com/en-us/library/office/ff410058%28v=office.14%29.aspx
		14. call close_dialog --> var close_dialog = function() {
		15. close modal window --> SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.Cancel);
		16. event handler located in drawn html closes modal window --> '<input id="accept" type="button"  value="I Accept" onclick ="javascript:close_dialog();"/>' 
		
</remarks>

Change Log
	Version 0: Initial Release onto Staging
	version 1: 2nd Release onto 'CADIE' Production Site
	





*/

	var open_dialog = function(){
			
			var _html = document.createElement('div');
			
				_html.innerHTML = '<div class="wrapper">' +
										'<br/><div id="dod_header"><h2>YOU ARE ACCESSING A U.S GOVERNMENT (USG) INFORMATION SYSTEM (IS)<br/>THAT IS PROVIDED FOR USG-AUTHORIZED USE ONLY.</h2></div>'+
										'<br/> <div id="dod_header2">By using this IS (which includes any device attached to this IS), you consent to the following conditions:</div></br>' +
										'<ul>'+
											'<li class="dod_content">'+
												'This USG routinely intercepts and monitors communications on this IS for<br/>' +
												'purposes including, but not limited to, penetration testing, COMSEC<br/>' +
												'monotoring, network operations and defense, personnel misconduct (PM),<br/>' + 
												'law enforcement (LE), and conterintelligence (CI) investigations.' +
											'</li><br/>'+
											
											'<li class="dod_content">'+
												'At any time, the USG may inspect and seize data stored on this IS.' +
											'</li><br/>'+
											
											'<li class="dod_content">'+
												'Communications using, or data stored on, this IS are not private, are subject<br/>' +
												'to routine monitoring, interception, and search, and may be disclosed or<br/>' +
												'used for any USG-authorized purpose.' + 
											'</li><br/>'+
											
											'<li class="dod_content">'+
												'Communications using, or data stored on, this IS are not private, are subject<br/>' +
												'to routine monitoring, interception, and search, and may be disclosed or<br/>' +
												'used for any USG-authorized purpose.' + 
											'</li><br/>'+
											
											'<li class="dod_content">'+
												'This IS includes security measures (e.g authentication and access controls)<br/>'  +
												'to protect USG interests--not for your personal benefits or privacy.' +
											'</li><br/>'+
											
											'<li class="dod_content">'+
												'Both withstanding the above, using this IS does not constitute consent to PM,<br/>' +
												'LE or CI investigative searching or monitoring of the content of priviledged<br/>' +
												'communications, or work product, related to personal representation or<br/>' + 
												'services by attorneys, psychotherapists, or clergy, and their assistants. Such<br/>' + 
												'communications and work product are private and confidential. See User<br/>' + 
												'Agreement for details.' + 
											'</li><br/>'+
		
										'</ul>'+
		 								'<input id="accept" type="button"  value="I Accept" onclick ="javascript:close_dialog();"/>' +
		 						'</div>' +
 							  
 							  '<style>'+
 							  		'#wrapper{position:relative;}' +
 									'#dod_header{color:#000000;font-family:serif;margin-left:20px;text-align:center}'  +
 									'#dod_header2{color:#000000;font-size:medium;font-family:serif;margin-left:70px}'  +
 									'.dod_content{color:#000000;font-size:medium;font-family:serif;margin-left:120px}' +
 									'#accept{margin-left:350px}'+		
 							  '<style>';
		

			if(typeof(Storage) !== "undefined") {//check if Storage exist within context
		        if (sessionStorage.clickcount) {
            		sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        		} else {
            		sessionStorage.clickcount = 1;
            		
					//Using the DialogOptions class.
					var options = SP.UI.$create_DialogOptions();
					
					//Using a generic object.
					options = {
					    title: "Department of Defense : Terms of Use",
					    width: 800,
					    height: 650,
					    showClose: false,
					    allowMaximize:false,
					    html: _html
					    
					}; 
					   
					SP.UI.ModalDialog.showModalDialog(options);
					
        		  }	
        	}//end if(typeof(Storage) !== "undefined") 
	}//end open_dialog
	
	//close modal dialog
	var close_dialog = function() {
     SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.Cancel);
	}
	
    //load sp.js library before running script
    ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");
		
	