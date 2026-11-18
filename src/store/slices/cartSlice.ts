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
            const stored = localStorage.getItem("Products");
            const productsLocal = stored && JSON.parse(stored);
            if(!productsLocal.id) {
                state.id = 1;
                state.products.push(action.payload);
                localStorage.setItem("Products", JSON.stringify(state));
            }
            else {
                const productsJSON = JSON.parse(stored!);
                const existedProduct = productsJSON.products.find((p:products) => p.id === action.payload.id);

                if (existedProduct) {
                    existedProduct.qty += action.payload.qty;
                    console.log(existedProduct)
                } else {
                    productsJSON.products.push(action.payload);
                }

                localStorage.setItem("Products", JSON.stringify(productsJSON));
            }
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