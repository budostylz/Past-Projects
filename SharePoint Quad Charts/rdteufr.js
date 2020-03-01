//redte.ufr

const GET_RDTEUFR = 'GET_RDTEUFR';
const REMOVE_RDTEUFR = 'REMOVE_RDTEUFR';
const GET_RDTEUFR_FYs = 'GET_RDTEUFR_FYs';

function getRDTEFYUFRAction(appn){//RDTE CRITICAL FYs

    return{
        type: GET_RDTEUFR_FYs,
        appn
    }
}	

function removeRDTEUFRAPPNAction(id){//REMOVE RDTE CRITICAL ACTION

    return{
        type: REMOVE_RDTEUFR,
        id
    }
}

function getRDTEFYUFRAction(appn){//RDTE CRITICAL FYs

    return{
        type: GET_RDTEUFR_FYs,
        appn
    }
}	

//Get RDTE CRITICAL FY 
store.dispatch(getRDTEFYUFRAction({ 
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
store.dispatch(getRDTEFYUFRAction({ 
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

//store.dispatch(removeRDTEUFRAPPNAction(1))

//Get RDTE CRITICAL FY 
store.dispatch(getRDTEFYUFRAction({ 
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
store.dispatch(getRDTEFYUFRAction({ 
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

