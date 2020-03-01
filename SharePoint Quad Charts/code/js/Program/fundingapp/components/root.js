function loadRoots(){

    try{  

        
        var allRoots = store.getState().ROOT
        //console.log('load roots', allRoots)
            
             //Load Roots DOM
             jQuery('#roots').empty();//empty roots div
             for(var i = 0; i < allRoots.length; i++){
                 var rootID = allRoots[i].id
                 var root = allRoots[i].Root
                 jQuery('#roots').append('<p></p><input type="checkbox" value="'+root+'" id="'+rootID+'">'+root+'');
             }  
             

    }
    catch(e){
        console.log('roots.js : loadRoots')
        console.log(e)
    }
    
}

function key5LINDOM(checked, arr, root, rootID, entity){

    try{  



       //console.log('arr', arr)
       // console.log('rootID', rootID)
    

        if(checked){
            for(var i = 0; i < arr.length; i++){

                var tag = arr[i]
                var tagID = tag+rootID
    
                var dom =  (entity === 'key5') ? jQuery('#rootTokey5').prepend('<span id="'+tagID+'" rootID="'+rootID+'"><input type="checkbox" class="'+tagID+'" value="'+tag+'" id="'+rootID+'"><label class='+tag+'>'+tag+'</label> : <label>'+ root +'</label><br/><br/></span>')
                                              : jQuery('#rootToLIN').prepend('<span id="'+tagID+'" rootID="'+rootID+'"><input type="checkbox" class="'+tagID+'" value="'+tag+'" id="'+rootID+'"><label class='+tag+'>'+tag+'</label> : <label>'+ root +'</label><br/><br/></span>')

    

                //console.log(key5)
            }


        }else{

            for(var i = 0; i < arr.length; i++){

                var tag = arr[i]
                var tagID = tag+rootID

                jQuery('#'+tagID+'').remove();

                store.dispatch(removeUserKey5Action(tagID))//update state for key5
                store.dispatch(removeLINAction(tagID))//update state for LIN

                

                
            }

        }



    

   


        

    }
    catch(e){
        console.log('roots.js : key5LINDOM')
        console.log(e)
    }
    
}



$( document ).ready(function() {

    jQuery("#roots").on( "click", "input", function(e) {


        try{

            e.stopPropagation();
    
            var checked = jQuery(this).is(":checked");
            var allRoots = store.getState().ROOT
            var root = this.value;
            var rootID = parseInt(this.id, 10);
            var userRoot = _.filter(allRoots, function(o) { return o.id === rootID })[0]
            var key5Arr = userRoot.Key5
            var LINArr = userRoot.LIN



            if(checked){

                //console.log('userRoot', userRoot)
                store.dispatch(getUserRootAction(userRoot))//update state

                key5LINDOM(checked, key5Arr, root, rootID, 'key5')
                key5LINDOM(checked, LINArr, root, rootID, 'LIN')

                


            }else{

                store.dispatch(removeUserRootAction(rootID))//update state

                key5LINDOM(checked, key5Arr, root, rootID, 'key5')
                key5LINDOM(checked, LINArr, root, rootID, 'LIN')



            }


            calculateEntry()
            


        }
        catch(e){
            console.log('roots.js :  jQuery("#roots").on')
            console.log(e)
        }
        

    
    });


});


