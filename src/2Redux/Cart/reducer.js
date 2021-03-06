import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
            
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)
        },
        plusItemProduct: (state,action)=>{

        }
        
    }
})

export const { setItemInCart, deleteItemOnCart } = cartSlice.actions;
export default cartSlice.reducer;