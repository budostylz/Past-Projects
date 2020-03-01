function clearStorage(){

    try{

        if (typeof(Storage) !== "undefined") {

            sessionStorage.clear();



        } else {
            console.log('storage not supported');
        }

    }
    catch(e){
        console.log('storage.js : clearStorage')
        console.log(e)
    }
}

function setStorage(store){

    try{

        if (typeof(Storage) !== "undefined") {

            
            var obj = JSON.stringify(store);
            sessionStorage.setItem('Store', obj);



        } else {
            console.log('storage not supported');
        }

    }
    catch(e){
        console.log('storage.js : initStorage')
        console.log(e)
    }

}

function getStorage(){

    try{

        if (typeof(Storage) !== "undefined") {
            var data = sessionStorage.getItem('Store');
            var obj = JSON.parse(data);
            return obj;



        } else {
            console.log('storage not supported');
        }

    }
    catch(e){
        console.log('storage.js : getStorage')
        console.log(e)
    }

}