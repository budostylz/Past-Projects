//total.js
const GET_TOTAL_FYs = 'GET_TOTAL_FYs';

function getTOTALFYAction(appn){//TOTAL FYs

    return{
        type: GET_TOTAL_FYs,
        appn
    }
}

//Get TOTAL FUNDED FY
store.dispatch(getTOTALFYAction({ 
    id: 1,
    Portfolio: "Air Defense",
    BOS: "AD",
    FY19: [100],
    FY20: [200],
    FY21: [300],
    FY22: [400],
    FY23: [500],
    FY24: [600],
    FY25: [700],
    POM: 2800
}))
store.dispatch(getTOTALFYAction({ 
    id: 2,
    Portfolio: "Air Defense",
    BOS: "AD",
    FY19: [100],
    FY20: [200],
    FY21: [300],
    FY22: [400],
    FY23: [500],
    FY24: [600],
    FY25: [700],
    POM: 2800
}))

