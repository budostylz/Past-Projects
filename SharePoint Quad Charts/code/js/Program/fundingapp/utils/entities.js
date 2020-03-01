//entities.js

function ROOT(i, root){
    try{



        //console.log('root data')
        //console.log(root);

        var roots =  {
            id: i,
            Root : root,
            Key5: [],
            LIN: [],
            LINNOMEN: [],
        } 

        //console.log(roots);

        return roots;


    }
    catch(e){
        console.log('entities.js : ROOT')
        console.log(e)
    }
}//ROOT

function rootToKey5(allData, root, key5, rootObj){
    try{


        var key5s = _.filter(allData, function(o) 
        { return (o.Root === root)   && 
                 (o.OData__x004b_EY5 === key5) 
                
        })

        var key5DB =  TAFFY(key5s);
        var key5Arr  = key5DB().distinct('OData__x004b_EY5').sort(); //Distinct Key5s


        if(key5Arr.length > 0){
            //console.log(root, key5Arr[0])

            rootObj.Key5.push( key5Arr[0] )
            return rootObj


        }

       
        return rootObj




    }
    catch(e){
        console.log('entities.js : rootToKey5')
        console.log(e)
    }
}//rootToKey5

function rootToLIN(allData, root, LIN, rootObj){
    try{


        var LINs = _.filter(allData, function(o) 
        { return (o.Root === root)   && 
                 (o.LINOUT === LIN) 
                
        })

        var LINDB = TAFFY(LINs);
        var LINArr  = LINDB().distinct('LINOUT').sort(); //Distinct LINS


        if(LINArr.length > 0){
            //console.log(root, LINArr[0])

            rootObj.LIN.push( LINArr[0] )
            rootObj.LINNOMEN.push( LINs[0].LINNOMEN )
            //return rootObj


        }

       
        return rootObj




    }
    catch(e){
        console.log('entities.js : rootToLIN')
        console.log(e)
    }
}//rootToLIN




