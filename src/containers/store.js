import {configureStore} from '@reduxjs/toolkit';
import productReducer from './featcher/product/productSlice'
import {productsFatch} from './featcher/product/productSlice'
import { productsApi } from './featcher/producApi/productApi';
import cartReducer from './featcher/cart/cartslice'
import searchReducer from './featcher/searchbar/searchbar'

export const store=configureStore({

    reducer:{
        products:productReducer,
        [productsApi.reducerPath]:productsApi.reducer,
        cart:cartReducer,
        search:searchReducer
    },
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat(productsApi.middleware)
    )

});


// store.dispatch(productsFatch())



