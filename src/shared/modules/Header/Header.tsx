import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.webp';
import { Button, Input, Modal } from 'shared/components';
import { useAppDispatch } from 'shared/hooks';
import { togglePopup } from 'store/Modal';
import AuthModalOptions from 'utils/constants/AuthModalOptions';
import style from './Header.module.scss';

const Header = () => {
	const dispatch = useAppDispatch();
	const [isLogin, setIsLogin] = useState<boolean>(true);
	const [searchValue, setSearchValue] = useState<string>('');
	// const textData = AuthModalOptions;

	const handleChange = (newValue: string) => {
		setSearchValue(newValue);
	};

	const handleLoginClick = () => {
		setIsLogin(true);
		// dispatch(setAuthType('logIn'));
		openPopup();
	};
	const handleSignUpClick = () => {
		setIsLogin(false);
		// dispatch(setAuthType('signUp'));
		openPopup();
	};

	const openPopup = () => {
		dispatch(togglePopup());
	};

	// modal
	const handleSubmit = () => {
		console.log('handleSubmit');
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
				<Button type="contained" onClick={() => handleLoginClick()}>
					Log In
				</Button>
				<Button type="filled" onClick={() => handleSignUpClick()}>
					Sign Up
				</Button>
			</div>

			{/* modal here will have childs */}
			{isLogin ? (
				<Modal
					title={AuthModalOptions.logIn.title}
					subtitle={AuthModalOptions.logIn.subTitle}
					onClose={handleClose}
					onSubmit={handleSubmit}
				/>
			) : (
				<Modal
					title={AuthModalOptions.signUp.title}
					subtitle={AuthModalOptions.signUp.subTitle}
					onClose={handleClose}
					onSubmit={handleSubmit}
				/>
			)}

			{/*	Auth modal is not used, saved just to move styles later*/}
		</div>
	);
};

export default Header;
