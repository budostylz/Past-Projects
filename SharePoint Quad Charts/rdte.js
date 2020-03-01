//rdte.js
const GET_RDTE = 'GET_RDTE'; const REMOVE_RDTE = 'REMOVE_RDTE';
const GET_RDTE_FYs = 'GET_RDTE_FYs';


function getRDTEAPPNAction(appn){//RDTE FUNDED ACTIONS

    return{
        type: GET_RDTE,
        appn
    }
}		


function removeRDTEAPPNAction(id){//REMOVE RDTE FUNDED ACTION

    return{
        type: REMOVE_RDTE,
        id
    }
}	

function getRDTEFYAction(appn){//RDTE FUNDED FYs

    return{
        type: GET_RDTE_FYs,
        appn
    }
}


store.dispatch(getRDTEAPPNAction({ 
					
    id: 1,
    Portfolio: "Air Defense",
    BOS: "AD",
    APPN: "RDTE",
    Root: "Root1",
    BO:"Funded",
    FY19: [100, 200, 300, 400],
    FY20: [100, 200, 300, 400],
    FY21: [100, 200, 300, 400],
    FY22: [100, 200, 300, 400],
    FY23: [100, 200, 300, 400],
    FY24: [100, 200, 300, 400],
    FY25: [100, 200, 300, 400],
    POM: 5000,

        


}))	
store.dispatch(getRDTEAPPNAction({ 
            
    id: 2,
    Portfolio: "Air Defense",
    BOS: "AD",
    APPN: "RDTE",
    Root: "Root1",
    BO:"Funded",
    FY19: [100, 200, 300, 400],
    FY20: [100, 200, 300, 400],
    FY21: [100, 200, 300, 400],
    FY22: [100, 200, 300, 400],
    FY23: [100, 200, 300, 400],
    FY24: [100, 200, 300, 400],
    FY25: [100, 200, 300, 400],
    POM: 5000,



}))


store.dispatch(getRDTEFYAction({ 
    id: 1,
    Portfolio: "Air Defense",
    BOS: "AD",
    APPN: "RDTE",
    FY19: [100],
    FY20: [200],
    FY21: [300],
    FY22: [400],
    FY23: [500],
    FY24: [600],
    FY25: [700],
    POM: 2800
}))	
store.dispatch(getRDTEFYAction({ 
    id: 2,
    Portfolio: "Air Defense",
    BOS: "AD",
    APPN: "RDTE",
    FY19: [100],
    FY20: [200],
    FY21: [300],
    FY22: [400],
    FY23: [500],
    FY24: [600],
    FY25: [700],
    POM: 2800
}))



//store.dispatch(removeRDTEAPPNAction(1))

