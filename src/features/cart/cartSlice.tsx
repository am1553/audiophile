import { createSlice } from "@reduxjs/toolkit";

type CartState = {
    image: string,
    name: string,
    price:number,
    slug:string, 
    quantity: number,
    total: number
}[]

const initialState : CartState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return [...state, action.payload]
        },
        removeFromCart: (state, action) => {
            return []
        },
        removeAll: (state) => {
            return []
        },
        updateItem: (state, action) => {
            const newState = state.filter(item => item.slug !== action.payload.slug)
            return[...newState, action.payload]
        }
    }
})

export const {addToCart, removeFromCart, removeAll, updateItem} = cartSlice.actions

export default cartSlice.reducer