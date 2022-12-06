import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './slice/card.slice'
import  isLoadingSlice  from './slice/isLoanding.slice'
import productsSlice from './slice/products.slice'
import  purchasesSlice  from './slice/purchases.slice'

export default configureStore({
  reducer: {
    products: productsSlice,
    isLoanding: isLoadingSlice,
    purchases: purchasesSlice,
    card: cardSlice
	}
})