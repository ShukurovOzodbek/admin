import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunk";


export const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: 'idle'
    },
    reducers: {
        getProduct(state, action) {
            state.data = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success"
                state.data = action.payload
            }) 
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "error"
            })
    }

})
export const { getProduct } = productSlice.actions
export default productSlice.reducer 
