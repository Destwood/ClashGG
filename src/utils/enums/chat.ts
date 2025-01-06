export enum ChatEvents {
	connect = 'connect',
	message = 'message',
	history = 'history',
	joinRoom = 'joinRoom',
	setUser = 'setUser',
	userList = 'userList',
	updateRoomList = 'updateRoomList',
	updateUserList = 'updateUserList',
	addUserToPrivateRoom = 'addUserToPrivateRoom',
	removeUserFromPrivateRoom = 'removeUserFromPrivateRoom',
	createPrivateRoom = 'createPrivateRoom',
	deletePrivateRoom = 'deletePrivateRoom',
	sendPrivateMessage = 'sendPrivateMessage',
	createPrivateMessageRoom = 'createPrivateMessageRoom',
	disconnect = 'disconnect',
}

export enum ChatHeaderToDisplay {
	rooms = 'rooms',
	users = 'users',
}

export enum RoomType {
	direct = 'direct',
	privateRoom = 'privateRoom',
}
