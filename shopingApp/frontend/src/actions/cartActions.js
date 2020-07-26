import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartconstants";
import axios from 'axios';
const { default: Axios } = require("axios")

const addToCart = (productId,qty) => async (dispatch) => {
    try{
        const {data} = await axios.get("/api/product/"+productId);
        dispatch({type: ADD_TO_CART, payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countinStocks:data.countinStocks,
            qty:qty
        }})
        
    }catch(e){

    }
}

const removefromcart = (productId) => async (dispatch) => {
    try{
        const {data} = await axios.get("/api/product/"+productId);
        dispatch({type: REMOVE_FROM_CART, payload:data._id})
        
    }catch(e){

    }
}

export {addToCart , removefromcart}