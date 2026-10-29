import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Slices/customerSlices"
import CounterReducer from "./Slices/counterSlice"

export const store = configureStore({
    devTools:true,
    reducer: {
        customers: customerReducer,
        counter : CounterReducer,
    }
})