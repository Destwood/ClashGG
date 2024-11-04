import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from 'assets/logo.webp';
import { FormikHelpers } from 'formik';
import { Auth } from 'services';
import { Button, Input, LogInForm, Modal, SignUpForm } from 'shared/components';
import { AuthButtons } from 'shared/components/AuthButtons';
import { headerStyle } from 'shared/theme/components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { togglePopup } from 'store/Modal';
import { clearUser, selectUser, setUser } from 'store/User';
import { IAuth } from 'types/auth';
import { logInScheme, signUpScheme } from 'utils/schemas';
import style from './Header.module.scss';

const Header = () => {
	const theme = useTheme();
	const headerStyles = headerStyle(theme);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const userFromStore = useAppSelector(selectUser);
	const [isLogin, setIsLogin] = useState<boolean>(true);
	const [searchValue, setSearchValue] = useState<string>('');
	const initLogInValues: IAuth = { email: '', password: '' };
	const initSignUpValues: IAuth = {
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
		openPopup();
	};

	const openPopup = () => {
		dispatch(togglePopup());
	};

	// modal
	const handleSubmit = async (values: IAuth) => {
		const { email, password } = values;
		let userCredentials;

		try {
			if (isLogin) {
				userCredentials = await Auth.login(email, password);
			} else {
				userCredentials = await Auth.signUp(email, password);
			}
			dispatch(setUser({ token: userCredentials.user.uid, username: userCredentials.user.email }));
			dispatch(togglePopup());
		} catch (error) {
			console.log(error);
		}
	};

	const handleClose = () => {
		console.log('handle');
	};

	const handleLogout = () => {
		dispatch(clearUser());
	};

	return (
		<Box className={style.header} sx={headerStyles.root}>
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
					{userFromStore.token ? (
						<Button type="outlined" onClick={handleLogout}>
							{t('auth.logout.title')}
						</Button>
					) : (
						<>
							<Button type="contained" onClick={() => handleAuthClick(true)}>
								{t('auth.login.title')}
							</Button>
							<Button type="contained" onClick={() => handleAuthClick(false)}>
								{t('auth.signUp.title')}
							</Button>
						</>
					)}
				</div>
			</div>

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
		</Box>
	);
};

export default Header;
