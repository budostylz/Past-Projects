//deepdive.js

const GET_KEY4_DEEPDIVE = 'GET_KEY4_DEEPDIVE';
const GET_KEY5_DEEPDIVE = 'GET_KEY5_DEEPDIVE';

function getDeepDiveKey4Action(key4){//DeepDive Key4 Actions

    return{
        type: GET_KEY4_DEEPDIVE,
        key4
    }
}

function getDeepDiveKey5Action(key5){//DeepDive Key5 Actions

    return{
        type: GET_KEY5_DEEPDIVE,
        key5
    }
}

//Key 4 Deep Dive
store.dispatch(getDeepDiveKey4Action({ 
					
    id: 1,
    Portfolio: "Air Defense",
    BOS: "AD",
    Root: "Root1",
    FY19: [100],
    FY20: [100],
    FY21: [100],
    FY22: [100],
    FY23: [100],
    FY24: [100],
    FY25: [100],
    POM: 5000,

        


}))	
store.dispatch(getDeepDiveKey4Action({ 
            
    id: 2,
    Portfolio: "Air Defense",
    BOS: "AD",
    Root: "Root2",
    FY19: [100],
    FY20: [100],
    FY21: [100],
    FY22: [100],
    FY23: [100],
    FY24: [100],
    FY25: [100],
    POM: 5000,	

}))

//Key 5 Deep Dive
store.dispatch(getDeepDiveKey5Action({ 
					
    id: 1,
    Portfolio: "Air Defense",
    BOS: "AD",
    Root: "Root1",
    FY19: [100],
    FY20: [100],
    FY21: [100],
    FY22: [100],
    FY23: [100],
    FY24: [100],
    FY25: [100],
    POM: 5000,


}))	
store.dispatch(getDeepDiveKey5Action({ 
            
    id: 2,
    Portfolio: "Air Defense",
    BOS: "AD",
    Root: "Root2",
    FY19: [100],
    FY20: [100],
    FY21: [100],
    FY22: [100],
    FY23: [100],
    FY24: [100],
    FY25: [100],
    POM: 5000,	

}))




