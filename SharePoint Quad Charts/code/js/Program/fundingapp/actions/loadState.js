//Load Appropriations and Roots to State

angular.module('app').controller('rootCtrl', ['$q','fundingAPI', function ($q, $fundingAPI) {


    try{

        var vm = this; //view model
			
	
        //Root Items
        var rootUrl = $fundingAPI.rootUrl(); 
        var rootItem = $fundingAPI.getItems(rootUrl); 

        //FY Items
		var  fyUrl = $fundingAPI.fyUrl(); 
		var  fyUrlItem = $fundingAPI.getItems(fyUrl); 
    
    
        var allData = $q.all([rootItem, fyUrlItem]);
    
         allData.then(function (__allData) {//All Data
    
            console.log('_allData',__allData)
            
            
    
            vm.root = __allData[0]; 
            vm.fy = __allData[1]; 

           // console.log(vm.fy)
           //console.log('vm.root', vm.root)
            
            var rootdb = TAFFY(vm.root);
            var roots  = rootdb().distinct('Root').sort(); //Distinct Roots

            var key5DB =  TAFFY(vm.root);
            var key5Arr  = key5DB().distinct('OData__x004b_EY5').sort(); //Distinct Key5s

           
            var LINDB = TAFFY(vm.root);
            var LINArr  = LINDB().distinct('LINOUT').sort(); //Distinct LINS



            //console.log('LINArr', LINArr)
            //console.log('key5Arr', key5Arr)

    
            
            for(var i = 0; i < vm.root.length; i++){//set appropriations and roots
    
                var appnObj = vm.root[i]
                //console.log('appnObj', appnObj)
               
               if( i <  roots.length){//build root index
    
                    var root =  roots[i];
                    var rootID = i + 1;
                    //console.log(rootID, root)
                    var rootObj = ROOT(rootID, root); //Set Roots
                    
                    setAPPN(vm.root, root, rootID, vm.fy, 'RDTE')//set approprations

                    for(var j = 0; j < key5Arr.length; j++){//iterate key5s

                        var key5 = key5Arr[j];

                        //console.log(root, key5)

                        //console.log('key5', key5Arr[i])
                        setKey5(vm.root, root, rootID, vm.fy, key5, 'RDTE')  //set RDTE key5
                        rootObj = rootToKey5(vm.root, root, key5, rootObj)  //Set Roots


                    }

                    for(var j = 0; j < LINArr.length; j++){//iterate LINs

                        var LIN = LINArr[j];

                        //console.log(root, LIN)

                        //console.log('key5', key5Arr[i])
                        setLIN(vm.root, root, rootID, vm.fy, LIN, 'RDTE')   //set RDTE LIN
                        rootObj = rootToLIN(vm.root, root, LIN, rootObj)  //Set Roots

                    }

                    store.dispatch(getRootAction(rootObj))//Set Roots


    
               }
    
    
    
            }


            store.dispatch(getFYAction(vm.fy))//Set FYs
         

            


            //Load DOM Components
            loadRoots() //Load Roots
            loadFYs() //load FY

          

            console.log('The new state is: ', store.getState())



            

            
            

            


            

            
            /*
            
            

            //set LINs
            allLINs(LINs, rootData, fys)

            console.log('The new state is: ', store.getState())


            /////////////////////////ACTION: USER SELECTS LIN
            var LIN = 'Z05131';


            console.log('rootData', rootData)




            

            console.log('quantityFUNDEDBASE', quantityFUNDEDBASE)


            var quantity_FUNDED_BASE_DB = TAFFY(quantityFUNDEDBASE)();

            console.log('quantity_FUNDED_BASE_DB', quantity_FUNDED_BASE_DB)
            console.log('rootID', rootID)
            console.log('root', rootName)
            console.log(vm.fy, fys)

            */

						
						
						
            //var quantity_funded_base = (quantityFUNDEDBASE.length > 0 )    ?  APPNFUNDEDBASE(quantity_FUNDED_BASE_DB, rootID, root, fys) : false;
            
            //console.log('quantity_funded_base', quantity_funded_base)


                        
           



            

    
        });

    }
    catch(e){
        console.log('dashboard.js : ROOT')
        console.log(e);
    }


        
      


}]);//rootCtrl