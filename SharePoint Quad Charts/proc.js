//proc.js
const GET_ACFT = 'GET_ACFT';  const REMOVE_ACFT = 'REMOVE_ACFT'; 
const GET_AMMO = 'GET_AMMO';  const REMOVE_AMMO = 'REMOVE_AMMO'; 
const GET_MSLS = 'GET_MSLS';  const REMOVE_MSLS = 'REMOVE_MSLS'; 
const GET_OPA =  'GET_OPA';   const REMOVE_OPA = 'REMOVE_OPA';   
const GET_WTCV = 'GET_WTCV';  const REMOVE_WTCV = 'REMOVE_WTCV'; 
const GET_PROC_FYs = 'GET_PROC_FYs';



function getACFTAPPNAction(appn){//ACFT FUNDED ACTIONS

    return{
        type: GET_ACFT,
        appn
    }
}



function removeACFTAPPNAction(id){//REMOVE ACFT FUNDED ACTION

    return{
        type: REMOVE_ACFT,
        id
    }
}	

function getAMMOAPPNAction(appn){//AMMO FUNDED ACTIONS

    return{
        type: GET_AMMO,
        appn
    }
}	

function removeAMMOAPPNAction(id){//REMOVE AMMO FUNDED ACTION

    return{
        type: REMOVE_AMMO,
        id
    }
}	

function getMSLSAPPNAction(appn){//MSLS FUNDED ACTIONS

    return{
        type: GET_MSLS,
        appn
    }
}	

function removeMSLSAPPNAction(id){//REMOVE MSLS FUNDED ACTION

    return{
        type: REMOVE_MSLS,
        id
    }
}	

function getOPAAPPNAction(appn){//OPA FUNDED ACTIONS

    return{
        type: GET_OPA,
        appn
    }
}	

function removeOPAAPPNAction(id){//REMOVE OPA FUNDED ACTION

    return{
        type: REMOVE_OPA,
        id
    }
}	

function getWTCVUFRAPPNAction(appn){//WTCV CRITICAL ACTIONS

    return{
        type: GET_WTCVUFR,
        appn
    }
}		
function removeWTCVAPPNAction(id){//REMOVE WTCV FUNDED ACTION

    return{
        type: REMOVE_WTCV,
        id
    }
}	

function getPROCFYAction(appn){//PROC FUNDED FYs

    return{
        type: GET_PROC_FYs,
        appn
    }
}	

		//Get ACFT Funded FY Vertical Data by Appropriation (PROC)
        store.dispatch(getACFTAPPNAction({ 
            id: 1,
            Portfolio: "Air Defense",
            BOS: "AD",
            APPN: "ACFT",
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
        store.dispatch(getACFTAPPNAction({ 
            id: 2,
            Portfolio: "Air Defense",
            BOS: "AD",
            APPN: "ACFT",
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

        //store.dispatch(removeACFTAPPNAction(1))

		//Get AMMO Funded FY Vertical Data by Appropriation (PROC)
		store.dispatch(getAMMOAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AMMO",
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
		store.dispatch(getAMMOAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AMMO",
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

        //store.dispatch(removeAMMOAPPNAction(1))

        
        //Get MSLS Funded FY Vertical Data by Appropriation (PROC)
		store.dispatch(getMSLSAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MSLS",
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
		store.dispatch(getMSLSAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MSLS",
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
        //store.dispatch(removeMSLSAPPNAction(1))

        
        
        //Get OPA Funded FY Vertical Data by Appropriation (PROC)
		store.dispatch(getOPAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OPA",
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
		store.dispatch(getOPAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OPA",
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
        //store.dispatch(removeOPAAPPNAction(1))

        
        //Get WTCV Funded FY Vertical Data by Appropriation (PROC)
		store.dispatch(getWTCVAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WTCV",
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
		store.dispatch(getWTCVAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WTCV",
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
        //store.dispatch(removeWTCVAPPNAction(1))

        
        //Get PROC FUNDED FY 
		store.dispatch(getPROCFYAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "PROC",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		
		store.dispatch(getPROCFYAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "PROC",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))








