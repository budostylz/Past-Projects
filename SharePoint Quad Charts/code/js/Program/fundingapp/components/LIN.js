function filterLIN(LIN, rootID, LINID){
    try{

        var FYs = store.getState().FYs[0]
        var userLINObj = {}
        userLINObj.id = LINID
        userLINObj.LIN = LIN
        userLINObj.rootID = rootID
        userLINObj.POM = 0;
        userLINObj =  setFYs(userLINObj, FYs)//Set FYs

    

        

        var baseFunded = _.filter(store.getState().LINFUNDEDBASE, function(o) { return (o.id === rootID)  && (o.LINOUT === LIN)})
        var baseCritical = _.filter(store.getState().LINCRITICALBASE, function(o) { return (o.id === rootID)  && (o.LINOUT === LIN)})
        var ocoFunded = _.filter(store.getState().LINFUNDEDOCO, function(o) { return (o.id === rootID)  && (o.LINOUT === LIN)})
        var ocoCritical = _.filter(store.getState().LINCRITICALOCO, function(o) { return (o.id === rootID)  && (o.LINOUT === LIN)})



       //console.log('baseFunded', baseFunded)
       //console.log('baseCritical', baseCritical)
       //console.log('ocoFunded', ocoFunded)
       //console.log('ocoCritical', ocoCritical)

       

        if(baseFunded.length > 0) userLINObj = calculateLIN(userLINObj, baseFunded[0])
        if(baseCritical.length > 0) userLINObj = calculateLIN(userLINObj, baseCritical[0])
        if(ocoFunded.length > 0) userLINObj = calculateLIN(userLINObj, ocoFunded[0])
        if(ocoCritical.length > 0) userLINObj = calculateLIN(userLINObj, ocoCritical[0])
        
        


        //console.log('userLINObj', userLINObj)


        return userLINObj


         



    }
    catch(e){
        console.log('roots.js :  filterKey5()')
        console.log(e)

    }
}


$( document ).ready(function() {

    jQuery("#rootToLIN").on( "click", "input", function(e) {


        try{

          

            

            e.stopPropagation();
    
            var checked = jQuery(this).is(":checked");
            var userLIN = store.getState().USERLIN
            var LIN = this.value;
            var rootID = parseInt(this.id, 10);
            var LINID = LIN+rootID

           // console.log(checked, userLIN, LIN, rootID, this)



            if(checked){

                var userLINObj = filterLIN(LIN, rootID, LINID)

                //console.log('userLINObj', userLINObj)

                store.dispatch(getLINAction(userLINObj))//update state
            }else{

                store.dispatch(removeLINAction(LINID))//update state

             

            }

              //calculate state
              //console.log('The new state is: ', store.getState())
              calculateEntry()


        }
        catch(e){
            console.log('roots.js :  jQuery("#roots").on')
            console.log(e)
        }

        
        

    
    });


});
