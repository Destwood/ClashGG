import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from 'assets/logo.webp';
import { getAuth, signOut } from 'firebase/auth';
import { Auth, UserService } from 'services';
import { Button, Input, LogInForm, Modal, SignUpForm } from 'shared/components';
import { AuthButtons } from 'shared/components/AuthButtons';
import { useAppDispatch, useAppSelector } from 'shared/hooks/store';
import { headerStyle } from 'shared/theme/components';
import { togglePopup } from 'store/Modal';
import { clearUser, selectUser } from 'store/User';
import { IAuth, IAuthValues } from 'types/auth';
import { initInfo, logInValues, signUpValues, tokenKey } from 'utils/constants';
import { logInScheme, signUpScheme } from 'utils/schemas/auth';
import style from './Header.module.scss';

const Header = () => {
	const auth = getAuth();
	const theme = useTheme();
	const headerStyles = headerStyle(theme);

	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const userData = useAppSelector(selectUser);
	const [isLogin, setIsLogin] = useState<boolean>(true);
	const [searchValue, setSearchValue] = useState<string>('');

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
	const handleSubmit = async ({ username, email, password }: IAuthValues) => {
		try {
			const userCredentials = isLogin ? await Auth.login(email, password) : await Auth.signUp(email, password);
			const { user } = userCredentials;

			const token = await user.getIdToken();
			const { uid } = user;

			localStorage.setItem(tokenKey, token);

			if (!isLogin) {
				await UserService.createUserProfile(uid, {
					...initInfo,
					username,
					email,
					id: uid,
				});
			}

			dispatch(togglePopup());
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogout = async () => {
		try {
			await signOut(auth);
			dispatch(clearUser());
			localStorage.removeItem(tokenKey);
		} catch (error) {
			console.error('Error during logout:', error);
		}
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
					{userData.id ? (
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
				initialValues={isLogin ? logInValues : signUpValues}
				title={isLogin ? t('auth.login.title') : t('auth.signUp.title')}
				subtitle={isLogin ? t('auth.login.alreadyHaveAccount') : t('auth.signUp.dontHaveAccount')}
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
