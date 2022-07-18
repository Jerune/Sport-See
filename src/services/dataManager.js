import {store} from "../providers/StoreProvider"

async function getUserData(){
    const response = await fetch("https://calm-gorge-80201.herokuapp.com/user/12");
    const rawData  = await response.json();
    console.log(rawData)
    store.set({user : rawData.data})
}

export {
    getUserData
}