import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import {cartReducer} from './reducers/cartreducer';

const initalState={};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer, 
    cart : cartReducer
})

const composeEhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(reducer,initalState,composeEhancer(applyMiddleware(thunk)));

export default store;