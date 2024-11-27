import { IAuth } from 'types';

const Auth = {
	tokenKey: 'authToken',
	logInValues: {
		email: '',
		password: '',
	} as IAuth,
	signUpValues: {
		email: '',
		username: '',
		password: '',
		confirmPassword: '',
	} as IAuth,
};

export const { tokenKey, logInValues, signUpValues } = Auth;
