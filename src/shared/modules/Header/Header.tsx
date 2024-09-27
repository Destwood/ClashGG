import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import logo from 'assets/logo.webp';
import { ErrorMessage, Field, Formik, FormikHelpers } from 'formik';
import { Button, Input, LogInForm, Modal, SignUpForm } from 'shared/components';
import { AuthButtons } from 'shared/components/AuthButtons';
import { useAppDispatch } from 'store/hooks';
import { togglePopup } from 'store/Modal';
import AuthModalOptions from 'utils/constants/AuthModalOptions';
import { logInScheme, signUpScheme } from 'utils/schemas';
import style from './Header.module.scss';

interface authFormValues {
	email: string;
	password: string;
	username?: string;
	confirmPassword?: string;
}

const Header = () => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const [isLogin, setIsLogin] = useState<boolean>(true);
	const [searchValue, setSearchValue] = useState<string>('');
	const initLogInValues: authFormValues = { email: '', password: '' };
	const initSignUpValues: authFormValues = {
		email: '',
		username: '',
		password: '',
		confirmPassword: '',
	};

	const handleChange = (newValue: string) => {
		setSearchValue(newValue);
	};

	const handleAuthClick = (isLoginProps: boolean) => {
		setIsLogin(isLoginProps);
		// dispatch(setAuthType('logIn'));
		openPopup();
	};

	const openPopup = () => {
		dispatch(togglePopup());
	};

	// modal
	const handleSubmit = (values: authFormValues, actions: FormikHelpers<authFormValues>) => {
		alert(JSON.stringify(values, null, 2));
		actions.resetForm();
	};

	const handleClose = () => {
		console.log('handle');
	};

	return (
		<div className={style.header}>
			<div className="">
				<Link to="/">
					<img className={style.logo} src={logo} alt="logo" />
				</Link>
			</div>
			<div className="">
				<Input value={searchValue} onChange={handleChange} placeholder="Search..." type="outlined" />
			</div>
			<div className="">
				<div className={style.authButtons}>
					<Button type="contained" onClick={() => handleAuthClick(true)}>
						{t('auth.login.title')}
					</Button>
					<Button type="filled" onClick={() => handleAuthClick(false)}>
						{t('auth.signUp.title')}
					</Button>
				</div>
			</div>
			{/* modal here will have childs */}
			<Modal
				initialValues={isLogin ? initLogInValues : initSignUpValues}
				title={isLogin ? t('auth.login.title') : t('auth.signUp.title')}
				subtitle={isLogin ? t('auth.login.alreadyHaveAccount') : t('auth.signUp.dontHaveAccount')}
				onClose={handleClose}
				validationScheme={isLogin ? logInScheme : signUpScheme}
				onSubmit={handleSubmit}
			>
				<AuthButtons name="aaa" />

				<Divider variant="middle" />
				{isLogin ? <LogInForm /> : <SignUpForm />}
			</Modal>
		</div>
	);
};

export default Header;
