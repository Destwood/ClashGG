import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDisppatch, RootState } from "../../store/store";

export const useAppDispatch = () => useDispatch<AppDisppatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;