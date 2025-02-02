import WebSocket from 'ws';
import { ChatEvents, RoomType } from 'utils/enums/chat';
import { IUserInit } from './user';

export interface IRoom {
	id?: string;
	name: string;
	type?: RoomType;
	activeUsers?: IRoomUser[];
	users?: IRoomUser[];
	creator?: IUserInit;
	allUsers?: IRoomUser[];
	messages?: IMessage[];
}

export interface IRoomUser {
	id: string;
	username: string;
	userData?: IUserInit;
}

export interface IMessage {
	event: string;
	id: string;
	user: IUserInit;
	message: string;
	date: string;
	roomId: string;
}

export interface IRespondMessage {
	users?: IRoomUser[];
	allUsers?: IRoomUser[];
	rooms?: IRoom[];
	errorMsg?: string;
	event?: ChatEvents;
	messages?: IMessage[];
}

export interface IRoomUserData {
	userData: IRoomUser;
	ws: WebSocket;
}
