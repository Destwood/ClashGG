import { IUserInit } from 'types';
import { ChatEvents } from 'utils/enums/chat';

export class ChatServices {
	static socket: WebSocket | null = null;

	static connect(
		url: string,
		user: IUserInit,
		activeRoom: any,
		onMessage: (msg: any) => void,
		onClose: () => void,
		onError?: (error: Event) => void
	) {
		this.socket = new WebSocket(url);

		this.socket.onopen = () => {
			if (this.socket && this.socket.readyState === WebSocket.OPEN) {
				this.socket.send(
					JSON.stringify({
						event: ChatEvents.joinRoom,
						room: activeRoom,
						user: {
							username: user.username,
							id: user.id,
						},
					})
				);
			}
		};

		this.socket.onmessage = (event) => {
			const message = JSON.parse(event.data);
			onMessage(message);
		};

		this.socket.onclose = () => {
			if (onClose) onClose();
		};

		this.socket.onerror = (error) => {
			if (onError) onError(error);
		};
	}

	static sendMessage(data: any) {
		if (this.socket) {
			this.socket.send(JSON.stringify(data));
		}
	}

	static createNewRoom(roomName: any, userData: any) {
		if (this.socket) {
			const createRoomData = {
				event: ChatEvents.createPrivateRoom,
				room: roomName,
				user: userData,
			};
			this.socket.send(JSON.stringify(createRoomData));
		}
	}

	static deleteRoom(roomName: any) {
		if (this.socket) {
			const deleteRoomData = {
				event: ChatEvents.deletePrivateRoom,
				room: roomName,
			};
			this.socket.send(JSON.stringify(deleteRoomData));
		}
	}

	static addUserToRoom(room: string, userId: string) {
		if (this.socket) {
			const addUserData = {
				event: ChatEvents.addUserToPrivateRoom,
				room,
				userId,
			};
			this.socket.send(JSON.stringify(addUserData));
		}
	}

	static joinRoom(roomId: string, user: IUserInit, user2?: any) {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) {
			const message = {
				event: ChatEvents.joinRoom,
				room: roomId,
				user,
				user2,
			};
			this.socket.send(JSON.stringify(message));
		}
	}

	static leaveRoom(roomId: string, user: IUserInit) {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) {
			const message = {
				event: ChatEvents.removeUserFromPrivateRoom,
				roomId,
				user,
			};
			this.socket.send(JSON.stringify(message));
		}
	}

	static close() {
		if (this.socket) {
			this.socket.close();
			this.socket = null;
		}
	}
}
