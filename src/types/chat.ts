import { RoomType } from 'utils/enums/chat';
import { IUserInit } from './user';

export interface IRoom {
	id: string;
	name: string;
	type: RoomType;
	activeUsers: IRoomUser[];
	allUsers: IRoomUser[];
	messages: IMessage[];
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
