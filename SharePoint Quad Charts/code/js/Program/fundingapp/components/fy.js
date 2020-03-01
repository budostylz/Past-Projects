function loadFYs(){

    try{  

        var interval = {}
        
 
        var FYs = store.getState().FYs[0]

            
        //Load Roots DOM
        jQuery('#POMStart').empty();
        jQuery('#POMEnd').empty();
        
        for(var i = 0; i < FYs.length; i++){
            var fy = parseInt(FYs[i].Title,10)
            var fyStr = 'FY'+FYs[i].Title
            

            if(parseInt(FYs[0].Title,10) + 5 === fy){
                interval.Start = fy;
                jQuery('#POMStart').append('<option id="'+fy+'"selected>'+fyStr+'</option>');
            }

            if(parseInt(FYs[0].Title,10) + 11 === fy){
                interval.End = fy;
                jQuery('#POMEnd').append('<option id="'+fy+'"selected>'+fyStr+'</option>');
            }


            jQuery('#POMStart').append('<option id="'+fy+'">'+fyStr+'</option>');
            jQuery('#POMEnd').append('<option id="'+fy+'">'+fyStr+'</option>');

        }  


        store.dispatch(getFYAction(interval))//Set FYs

            
             

    }
    catch(e){
        console.log('roots.js : loadRoots')
        console.log(e)
    }
    
}



$( document ).ready(function() {

    jQuery("#POMEnd").on( "change", "select", function(e) {


        try{

            console.log(true);

            e.stopPropagation();
    
            var checked = jQuery(this).is(":checked");
            var userKey5 = store.getState().USERKEY5
            var key5 = this.value;
            var rootID = parseInt(this.id, 10);
            var key5ID = key5+rootID


            store.dispatch(getFYAction(interval))//Set FYs
            

            //calculate state
            //console.log('The new state is: ', store.getState())
            //calculateEntry()


        }
        catch(e){
            console.log('key5.js :  jQuery("#POMEnd").on')
            console.log(e)
        }

        
        

    
    });


});