function setAPPN(allData, root, rootID, fy, appn){

    try{

        var fundedBASE = _.filter(allData, function(o) 
        { return (o.Root === root)   && 
                 (o.APPN === appn) 	&&
                 (o.BO === '1') 	&&
                 (o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
                  o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
                  o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
                  o.DollarType1 === 'SPEC')
         })


         
        var fundedOCO = _.filter(allData, function(o) 
                    { return (o.Root === root)   && 
                            (o.APPN === appn) 	&&
                            (o.BO === '1') 	    &&
                            (o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
                            o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
                            o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
                            o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
                            o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
                            o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
                            o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
                            o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
                            o.DollarType1 === 'MSUP'
                            )
                    })
                    
        var fundedCRITICALBASE = _.filter(allData, function(o) 
                    { return (o.Root === root)   && 
                            (o.APPN === appn) 	&&
                            (o.BO === '7') 	    &&
                            (o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
                            o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
                            o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
                            o.DollarType1 === 'SPEC'  )
                    })
                    
        var fundedCRITICALOCO = _.filter(allData, function(o) 
                    { return (o.Root === root)   && 
                            (o.APPN === appn) 	&&
                            (o.BO === '7') 	    &&
                            (o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
                            o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
                            o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
                            o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
                            o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
                            o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
                            o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
                            o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
                            o.DollarType1 === 'MSUP'
                            )
                    })

            var funded_BASE_DB = TAFFY(fundedBASE)();
			var funded_OCO_DB = TAFFY(fundedOCO)();
			var critical_BASE_DB = TAFFY(fundedCRITICALBASE)();
            var critical_OCO_DB = TAFFY(fundedCRITICALOCO)();
            

            var funded_base =   (fundedBASE.length > 0 )         ?          setAPPNType(funded_BASE_DB, rootID, root, fy, 'FUNDEDBASE',null, null, null) : false;
            var funded_oco =    (fundedOCO.length > 0 )          ?          setAPPNType(funded_OCO_DB, rootID, root, fy, 'FUNDEDOCO',null, null, null) : false;
            var critical_base = (fundedCRITICALBASE.length > 0 ) ?          setAPPNType(critical_BASE_DB, rootID, root, fy, 'CRITICALBASE',null, null, null) : false;
            var critical_oco =  (fundedCRITICALOCO.length > 0 )  ?          setAPPNType(critical_OCO_DB, rootID, root, fy, 'CRITICALOCO',null, null, null) : false;

            //console.log('FUNDEDBASE', funded_base);
			//console.log('FUNDEDOCO', funded_oco);
			//console.log('CRITICALBASE', critical_base);
			//console.log('CRITCALOCO', critical_oco);


            

            if(funded_base){//FUNDED BASE	
                if(appn === 'RDTE')
                 store.dispatch(get_RDTE_FUNDED_BASE_Action(funded_base))
                //store.dispatch(get_RDTE_FUNDED_BASE_Action(rdte_funded_base)) //test additional roots
                
                //var appn = store.getState().RDTEFUNDEDBASE;		
                //totalFundedFY = calculateAPPN(appn, totalFundedFY, vm.fy, 'FUNDED_BASE_FY')
                


            }
            
            if(funded_oco){//FUNDED OCO
                if(appn === 'RDTE')
                 store.dispatch(get_RDTE_FUNDED_OCO_Action(funded_oco))
                
                //var appn = store.getState().RDTEFUNDEDOCO;
               // totalFundedFY = calculateAPPN(appn, totalFundedFY, vm.fy, 'FUNDED_OCO_FY')

                
            }
            
            if(critical_base){//CRITICAL BASE
                if(appn === 'RDTE')
                 store.dispatch(get_RDTE_CRITICAL_BASE_Action(critical_base))
                
                //var appn = store.getState().RDTECRITICALBASE;
                //totalCriticalFY = calculateAPPN(appn, totalCriticalFY, vm.fy, 'CRITICAL_BASE_FY')

                
            }

            
            if(critical_oco){//CRITICAL OCO		
                if(appn === 'RDTE')			
                 store.dispatch(get_RDTE_CRITICAL_OCO_Action(critical_oco))
                
                //var appn = store.getState().RDTECRITICALOCO;
                //totalCriticalFY = calculateAPPN(appn, totalCriticalFY, vm.fy, 'CRITICAL_OCO_FY')
                
                
            }

            



    }
    catch(e){
        console.log('setAPPN.js : entities.js')
        console.log(e);

    }

}//setAPPN





function setKey5(allData, root, rootID, fy, key5, appn){

    try{

        //console.log('allData', allData)
        //console.log('root', root)
        //console.log('rootID', rootID)
        //console.log('fy', fy)
        //console.log('key5', key5)
        //console.log('appn', appn)

        var fundedBASE = _.filter(allData, function(o) 
        { return (o.Root === root)   && 
                 (o.APPN === appn) 	&&
                 (o.OData__x004b_EY5 === key5) 	&&
                 (o.BO === '1') 	&&
                 (o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
                  o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
                  o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
                  o.DollarType1 === 'SPEC')
         })
         //console.log('fundedBASE', root,key5, fundedBASE)

         
        var fundedOCO = _.filter(allData, function(o) 
                    { return (o.Root === root)   && 
                            (o.APPN === appn) 	&&
                            (o.OData__x004b_EY5 === key5) 	&&
                            (o.BO === '1') 	    &&
                            (o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
                            o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
                            o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
                            o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
                            o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
                            o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
                            o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
                            o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
                            o.DollarType1 === 'MSUP'
                            )
                    })
                    
        var fundedCRITICALBASE = _.filter(allData, function(o) 
                    { return (o.Root === root)   && 
                            (o.APPN === appn) 	&&
                            (o.OData__x004b_EY5 === key5) 	&&
                            (o.BO === '7') 	    &&
                            (o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
                            o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
                            o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
                            o.DollarType1 === 'SPEC'  )
                    })
                    
        var fundedCRITICALOCO = _.filter(allData, function(o) 
                    { return (o.Root === root)   && 
                            (o.APPN === appn) 	&&
                            (o.OData__x004b_EY5 === key5) 	&&
                            (o.BO === '7') 	    &&
                            (o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
                            o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
                            o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
                            o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
                            o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
                            o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
                            o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
                            o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
                            o.DollarType1 === 'MSUP'
                            )
                    })

            var funded_BASE_DB = TAFFY(fundedBASE)();
			var funded_OCO_DB = TAFFY(fundedOCO)();
			var critical_BASE_DB = TAFFY(fundedCRITICALBASE)();
            var critical_OCO_DB = TAFFY(fundedCRITICALOCO)();
            

            var funded_base =   (fundedBASE.length > 0 )         ?          setAPPNType(funded_BASE_DB, rootID, root, fy, 'FUNDEDBASE', key5, null, null) : false;
            var funded_oco =    (fundedOCO.length > 0 )          ?          setAPPNType(funded_OCO_DB, rootID, root, fy, 'FUNDEDOCO', key5, null, null) : false;
            var critical_base = (fundedCRITICALBASE.length > 0 ) ?          setAPPNType(critical_BASE_DB, rootID, root, fy, 'CRITICALBASE', key5, null, null) : false;
            var critical_oco =  (fundedCRITICALOCO.length > 0 )  ?          setAPPNType(critical_OCO_DB, rootID, root, fy, 'CRITICALOCO', key5, null, null) : false;

            //console.log('FUNDEDBASE', funded_base);
			//console.log('FUNDEDOCO', funded_oco);
			//console.log('CRITICALBASE', critical_base);
			//console.log('CRITCALOCO', critical_oco);


            

            if(funded_base){//FUNDED BASE	
                if(appn === 'RDTE')
                 store.dispatch(getUserKey5RDTEBASEFUNDEDAction(funded_base))
                //store.dispatch(get_RDTE_FUNDED_BASE_Action(rdte_funded_base)) //test additional roots
                
                //var appn = store.getState().RDTEFUNDEDBASE;		
                //totalFundedFY = calculateAPPN(appn, totalFundedFY, vm.fy, 'FUNDED_BASE_FY')
                


            }
            
            if(funded_oco){//FUNDED OCO
                if(appn === 'RDTE')
                 store.dispatch(getUserKey5RDTEOCOFUNDEDAction(funded_oco))
                
                //var appn = store.getState().RDTEFUNDEDOCO;
               // totalFundedFY = calculateAPPN(appn, totalFundedFY, vm.fy, 'FUNDED_OCO_FY')

                
            }
            
            if(critical_base){//CRITICAL BASE
                if(appn === 'RDTE')
                 store.dispatch(getUserKey5RDTEBASECRITICALAction(critical_base))
                
                //var appn = store.getState().RDTECRITICALBASE;
                //totalCriticalFY = calculateAPPN(appn, totalCriticalFY, vm.fy, 'CRITICAL_BASE_FY')

                
            }

            
            if(critical_oco){//CRITICAL OCO		
                if(appn === 'RDTE')			
                 store.dispatch(getUserKey5RDTEOCOCRITICALAction(critical_oco))
                
                //var appn = store.getState().RDTECRITICALOCO;
                //totalCriticalFY = calculateAPPN(appn, totalCriticalFY, vm.fy, 'CRITICAL_OCO_FY')
                
                
            }

            

            



    }
    catch(e){
        console.log('entities.js : setKey5')
        console.log(e);

    }

}//setKey5

