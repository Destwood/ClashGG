import * as yup from 'yup';
import { ErrorMessages } from 'utils/enums/error';

export const userScheme = yup.object().shape({
	id: yup.string(),
	username: yup.string().min(3, ErrorMessages.UsernameMinLength).max(20, ErrorMessages.UsernameMaxLength),
	email: yup.string().email(ErrorMessages.InvalidEmail),
	firstName: yup.string().max(50, ErrorMessages.FirstNameMaxLength),
	lastName: yup.string().max(50, ErrorMessages.LastNameMaxLength),
	profilePicture: yup.string().url(ErrorMessages.InvalidUrl).nullable(),
	games: yup.array().of(
		yup.object().shape({
			name: yup.string(),
			url: yup.string().url(ErrorMessages.InvalidUrl),
		})
	),
	settings: yup.object().shape({
		language: yup.string().oneOf(['English', 'Ukrainian'], ErrorMessages.InvalidLanguage),
		theme: yup.string().oneOf(['Light', 'Dark'], ErrorMessages.InvalidTheme),
	}),
	createdAt: yup.string(),
	updatedAt: yup.string(),
	lastLogin: yup.string(),
});
