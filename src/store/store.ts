import { configureStore } from "@reduxjs/toolkit";

import AuthModalSlice from "./slices/AuthModalSlice";

const store = configureStore({
    reducer: {
        authModal: AuthModalSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDisppatch = typeof store.dispatch;