function setLIN(allData, root, rootID, fy, LIN, appn){

    try{

        //console.log('allData', allData)
        //console.log('root', root)
        //console.log('rootID', rootID)
        //console.log('fy', fy)
        //console.log('key5', key5)
        //console.log('appn', appn)

        var fundedBASE = _.filter(allData, function(o) 
        { return (o.Root === root)   && 
                 (o.APPN === appn) 	&&
                 (o.LINOUT === LIN) 	&&
                 (o.BO === '1') 	&&
                 (o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
                  o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
                  o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
                  o.DollarType1 === 'SPEC')
         })
        //console.log('fundedBASE', root, LIN, fundedBASE)

         
        var fundedOCO = _.filter(allData, function(o) 
                    { return (o.Root === root)   && 
                            (o.APPN === appn) 	&&
                            (o.LINOUT === LIN) 	&&
                            (o.BO === '1') 	    &&
                            (o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
                            o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
                            o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
                            o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
                            o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
                            o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
                            o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
                            o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
                            o.DollarType1 === 'MSUP'
                            )
                    })
                    
        var fundedCRITICALBASE = _.filter(allData, function(o) 
                    { return (o.Root === root)   && 
                            (o.APPN === appn) 	&&
                            (o.LINOUT === LIN) 	&&
                            (o.BO === '7') 	    &&
                            (o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
                            o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
                            o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
                            o.DollarType1 === 'SPEC'  )
                    })
                    
        var fundedCRITICALOCO = _.filter(allData, function(o) 
                    { return (o.Root === root)   && 
                            (o.APPN === appn) 	&&
                            (o.LINOUT === LIN) 	&&
                            (o.BO === '7') 	    &&
                            (o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
                            o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
                            o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
                            o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
                            o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
                            o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
                            o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
                            o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
                            o.DollarType1 === 'MSUP'
                            )
                    })

            var funded_BASE_DB = TAFFY(fundedBASE)();
			var funded_OCO_DB = TAFFY(fundedOCO)();
			var critical_BASE_DB = TAFFY(fundedCRITICALBASE)();
            var critical_OCO_DB = TAFFY(fundedCRITICALOCO)();
            

            var funded_base =   (fundedBASE.length > 0 )         ?          setAPPNType(funded_BASE_DB, rootID, root, fy, 'FUNDEDBASE', null, LIN, fundedBASE[0].LINNOMEN, 'LIN') : false;
            var funded_oco =    (fundedOCO.length > 0 )          ?          setAPPNType(funded_OCO_DB, rootID, root, fy, 'FUNDEDOCO', null, LIN, fundedOCO[0].LINNOMEN, 'LIN') : false;
            var critical_base = (fundedCRITICALBASE.length > 0 ) ?          setAPPNType(critical_BASE_DB, rootID, root, fy, 'CRITICALBASE', null, LIN, fundedCRITICALBASE[0].LINNOMEN, 'LIN') : false;
            var critical_oco =  (fundedCRITICALOCO.length > 0 )  ?          setAPPNType(critical_OCO_DB, rootID, root, fy, 'CRITICALOCO', null, LIN, fundedCRITICALOCO[0].LINNOMEN, 'LIN') : false;

            //console.log('FUNDEDBASE', funded_base);
			//console.log('FUNDEDOCO', funded_oco);
			//console.log('CRITICALBASE', critical_base);
			//console.log('CRITCALOCO', critical_oco);


           
            

            if(funded_base){//FUNDED BASE	
                 store.dispatch(getFundedBaseLINAction(funded_base))
                //store.dispatch(get_RDTE_FUNDED_BASE_Action(rdte_funded_base)) //test additional roots
                
                //var appn = store.getState().RDTEFUNDEDBASE;		
                //totalFundedFY = calculateAPPN(appn, totalFundedFY, vm.fy, 'FUNDED_BASE_FY')
                


            }
            
            if(funded_oco){//FUNDED OCO
                store.dispatch(getFundedOCOLINAction(funded_oco))
                
                //var appn = store.getState().RDTEFUNDEDOCO;
               // totalFundedFY = calculateAPPN(appn, totalFundedFY, vm.fy, 'FUNDED_OCO_FY')

                
            }
            
            if(critical_base){//CRITICAL BASE
                store.dispatch(getCriticalBaseLINAction(critical_base))
                
                //var appn = store.getState().RDTECRITICALBASE;
                //totalCriticalFY = calculateAPPN(appn, totalCriticalFY, vm.fy, 'CRITICAL_BASE_FY')

                
            }

            
            if(critical_oco){//CRITICAL OCO		
                store.dispatch(getCriticalOCOLINAction(critical_oco))
                
                //var appn = store.getState().RDTECRITICALOCO;
                //totalCriticalFY = calculateAPPN(appn, totalCriticalFY, vm.fy, 'CRITICAL_OCO_FY')
                
                
            }

            

            

            



    }
    catch(e){
        console.log('entities.js : setLIN')
        console.log(e);

    }

}//setLIN


