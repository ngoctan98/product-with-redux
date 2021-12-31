import { combineReducers, createStore } from 'redux';
import  ProductReducers  from '../Reducer';


const reducer = combineReducers({
    product:ProductReducers
})
const store = createStore(reducer)
export default store;