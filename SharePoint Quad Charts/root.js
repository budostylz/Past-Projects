//root.js

const GET_ROOT = 'GET_ROOT'; 

function getRootAction(root){

    return{
        type: GET_ROOT,
        root
    }
}

store.dispatch(getRootAction({
		
    id: 1,
    Root : "Root Name",
    Portfolio: "Air Defense",
    BOS: "AD"
}))		
store.dispatch(getRootAction({

    id: 2,
    Root : "Root Name",
    Portfolio: "Air Defense",
    BOS: "AD"
}))


