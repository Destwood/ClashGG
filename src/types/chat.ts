import { RoomType } from '../utils/enums/chat';
import { IUserInit } from './user';

export interface IRoom {
	name: string;
	creator: IUserInit | null;
	messages: string[];
	users: IUserInit[] | null;
	type: RoomType;
}

export interface IRoomUser {
	id: string;
	username: string;
}

export interface IMessage {
	event: string;
	id: number;
	user: IUserInit;
	message: string;
	date: string;
	room: string;
}
