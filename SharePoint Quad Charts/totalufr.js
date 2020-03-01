//totalufr.js

const GET_TOTALUFR_FYs = 'GET_TOTALUFR_FYs';

function getTOTALFYUFRAction(appn){//TOTAL CRITICAL FYs

    return{
        type: GET_TOTALUFR_FYs,
        appn
    }
}

//Get TOTAL CRITICAL FY
store.dispatch(getTOTALFYUFRAction({ 
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
store.dispatch(getTOTALFYUFRAction({ 
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

