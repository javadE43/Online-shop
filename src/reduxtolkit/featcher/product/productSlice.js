import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState={
    items:[],
    status:null
}


export const productsFatch=createAsyncThunk(
    "products/productsFatch",
    async ()=>{
      const responce= await axios.get('https://fakestoreapi.com/products')
         return responce?.data;
    }

);


const productSlice=createSlice({

    name:'products',
    initialState,
    // reducers:{},
    extraReducers:{
        [productsFatch.pending]:(state)=>{
          state.status='pending'
        },
        [productsFatch.fulfilled]:(state,action)=>{
            state.items=action.payload;
            state.status='success'
        

        },
        [productsFatch.rejected]:(state)=>{
            state.status='rejected'
        }
    }
});


export default productSlice.reducer;