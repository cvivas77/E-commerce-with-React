import { configureStore } from '@reduxjs/toolkit'
import  isLoadingSlice  from './slice/isLoanding.slice'
import productsSlice from './slice/products.slice'
import  purchasesSlice  from './slice/purchases.slice'

export default configureStore({
  reducer: {
    products: productsSlice,
    isLoanding: isLoadingSlice,
    purchases: purchasesSlice
	}
})