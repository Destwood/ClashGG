
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    typeOfModal: "logIn" | "signUp";
}

const initialState: ModalState = {
    typeOfModal: "logIn",
}

const modalSlice = createSlice({
    name: "modalAuth",
    initialState,
    reducers: {
        setAuthType(state, action: PayloadAction<ModalState>) {
            return {
                ...state,
                typeOfModal: action.payload.typeOfModal,
            }
        },
    },
});

export const { setAuthType } = modalSlice.actions;
export default modalSlice.reducer;
export type State = ModalState;