function setAPPNType(appnDB, rootID, root, FYs, appnTag, key5, LIN, LINNOMEN, entity){
    try{

        //console.log('appnDB', appnDB.get()[0].BO)
        //console.log('id',rootID)
        //console.log(root,rdteFY)
        var appnObj = {};
        appnObj.id = rootID;
        appnObj.Portfolio = appnDB.get()[0].PORTFOLIO;
        appnObj.APPN = appnDB.get()[0].APPN;
        appnObj.Root = root;
        appnObj.Key5 = (key5) ? key5 : '';

        appnObj.LINOUT = (LIN) ? LIN : '';
        appnObj.LINNOMEN = (LIN) ? appnDB.get()[0].LINNOMEN : '';


        switch(appnTag){

            case 'FUNDEDBASE' :
                appnObj.BO = "Funded";
                appnObj.DollarType = "BASE";
                break;

            case 'FUNDEDOCO' :
                appnObj.BO = "Funded";
                appnObj.DollarType = "OCO";
                break;
            
            case 'CRITICALBASE' :
                appnObj.BO = "Critical";
                appnObj.DollarType = "BASE";
                break;

            case 'CRITICALOCO' :
                appnObj.BO = "Critical";
                appnObj.DollarType = "OCO";
                break;

        }

        for(var i = 0; i < FYs.length; i++){

            var fyprop = 'OData__x0046_Y' + FYs[i].Title;//might change depending on server environment
            var fyprop2 = 'PQtyFY' + FYs[i].Title;//might change depending on server environment
            var fystr = 'FY'+ FYs[i].Title;
            var appnFY = (entity === 'LIN') ? appnDB.select(fyprop2) : appnDB.select(fyprop)
            
            appnObj[fystr] = (appnFY) ? appnFY : 0
            //console.log(fystr, appnFY)

           
            
           // console.log(root + ', ' + fyprop + ' : ' + fystr)


        }

        if(key5){
            //console.log(key5, appnObj)
        }else if(LIN){
            //console.log(LIN, appnObj)

        }else if(!key5 && !LIN){
            //console.log(appnTag, appnObj)
        }

        
       
        return appnObj;

    }
    catch(e){
        console.log('entities.js : APPNFUNDEDBASE')
        console.log(e);
    }
}//setAPPNType










function KEY5(_key5Obj, FY){
    try{

	
		//console.log('_key5Obj',_key5Obj)
		//console.log('FY', FY)


        //console.log(i, root, key5);

		
        //console.log(roots);
		
		
		
		var key5Obj = {};
		key5Obj.id = _key5Obj.ID || _key5Obj.Id;
		key5Obj.BOS = _key5Obj.PORTFOLIO;
		key5Obj.Root = _key5Obj.Root;
        key5Obj.APPN = _key5Obj.APPN;
        key5Obj.BO = _key5Obj.BO;
		key5Obj.DollarType = _key5Obj.DollarType1;
		key5Obj.Key5 = _key5Obj.OData__x004b_EY5;
		
		
		console.log('key5Obj', key5Obj)

		

        //key5Obj = Key5Helper(_key5Obj, key5Obj, FY)

        //console.log(root, key5Obj)
        return key5Obj;
		
		
		
		
		
		
		
		
		
		


		



    }
    catch(e){
        console.log('entities.js : KEY5')
        console.log(e);
    }
}//KEY5

