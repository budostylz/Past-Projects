//other.js
const GET_AWCF = 'GET_AWCF';  const REMOVE_AWCF = 'REMOVE_AWCF'; 
const GET_CHMC = 'GET_CHMC';  const REMOVE_CHMC = 'REMOVE_CHMC'; 
const GET_CHMD = 'GET_CHMD';  const REMOVE_CHMD = 'REMOVE_CHMD'; 
const GET_MCA =  'GET_MCA';   const REMOVE_MCA =  'REMOVE_MCA'; 
const GET_NGPA = 'GET_NGPA';  const REMOVE_NGPA = 'REMOVE_NGPA'; 
const GET_OMA =  'GET_OMA';   const REMOVE_OMA =  'REMOVE_OMA';  
const GET_OMNG = 'GET_OMNG';  const REMOVE_OMNG = 'REMOVE_OMNG'; 
const GET_OMAR = 'GET_OMAR';  const REMOVE_OMAR = 'REMOVE_OMAR'; 
const GET_RDTA = 'GET_RDTA';  const REMOVE_RDTA = 'REMOVE_RDTA'; 
const GET_RPA =  'GET_RPA';   const REMOVE_RPA =  'REMOVE_RPA';  
const GET_WEDG = 'GET_WEDG';  const REMOVE_WEDG = 'REMOVE_WEDG';
const GET_OTHER_FYs = 'GET_OTHER_FYs';


function getAWCFAPPNAction(appn){//AWCF FUNDED ACTIONS

    return{
        type: GET_AWCF,
        appn
    }
}

function removeAWCFAPPNAction(id){//REMOVE AWCF FUNDED ACTION

    return{
        type: REMOVE_AWCF,
        id
    }
}	

function getCHMCAPPNAction(appn){//CHMC FUNDED ACTIONS

    return{
        type: GET_CHMC,
        appn
    }
}

function removeCHMCAPPNAction(id){//REMOVE CHMC FUNDED ACTION

    return{
        type: REMOVE_CHMC,
        id
    }
}	

function getCHMDAPPNAction(appn){//CHMD FUNDED ACTIONS

    return{
        type: GET_CHMD,
        appn
    }
}

function removeCHMDAPPNAction(id){//REMOVE CHMD FUNDED ACTION

    return{
        type: REMOVE_CHMD,
        id
    }
}

function getMCAAPPNAction(appn){//MCA FUNDED ACTIONS

    return{
        type: GET_MCA,
        appn
    }
}	

function removeMCAAPPNAction(id){//REMOVE MCA FUNDED ACTION

    return{
        type: REMOVE_MCA,
        id
    }
}	

function getNGPAAPPNAction(appn){//NGPA FUNDED ACTIONS

    return{
        type: GET_NGPA,
        appn
    }
}	

function removeNGPAAPPNAction(id){//REMOVE NGPA FUNDED ACTION

    return{
        type: REMOVE_NGPA,
        id
    }
}	

function getOMAAPPNAction(appn){//OMA FUNDED ACTIONS

    return{
        type: GET_OMA,
        appn
    }
}	

function removeOMAAPPNAction(id){//REMOVE OMA FUNDED ACTION

    return{
        type: REMOVE_OMA,
        id
    }
}	

function getOMNGAPPNAction(appn){//OMNG FUNDED ACTIONS

    return{
        type: GET_OMNG,
        appn
    }
}	

function removeOMNGAPPNAction(id){//REMOVE OMNG FUNDED ACTION

    return{
        type: REMOVE_OMNG,
        id
    }
}	

function getOMARAPPNAction(appn){//OMAR FUNDED ACTIONS

    return{
        type: GET_OMAR,
        appn
    }
}	

function removeOMARAPPNAction(id){//REMOVE OMAR FUNDED ACTION

    return{
        type: REMOVE_OMAR,
        id
    }
}	

function getRDTAAPPNAction(appn){//RDTA FUNDED ACTIONS

    return{
        type: GET_RDTA,
        appn
    }
}	

function removeRDTAAPPNAction(id){//REMOVE RDTA FUNDED ACTION

    return{
        type: REMOVE_RDTA,
        id
    }
}	

function getRPAAPPNAction(appn){//RPA FUNDED ACTIONS

    return{
        type: GET_RPA,
        appn
    }
}

function removeRPAAPPNAction(id){//REMOVE RPA FUNDED ACTION

    return{
        type: REMOVE_RPA,
        id
    }
}	

function getWEDGAPPNAction(appn){//WEDG FUNDED ACTIONS

    return{
        type: GET_WEDG,
        appn
    }
}	

function removeWEDGAPPNAction(id){//REMOVE WEDG FUNDED ACTION

    return{
        type: REMOVE_WEDG,
        id
    }
}


function getOTHERFYAction(appn){//OTHER FYs

    return{
        type: GET_OTHER_FYs,
        appn
    }
}

		//Get AWCF Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getAWCFAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AWCF",
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
		store.dispatch(getAWCFAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AWCF",
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
        
        //store.dispatch(removeAWCFAPPNAction(1))

        //Get CHMC Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getCHMCAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMC",
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
		store.dispatch(getCHMCAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMC",
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
        //store.dispatch(removeCHMCAPPNAction(1))

        //Get CHMD Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getCHMDAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMD",
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
		store.dispatch(getCHMDAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMD",
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
        //store.dispatch(removeCHMDAPPNAction(1))

        //Get MCA Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getMCAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MCA",
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
		
		store.dispatch(getMCAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MCA",
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
        //store.dispatch(removeMCAAPPNAction(1))

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
        //store.dispatch(removeNGPAAPPNAction(1))

        //Get OMA Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMA",
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
		store.dispatch(getOMAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMA",
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
        //store.dispatch(removeOMAAPPNAction(1))

        //Get OMNG Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMNGAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMNG",
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
		store.dispatch(getOMNGAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMNG",
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
        //store.dispatch(removeOMNGAPPNAction(1))

        //Get OMAR Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMARAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMAR",
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
		store.dispatch(getOMARAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMAR",
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
        //store.dispatch(removeOMARAPPNAction(1))

        //Get RDTA Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getRDTAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTA",
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
		store.dispatch(getRDTAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTA",
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
        //store.dispatch(removeRDTAAPPNAction(1))

        //Get RPA Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getRPAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RPA",
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
		store.dispatch(getRPAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RPA",
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
        //store.dispatch(removeRPAAPPNAction(1))

        //Get WEDG Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getWEDGAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WEDG",
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
		store.dispatch(getWEDGAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WEDG",
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
        //store.dispatch(removeWEDGAPPNAction(1))

        //Get OTHER FUNDED FY 
		store.dispatch(getOTHERFYAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OTHER",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		store.dispatch(getOTHERFYAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OTHER",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))




























