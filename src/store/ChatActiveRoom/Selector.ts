import { RootState } from '../index';

export const selectActiveRoom = (state: RootState) => state.activeRoom.activeRoom;
