import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {setIsLoading} from './isLoanding.slice'

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productsSlice = createSlice({
		name: 'products',
    initialState: [],
    reducers: {
      setProduct: (state, action) => {
        return action.payload
      }  
    }
})

export const getProductsThunk = () => dispatch => {
  dispatch(setIsLoading(true));
  axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then(res => dispatch(setProduct(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
} 

export const filterProductsThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
    .then(res => dispatch(setProduct(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
} 

export const filterNameThunk = (inputSearch) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}`)
    .then(res => dispatch(setProduct(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
}

export const { setProduct  } = productsSlice.actions;

export default productsSlice.reducer;