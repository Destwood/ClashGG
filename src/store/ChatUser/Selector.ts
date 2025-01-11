import { RootState } from '../index';

export const selectChatUsers = (state: RootState) => state.userList;
export const selectAllChatUsers = (state: RootState) => state.allChatUsers;
