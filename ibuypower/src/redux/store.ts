import { configureStore } from "@reduxjs/toolkit";
import gamingPCsSlice from "./gamingPCsSlice";
import gamingLaptopsSlice from "./gamingLaptopsSlice";

export const store = configureStore({
    reducer: {
        gamingPCs: gamingPCsSlice,
        gamingLaptops: gamingLaptopsSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch