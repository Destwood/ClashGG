import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    activeGame: "",
}

const modalSlice = createSlice({
    name: "gameState",
    initialState,
    reducers: {
        setActiveGame(state, action: PayloadAction<string>) {
            state.activeGame = action.payload;
        },
    },
});

export const { setActiveGame } = modalSlice.actions;
export default modalSlice.reducer;
