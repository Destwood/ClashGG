export interface IAuth {
	tokenKey: string;
	logInValues: IAuthValues;
	signUpValues: IAuthValues;
}

export interface IAuthValues {
	email: string;
	username?: string;
	password: string;
	confirmPassword?: string;
}
