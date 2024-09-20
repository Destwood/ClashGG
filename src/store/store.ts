import { configureStore } from "@reduxjs/toolkit";
import AuthModalSlice from "./slices/AuthModalSlice";
import Modal from "./slices/ModalSlice";

const store = configureStore({
    reducer: {
        modal: Modal,
        authModal: AuthModalSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
