import { RootState } from '../index';

export const selectChatRooms = (state: RootState) => state.roomList;
