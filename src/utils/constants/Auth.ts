import { IAuth } from 'types';

const Auth: IAuth = {
	tokenKey: 'authToken',
	logInValues: {
		email: '',
		password: '',
	},
	signUpValues: {
		email: '',
		username: '',
		password: '',
		confirmPassword: '',
	},
};

export const { tokenKey, logInValues, signUpValues } = Auth;
