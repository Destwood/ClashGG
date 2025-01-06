import { RoomType } from '../utils/enums/chat';
import { IUserInit } from './user';

export interface IRoom {
	name: string;
	creator: IUserInit | null;
	messages: string[];
	activeUsers: { user: { id: string; username: string }; ws: WebSocket }[];
	allUsers: { user: { id: string; username: string }; ws: WebSocket }[];
	type: RoomType;
}
export interface IRoomUser {
	id: string;
	username: string;
}

export interface IMessage {
	event: string;
	id: string;
	user: IUserInit;
	message: string;
	date: string;
	roomId: string;
}
