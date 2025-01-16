import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean;
    typeOfModal?: "LogIn" | "SignUp" | null;
}

const initialState: ModalState = {
    isOpen: false,
    typeOfModal: null,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        togglePopup(state, action: PayloadAction<ModalState>) {
            state.isOpen = action.payload.isOpen
            state.typeOfModal = action.payload.typeOfModal
        },
    },
});

export const { togglePopup } = modalSlice.actions;
export default modalSlice.reducer;
export type State = ModalState;