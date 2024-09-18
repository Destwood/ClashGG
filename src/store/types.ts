import { State as AuthModalState } from "./slices/AuthModalSlice";

export interface RootState {
    authModal: AuthModalState;
}