function allLINsKey5s(LINs, rootData, FYs){
    try{

    
        

        for(var i = 0; i < LINs.length; i++){
           

            var LIN = LINs[i]
            var _LINObj = _.filter(rootData, function(o) { return o.LINOUT === LIN })[0]
            var root = _.filter(rootData, function(o) { return o.LINOUT === LIN })[0].Root
            var LINNOMEN = _.filter(rootData, function(o) { return o.LINOUT === LIN })[0].LINNOMEN

            //console.log(LIN, _.filter(procData, function(o) { return o.LINOUT === LIN }) )

            var LINObj = {};
            LINObj.LIN = LIN
            LINObj.Root = root
            LINObj.LINNOMEN = LINNOMEN


           for(var j = 0; j < FYs.length; j++){

                var fyprop = 'PQtyFY' + FYs[j].Title;
                var fystr = 'FY'+ FYs[j].Title;

                //console.log(LIN, fyprop, fystr, _LINObj[fyprop])

                LINObj[fyprop] = 0;
                LINObj[fyprop] = (_LINObj[fyprop]) ? _LINObj[fyprop] : 0
              

               
                
               // console.log(root + ', ' + fyprop + ' : ' + fystr)


            }

            //store.dispatch(getLINAction(LINObj))//Set LINs


            console.log(LIN, LINObj)

            
            //console.log(root, LIN)
        }

    }
    catch(e){
        console.log('entities.js : LINs')
        console.log(e);
    }
}//LINs


function Key5Helper(_key5Obj, key5Obj, FYs){
    try{

        //var keydb = TAFFY(key5Arr);

		//console.log('Key5Helper')
		//console.log('_key4Obj ', _key5Obj)
        //console.log('key4Obj ', key5Obj)
        //console.log('fys', FYs)
		
		
		

        

        for(var i = 0; i < FYs.length; i++){

                var fyprop = 'OData__x0046_Y' + FYs[i].Title;
                var fystr = 'FY'+ FYs[i].Title;
                var key5FY = keydb().select(fyprop);
                //console.log(fystr, key5FY)
				

				key5Obj[fystr] = _key5Obj[fystr]
				//key5Obj[fystr+'SPLIT'] = 0;
					
				

               //console.log(fyprop, fystr)



            

        }
		
		
		
		

        //console.log(key4Obj)
        return key5Obj;
		
		




    }
    catch(e){
        console.log('entities.js : Key5Helper')
        console.log(e);
    }
}//Key5Helper




function PROGRAMPROPERTIES(program){
    try{

        //console.log('program data')
        //console.log(program[0]);


        if (program.length > 0) {

            var program_properties =  {
                id:         (program[0].ID || program[0].Id) ?          program[0].ID || program[0].Id  : '',
                Program:    (program[0].Title) ?                        program[0].Title : '',
                BOS:        (program[0].BOS) ?                          program[0].BOS : '',
                Portfolio:  (program[0].PORTFOLIO ) ?                   program[0].PORTFOLIO : '',
                Root:       (program[0].Root) ?                         program[0].Root.split(',') : '',
                Key4:       (program[0].OData__x004b_ey4) ?             program[0].OData__x004b_ey4.split(',') : ''
              } 

              return program_properties


        }else{
            return false
        }


    }
    catch(e){
        console.log('entities.js : PROGRAMPROPERTIES')
        console.log(e);
    }
}//PROGRAMPROPERTIES

function PROGRAMFUNDING(program){
    try{

        //console.log('program data')
        //console.log(program[0]);


        if (program.length > 0) {

            var programFunding =  {
                id:         (program[0].programID) ?                    program[0].programID  : '',
                Program:    (program[0].Title) ?                        program[0].Title : '',
                BOS:        (program[0].BOS) ?                          program[0].BOS : '',
                Portfolio:  (program[0].PORTFOLIO ) ?                   program[0].PORTFOLIO : '',
                Root:       (program[0].Root) ?                         program[0].Root.split(',') : '',
                FY19:       (program[0].OData__x0046_Y19) ?             program[0].OData__x0046_Y19 : '',
                FY20:       (program[0].OData__x0046_Y20) ?             program[0].OData__x0046_Y20 : '',
                FY21:       (program[0].OData__x0046_Y21) ?             program[0].OData__x0046_Y21 : '',
                FY22:       (program[0].OData__x0046_Y22) ?             program[0].OData__x0046_Y22 : '',
                FY23:       (program[0].OData__x0046_Y23) ?             program[0].OData__x0046_Y23 : '',
                FY24:       (program[0].OData__x0046_Y24) ?             program[0].OData__x0046_Y24 : '',
                FY25:       (program[0].OData__x0046_Y25) ?             program[0].OData__x0046_Y25 : '',
                POM:        (program[0].POMPeriod) ?                    program[0].POMPeriod : '',

              } 

              return programFunding


        }else{
            return false
        }


    }
    catch(e){
        console.log('entities.js : PROGRAMFUNDING')
        console.log(e);
    }
}//PROGRAMFUNDING













