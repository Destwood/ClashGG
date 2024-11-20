import { IAuth } from 'types';

const Auth = {
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

export const { logInValues, signUpValues } = Auth;
