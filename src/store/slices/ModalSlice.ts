import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean
}

const initialState: ModalState = {
    isOpen: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        togglePopup(state, action: PayloadAction<ModalState>) {
            return {
                ...state,
                isOpen: action.payload.isOpen,
            }
        },
    },
});

export const { togglePopup } = modalSlice.actions;
export default modalSlice.reducer;
export type State = ModalState;
