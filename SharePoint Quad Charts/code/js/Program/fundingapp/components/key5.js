function filterKey5(key5, rootID, key5ID){
    try{

        var FYs = store.getState().FYs[0]
        var fyArr = setKey5FYs(FYs)
        var userKey5Obj = {}
        userKey5Obj.id = key5ID
        userKey5Obj.key5 = key5
        userKey5Obj.rootID = rootID
        userKey5Obj.POM = 0;
        userKey5Obj.POMSplit = 0;
        userKey5Obj.FY =  fyArr[0] //Set Original FYs
        userKey5Obj.FYSplit =  fyArr[1] //Set FYs Splits
        userKey5Obj.FYMutate =  fyArr[2] //Set Mutate FYs

        

        var baseFunded = _.filter(store.getState().KEY5RDTEBASEFUNDED, function(o) { return (o.id === rootID)  && (o.Key5 === key5)})
        var baseCritical = _.filter(store.getState().KEY5RDTEBASECRITICAL, function(o) { return (o.id === rootID)  && (o.Key5 === key5)})
        var ocoFunded = _.filter(store.getState().KEY5RDTEOCOFUNDED, function(o) { return (o.id === rootID)  && (o.Key5 === key5)})
        var ocoCritical = _.filter(store.getState().KEY5RDTEOCOCRITICAL, function(o) { return (o.id === rootID)  && (o.Key5 === key5)})



       //console.log('baseFunded', baseFunded)
       //console.log('baseCritical', baseCritical)
       //console.log('ocoFunded', ocoFunded)
       //console.log('ocoCritical', ocoCritical)

       

        if(baseFunded.length > 0) userKey5Obj = calculateKey5(userKey5Obj, baseFunded[0])
        if(baseCritical.length > 0) userKey5Obj = calculateKey5(userKey5Obj, baseCritical[0])
        if(ocoFunded.length > 0) userKey5Obj = calculateKey5(userKey5Obj, ocoFunded[0])
        if(ocoCritical.length > 0) userKey5Obj = calculateKey5(userKey5Obj, ocoCritical[0])
        


       // console.log('userKey5', userKey5Obj)


        return userKey5Obj


         



    }
    catch(e){
        console.log('roots.js :  filterKey5()')
        console.log(e)

    }
}





$( document ).ready(function() {

    jQuery("#rootTokey5").on( "click", "input", function(e) {


        try{

          

            

            e.stopPropagation();
    
            var checked = jQuery(this).is(":checked");
            var userKey5 = store.getState().USERKEY5
            var key5 = this.value;
            var rootID = parseInt(this.id, 10);
            var key5ID = key5+rootID


            if(checked){

                var userKey5Obj = filterKey5(key5, rootID, key5ID)
                store.dispatch(getUserKey5Action(userKey5Obj))//update state


            }else{

                store.dispatch(removeUserKey5Action(key5ID))//update state
            }

            //calculate state
            //console.log('The new state is: ', store.getState())
            calculateEntry()


        }
        catch(e){
            console.log('key5.js :  jQuery("#rootTokey5").on')
            console.log(e)
        }

        
        

    
    });


});
