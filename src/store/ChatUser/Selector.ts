import { RootState } from '../index';

export const selectChatUsers = (state: RootState) => state.userList;