function KEY5APPNFUNDEDBASE(appnDB, rootID, root, userKey5, appnFY){
    try{

        //console.log('appnDB', appnDB.get()[0].BO)
        //console.log('id',rootID)
        //console.log(root,rdteFY)
        var appnObj = {};
        appnObj.id = rootID;
		appnObj.Portfolio = appnDB.get()[0].PORTFOLIO;
        appnObj.APPN = appnDB.get()[0].APPN;
        appnObj.Root = root;
        appnObj.BO = "Funded";
		appnObj.DollarType = "BASE";
		appnObj.Key5 = userKey5



        appnObj = APPNHelper(appnDB, appnObj, root, appnFY)

        //console.log(appnObj.APPN,appnObj)
        return appnObj;





    }
    catch(e){
        console.log('entities.js : APPNFUNDEDBASE')
        console.log(e);
    }
}//KEY5APPNFUNDEDBASE

function KEY5APPNFUNDEDOCO(appnDB, rootID, root, userKey5, appnFY){
    try{

        //console.log('appnDB', appnDB.get()[0].BO)
        //console.log('id',rootID)
        //console.log(root,rdteFY)
        var appnObj = {};
        appnObj.id = rootID;
		appnObj.Portfolio = appnDB.get()[0].PORTFOLIO;
        appnObj.APPN = appnDB.get()[0].APPN;
        appnObj.Root = root;
        appnObj.BO = "Funded";
		appnObj.DollarType = "OCO";
		appnObj.Key5 = userKey5




        appnObj = APPNHelper(appnDB, appnObj, root, appnFY)

        //console.log(appnObj.APPN,appnObj)
        return appnObj;





    }
    catch(e){
        console.log('entities.js : APPNFUNDEDBASE')
        console.log(e);
    }
}//KEY5APPNFUNDEDOCO


function KEY5APPNCRITICALBASE(appnDB, rootID, root, userKey5, appnFY){
    try{

        //console.log('appnDB', appnDB.get()[0].BO)
        //console.log('id',rootID)
        //console.log(root,rdteFY)
        var appnObj = {};
        appnObj.id = rootID;
		appnObj.Portfolio = appnDB.get()[0].PORTFOLIO;
        appnObj.APPN = appnDB.get()[0].APPN;
        appnObj.Root = root;
        appnObj.BO = "Critical";
		appnObj.DollarType = "BASE";
		appnObj.Key5 = userKey5




        appnObj = APPNHelper(appnDB, appnObj, root, appnFY)

        //console.log(appnObj.APPN,appnObj)
        return appnObj;





    }
    catch(e){
        console.log('entities.js : APPNCRITICALBASE')
        console.log(e);
    }
}//KEY5APPNCRITICALBASE

function KEY5APPNCRITICALOCO(appnDB, rootID, root, userKey5, appnFY){
    try{

        //console.log('appnDB', appnDB.get()[0].BO)
        //console.log('id',rootID)
        //console.log(root,rdteFY)
        var appnObj = {};
        appnObj.id = rootID;
		appnObj.Portfolio = appnDB.get()[0].PORTFOLIO;
        appnObj.APPN = appnDB.get()[0].APPN;
        appnObj.Root = root;
        appnObj.BO = "Critical";
		appnObj.DollarType = "OCO";
		appnObj.Key5 = userKey5




        appnObj = APPNHelper(appnDB, appnObj, root, appnFY)

        //console.log(appnObj.APPN,appnObj)
        return appnObj;





    }
    catch(e){
        console.log('entities.js : APPNCRITICALOCO')
        console.log(e);
    }
}//KEY5APPNCRITICALOCO






