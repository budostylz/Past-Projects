//procufr.js

const GET_ACFTUFR = 'GET_ACFTUFR'; const REMOVE_ACFTUFR = 'REMOVE_ACFTUFR';
const GET_AMMOUFR = 'GET_AMMOUFR'; const REMOVE_AMMOUFR = 'REMOVE_AMMOUFR';
const GET_MSLSUFR = 'GET_MSLSUFR'; const REMOVE_MSLSUFR = 'REMOVE_MSLSUFR';
const GET_OPAUFR =  'GET_OPAUFR';  const REMOVE_OPAUFR = 'REMOVE_OPAUFR';
const GET_WTCVUFR = 'GET_WTCVUFR'; const REMOVE_WTCVUFR = 'REMOVE_WTCVUFR';
const GET_PROCUFR_FYs = 'GET_PROCUFR_FYs';

function getACFTUFRAPPNAction(appn){//ACFT CRITICAL ACTIONS

    return{
        type: GET_ACFTUFR,
        appn
    }
}	

function removeACFTUFRAPPNAction(id){//REMOVE ACFT CRITICAL ACTION

    return{
        type: REMOVE_ACFTUFR,
        id
    }
}

function getAMMOUFRAPPNAction(appn){//AMMO CRITICAL ACTIONS

    return{
        type: GET_AMMOUFR,
        appn
    }
}	

function removeAMMOUFRAPPNAction(id){//REMOVE AMMO FUNDED ACTION

    return{
        type: REMOVE_AMMOUFR,
        id
    }
}	

function getMSLSUFRAPPNAction(appn){//MSLS CRITICAL ACTIONS

    return{
        type: GET_MSLSUFR,
        appn
    }
}		

function removeMSLSUFRAPPNAction(id){//REMOVE MSLS FUNDED ACTION

    return{
        type: REMOVE_MSLSUFR,
        id
    }
}	

function getOPAUFRAPPNAction(appn){//OPA CRITICAL ACTIONS

    return{
        type: GET_OPAUFR,
        appn
    }
}	

function removeOPAAPPNAction(id){//REMOVE OPA FUNDED ACTION

    return{
        type: REMOVE_OPAUFR,
        id
    }
}	

function getWTCVUFRAPPNAction(appn){//WTCV CRITICAL ACTIONS

    return{
        type: GET_WTCVUFR,
        appn
    }
}	

function removeWTCVUFRAPPNAction(id){//REMOVE WTCV CRITICAL ACTION

    return{
        type: REMOVE_WTCVUFR,
        id
    }
}

function getPROCFYUFRAction(appn){//PROC CRITICAL FYs

    return{
        type: GET_PROCUFR_FYs,
        appn
    }
}

		//Get ACFT Critical FY Vertical Data by Appropriation (PROC)
		store.dispatch(getACFTUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "ACFT",
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
		store.dispatch(getACFTUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "ACFT",
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
        //store.dispatch(removeACFTUFRAPPNAction(1))

        //Get AMMO Critical FY Vertical Data by Appropriation (PROC)
		store.dispatch(getAMMOUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AMMO",
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
		store.dispatch(getAMMOUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AMMO",
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
       //store.dispatch(removeAMMOUFRAPPNAction(1))

       	//Get MSLS Critical FY Vertical Data by Appropriation (PROC)
		store.dispatch(getMSLSUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MSLS",
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
		store.dispatch(getMSLSUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MSLS",
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
        //store.dispatch(removeMSLSUFRAPPNAction(1))

        //Get OPA Critical FY Vertical Data by Appropriation (PROC)
		store.dispatch(getOPAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OPA",
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
		store.dispatch(getOPAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OPA",
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
        //store.dispatch(removeOPAAPPNAction(1))

        //Get WTCV Critical FY Vertical Data by Appropriation (PROC)
		store.dispatch(getWTCVUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WTCV",
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
		store.dispatch(getWTCVUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WTCV",
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
        //store.dispatch(removeWTCVUFRAPPNAction(1))
























