//otherufr.js

const GET_AWCFUFR = 'GET_AWCFUFR'; const REMOVE_AWCFUFR = 'REMOVE_WTCVAWCF';
const GET_CHMCUFR = 'GET_CHMCUFR'; const REMOVE_CHMCUFR = 'REMOVE_CHMCUFR';
const GET_CHMDUFR = 'GET_CHMDUFR'; const REMOVE_CHMDUFR = 'REMOVE_CHMDUFR';
const GET_MCAUFR =  'GET_MCAUFR';  const REMOVE_MCAUFR =  'REMOVE_MCAUFR';
const GET_NGPAUFR = 'GET_NGPAUFR'; const REMOVE_NGPAUFR = 'REMOVE_NGPAUFR';
const GET_OMAUFR =  'GET_OMAUFR';  const REMOVE_OMAUFR =  'REMOVE_OMAUFR';
const GET_OMNGUFR = 'GET_OMNGUFR'; const REMOVE_OMNGUFR = 'REMOVE_OMNGUFR';
const GET_OMARUFR = 'GET_OMARUFR'; const REMOVE_OMARUFR = 'REMOVE_OMARUFR';
const GET_RDTAUFR = 'GET_RDTAUFR'; const REMOVE_RDTAUFR = 'REMOVE_RDTAUFR';
const GET_RPAUFR =  'GET_RPAUFR';  const REMOVE_RPAUFR =  'REMOVE_RPAUFR';
const GET_WEDGUFR = 'GET_WEDGUFR'; const REMOVE_WEDGUFR = 'REMOVE_WEDGUFR';
const GET_OTHERUFR_FYs = 'GET_OTHERUFR_FYs';





function getAWCFUFRAPPNAction(appn){//AWCF CRITICAL ACTIONS

    return{
        type: GET_AWCFUFR,
        appn
    }
}

function removeAWCFUFRAPPNAction(id){//REMOVE AWCF CRITICAL ACTION

    return{
        type: REMOVE_AWCFUFR,
        id
    }
}

function getCHMCUFRAPPNAction(appn){//CHMC CRITICAL ACTIONS

    return{
        type: GET_CHMCUFR,
        appn
    }
}

function removeCHMCUFRAPPNAction(id){//REMOVE CHMC CRITICAL ACTION

    return{
        type: REMOVE_CHMCUFR,
        id
    }
}

function getCHMDUFRAPPNAction(appn){//CHMD CRITICAL ACTIONS

    return{
        type: GET_CHMDUFR,
        appn
    }
}

function removeCHMDUFRAPPNAction(id){//REMOVE CHMD CRITICAL ACTION

    return{
        type: REMOVE_CHMDUFR,
        id
    }
}

function getMCAUFRAPPNAction(appn){//MCA CRITICAL ACTIONS

    return{
        type: GET_MCAUFR,
        appn
    }
}		

function removeMCAUFRAPPNAction(id){//REMOVE MCA CRITICAL ACTION

    return{
        type: REMOVE_MCAUFR,
        id
    }
}

function getNGPAUFRAPPNAction(appn){//NGPA CRITICAL ACTIONS

    return{
        type: GET_NGPAUFR,
        appn
    }
}

function removeNGPAUFRAPPNAction(id){//REMOVE NGPA CRITICAL ACTION

    return{
        type: REMOVE_NGPAUFR,
        id
    }
}

function getOMAUFRAPPNAction(appn){//OMA UFR ACTIONS

    return{
        type: GET_OMAUFR,
        appn
    }
}

function removeOMAUFRAPPNAction(id){//REMOVE OMA CRITICAL ACTION

    return{
        type: REMOVE_OMAUFR,
        id
    }
}

function getOMNGUFRAPPNAction(appn){//OMNG CRITICAL ACTIONS

    return{
        type: GET_OMNGUFR,
        appn
    }
}

function removeOMNGUFRAPPNAction(id){//REMOVE OMNG CRITICAL ACTION

    return{
        type: REMOVE_OMNGUFR,
        id
    }
}

function getOMARUFRAPPNAction(appn){//OMAR CRITICAL ACTIONS

    return{
        type: GET_OMARUFR,
        appn
    }
}

function removeOMARUFRAPPNAction(id){//REMOVE OMAR CRITICAL ACTION

    return{
        type: REMOVE_OMARUFR,
        id
    }
}

function getRDTAUFRAPPNAction(appn){//RDTA CRITICAL ACTIONS

    return{
        type: GET_RDTAUFR,
        appn
    }
}

function removeRDTAUFRAPPNAction(id){//REMOVE RDTA CRITICAL ACTION

    return{
        type: REMOVE_RDTAUFR,
        id
    }
}

function getRPAUFRAPPNAction(appn){//RPA CRITICAL ACTIONS

    return{
        type: GET_RPAUFR,
        appn
    }
}

function removeRPAUFRAPPNAction(id){//REMOVE RPA CRITICAL ACTION

    return{
        type: REMOVE_RPAUFR,
        id
    }
}

function getWEDGUFRAPPNAction(appn){//WEDG CRITICAL ACTIONS

    return{
        type: GET_WEDGUFR,
        appn
    }
}

function removeWEDGUFRAPPNAction(id){//REMOVE WEDG CRITICAL ACTION

    return{
        type: REMOVE_WEDGUFR,
        id
    }
}

function getOTHERFYUFRAction(appn){//OTHER CRITICAL FYs

    return{
        type: GET_OTHERUFR_FYs,
        appn
    }
}

		//Get AWCF Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getAWCFUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AWCF",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getAWCFUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AWCF",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
        //store.dispatch(removeAWCFUFRAPPNAction(1))
                
        //Get CHMC Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getCHMCUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMC",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getCHMCUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMC",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
        }))
        //store.dispatch(removeCHMCUFRAPPNAction(1))

        //Get CHMD Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getCHMDUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMD",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		
		store.dispatch(getCHMDUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMD",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
        }))
        //store.dispatch(removeCHMDUFRAPPNAction(1))

        //Get MCA Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getMCAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MCA",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getMCAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MCA",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
        }))
        //store.dispatch(removeMCAUFRAPPNAction(1))

        //Get NGPA Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getNGPAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "NGPA",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getNGPAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "NGPA",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
        }))
        //store.dispatch(removeNGPAUFRAPPNAction(1))

        //Get OMA Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMA",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOMAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMA",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
        }))
         //store.dispatch(removeOMAUFRAPPNAction(1))

         //Get OMNG Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMNGUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMNG",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOMNGUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMNG",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
        }))
        //store.dispatch(removeOMNGUFRAPPNAction(1))

        //Get OMAR Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMARUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMAR",
			Root: "Root1",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOMARUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMAR",
			Root: "Root2",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
        }))
        //store.dispatch(removeOMARUFRAPPNAction(1))

        //Get RDTA Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getRDTAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTA",
			Root: "Root1",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getRDTAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTA",
			Root: "Root2",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
        }))
        //store.dispatch(removeRDTAUFRAPPNAction(1))

        //Get RPA Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getRPAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RPA",
			Root: "Root1",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getRPAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RPA",
			Root: "Root2",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
        }))
        //store.dispatch(removeRPAUFRAPPNAction(1))

        //Get WEDG Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getWEDGUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WEDG",
			Root: "Root1",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getWEDGUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WEDG",
			Root: "Root2",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
        }))
        //store.dispatch(removeWEDGUFRAPPNAction(1))























































