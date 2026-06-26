import { createStore } from "redux";


const INITIAL_VALUE = {
    counter :5
}

const counterReducer = (store = INITIAL_VALUE, action) =>{

    if(action.type === 'INCREMENT') {
        return {counter : store.counter + 1}
    } else if(action.type === 'DECREMENT') {
        return {counter : store.counter - 1}
    }else if(action.type === 'ADD') {
        return {counter : store.counter + Number(action.payload.num)}
    }else if(action.type === 'Substract') {
        return {counter : store.counter - Number(action.payload.num)}
    }
    return store;
}

const counterStore = createStore(counterReducer);


export default counterStore;