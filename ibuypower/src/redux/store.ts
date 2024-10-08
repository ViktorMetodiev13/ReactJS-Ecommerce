import { configureStore } from "@reduxjs/toolkit";
import gamingPCsSlice from "./productsSlices/gamingPCsSlice";
import gamingLaptopsSlice from "./productsSlices/gamingLaptopsSlice";

export const store = configureStore({
    reducer: {
        gamingPCs: gamingPCsSlice,
        gamingLaptops: gamingLaptopsSlice,
        // authentication: auth
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch