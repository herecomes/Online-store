import { createSlice } from "@reduxjs/toolkit";

interface products {
    id: number,
    qty: number
};

interface Cart {
    id: number,
    products: products[]
};

const initialState: Cart = {
    id: 0,
    products: []
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: initialState,
    reducers: {
        addCart: (state, action) => {
            if(!state.products.length) {
                state.id = 1;
                state.products = action.payload;
            } else {
                action.payload.forEach((el: products) => {
                    const existedProduct = state.products.find(pr => pr.id === el.id);
                    if(existedProduct) {
                        existedProduct.qty += el.qty;
                    } else {
                        state.products.push(el);
                    }
                });
            }
            const productsJSON = JSON.stringify(state);
            localStorage.setItem("Products", productsJSON);
            console.log(state.products)
        },
        removeCart: (state, action) => {
            if(state.products.length) {
                action.payload.forEach((el: products) => {
                    state.products = state.products.filter(pr => pr.id !== el.id);
                });
            }
        }
    }
})

export const {addCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;