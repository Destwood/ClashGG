import * as yup from 'yup';
import { ErrorMessages } from 'utils/enums/error';

const passwordRules = {
	uppercase: /[A-Z]/,
	lowercase: /[a-z]/,
	number: /\d/,
};

export const logInScheme = yup.object().shape({
	email: yup.string().email(ErrorMessages.InvalidEmail).required(ErrorMessages.EmailRequired),
	password: yup
		.string()
		.min(4, ErrorMessages.PasswordMinLength)
		.matches(passwordRules.uppercase, ErrorMessages.PasswordUppercase)
		.matches(passwordRules.lowercase, ErrorMessages.PasswordLowercase)
		.matches(passwordRules.number, ErrorMessages.PasswordNumber)
		.required(ErrorMessages.PasswordRequired),
});

export const signUpScheme = logInScheme.concat(
	yup.object().shape({
		username: yup
			.string()
			.min(3, ErrorMessages.UsernameMinLength)
			.max(20, ErrorMessages.UsernameMaxLength)
			.required(ErrorMessages.UsernameRequired),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], ErrorMessages.PasswordsMustMatch)
			.required(ErrorMessages.ConfirmPasswordRequired),
	})
);
