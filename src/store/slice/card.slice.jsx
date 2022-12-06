import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoanding.slice';
;


// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const cardSlice = createSlice({
		name: 'card',
    initialState: [],
    reducers: {
      setCard: (state, action) => {
        return action.payload;
      }
    
    }
})

export const getCardThunk = () => dispatch => {
  dispatch(setIsLoading(true));
  axios.get("https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
    .then((res) => dispatch(setCard(res.data.data.cart.products)))
    .finally(() => dispatch(setIsLoading(false)));
} 

export const createCardThunk = (product) => dispatch => {
  dispatch(setIsLoading(true));
  axios.post("https://e-commerce-api.academlo.tech/api/v1/cart", product, getConfig())
    .then(() => dispatch(getCardThunk()))
    .finally(() => dispatch(setIsLoading(false)));
} 

export const checkoutCardThunk = (product) => dispatch => {
  dispatch(setIsLoading(true));
  axios.post("https://e-commerce-api.academlo.tech/api/v1/purchases", {}, getConfig())
    .then(() => dispatch(setCard([])))
    .finally(() => dispatch(setIsLoading(false)));
} 

export const deleteProductThunk = (productId) => dispatch => {
  dispatch(setIsLoading(true));
  axios.delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${productId}`, getConfig())
    .then(() => dispatch(getCardThunk()))
    .finally(() => dispatch(setIsLoading(false)));
} 
export const { setCard  } = cardSlice.actions;

export default cardSlice.reducer;