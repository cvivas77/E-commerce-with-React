import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoanding.slice';
;


// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const purchasesSlice = createSlice({
		name: 'purchases',
    initialState: [],
    reducers: {
      setPurchases: (state, action) => {
        return action.payload;
      }
    
    }
})

export const purchasesThunk = () => dispatch => {
  dispatch(setIsLoading(true));
  axios.get("https://e-commerce-api.academlo.tech/api/v1/purchases", getConfig())
    .then((res) => dispatch(setPurchases(res.data.data.purchases)))
    .finally(() => dispatch(setIsLoading(false)));
} 

export const { setPurchases  } = purchasesSlice.actions;

export default purchasesSlice.reducer;