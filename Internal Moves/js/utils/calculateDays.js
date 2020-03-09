function get_days_since_planned_arrival_date(plannedArrivalDate){//daysSincePlannedArrival = Duration of Days Between Planned Arrival Date and Today

	try{
		
		  //past date < future date via milliseconds
     		
     		//test moment
			var a = moment(plannedArrivalDate, 'MM/DD/YYYY');//planned arrival date  
			var b = moment(moment().format('MM/DD/YYYY'), 'MM/DD/YYYY'); //today
			//console.log(a, b)
			//console.log(a.valueOf(), b.valueOf())
			
			if(b.valueOf() < a.valueOf() ){
				var days = a.diff(b, 'days');		   											  
				//console.log('days',days);   
				return days; 
	
			}else{
				var days = b.diff(a, 'days');		   									
				//console.log('days',days);   
				return days; 
			}
			
			
			
	}
	catch(e){
		console.log('get_days_since_planned_arrival_date', e);
	}

}//get_days_since_planned_arrival_date

function get_active_arrival_date_duration(aad, _date){//Days Since Arrival = Duration between Actual Arrival Date and Today

	try{
		
		//actual arrival date should be greater than today and account activation date
		//actual arrival date should not equal today
		//actual arrival date can equal account activation date
		
		var a = moment(moment(aad).format('MM/DD/YYYY'), 'MM/DD/YYYY');//actual arrival date 
		var b = moment(moment(_date).format('MM/DD/YYYY'), 'MM/DD/YYYY'); //today or account activated date
		//console.log(a, b)
		//console.log(a.valueOf(), b.valueOf())
		
		var days = a.diff(b, 'days');		   											  

		if(days < 0){	
			 days = (days * -1)+1;//include end date
			 //console.log('days',days);  
			 return days;
		}else{		
			//console.log('days',days); 
			return days; 
		}
	}
	catch(e){
		console.log('get_active_arrival_date_duration',e);
	
	}

}//get_active_arrival_date_duration

function get_modified_date_duration(modifiedDate, today){//Days Since Last Modified = Modified Date - Today

	try{
		//console.log(true)
		
		var a = moment(moment(modifiedDate).format('MM/DD/YYYY'), 'MM/DD/YYYY');//modified date
		var b = moment(moment(today).format('MM/DD/YYYY'), 'MM/DD/YYYY'); //today 
		//console.log(a, b)
		//console.log(a.valueOf(), b.valueOf())
		
		var days = a.diff(b, 'days');		   											  

		if(days < 0){	
			 days = (days * -1)+1;//include end date
			 //console.log('days',days);  
			 return days;
		}else{		
			//console.log('days',days); 
			return days; 
		}
		
	}
	catch(e){
		console.log('get_modified_date_duration',e);
	
	}

}//get_modified_date_duration



