import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../app/cartItems";



const url = "https://course-api.com/react-useReducer-cart-project";

console.log(cartItems)
const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: true
}
// Using axios

// npm i axios
// export const getCartItems = createAsyncThunk('cart/getCartItems',async(name,thunkAPI)=>{
//    try{
//     const resp = await axios(url);
//     console.log(name)
//     console.log(thunkAPI)
//     console.log(thunkAPI.getState())
//     thunkAPI.dispath(OpenModel())
//     return resp.data
//    }catch(err){
//     console.log(err)
//     return thunkAPI.rejectWithValue("Somthing went wrong")
//    }
// });

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url).then(resp => resp.json()).catch((err) => console.log(err))
})


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((e) => e.id !== itemId)
        },
        increaseAmount: (state, { payload }) => {
            console.log(payload)
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem.amount = cartItem.amount + 1
        },
        decrieaseAmount: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);

            if (cartItem.amount > 1) {

                cartItem.amount = cartItem.amount - 1
            }
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading = true
        }).addCase(getCartItems.fulfilled, (state, action) => {
            console.log(action)
            state.isLoading = false;
            state.cartItems = action.payload;

        }).addCase(getCartItems.rejected,(state) => {
            state.isLoading = false
        })
    },
    // extraReducers: {
    //     [getCartItems.pending]: (state) => {
    //         state.isLoading = true
    //     },
    //     [getCartItems.fulfilled]: (state, action) => {
    //         console.log(action)
    //         state.isLoading = false;
    //         state.cartItems = action.payload;

    //     },
    //     [getCartItems.rejected]: (state) => {
    //         state.isLoading = false
    //     }
    // }

})

console.log(cartSlice);

export const { clearCart, removeItem, increaseAmount, decrieaseAmount, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;