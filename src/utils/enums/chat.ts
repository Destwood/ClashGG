export enum ChatEvents {
	connect = 'connect',
	message = 'message',
	error = 'error',
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
	allUsers = 'allUsers',
	none = 'none',
}

export enum RoomType {
	public = 'public',
	private = 'private',
	direct = 'direct',
}

export enum DefaultRoomNames {
	global = 'global',
}
