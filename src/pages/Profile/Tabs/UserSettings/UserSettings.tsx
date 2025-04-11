import React from 'react';
import { useTranslation } from 'react-i18next';
import { getAuth } from 'firebase/auth';
import { Field, Form, Formik } from 'formik';
import { UserService } from 'services';
import { Button } from 'shared/components';
import { useAppSelector } from "shared/hooks";
import { selectUser } from "store/User";
import { IUserSettings } from 'types';
import { userScheme } from 'utils/schemas/profile';
import style from './index.module.scss';

const initialValues: IUserSettings = {
	username: '',
	lastName: '',
	email: '',
};

export const UserSettings: React.FC = () => {
	const { t } = useTranslation();
	const auth = getAuth();
	const userData = useAppSelector(selectUser);

	const handleSubmit = async (values: IUserSettings) => {
		await UserService.updateProfile(auth, values);
	};

	return (
		<div className={style.container}>
			<h2>{t('profile.userSettings')}</h2>
			<Formik initialValues={initialValues} validationSchema={userScheme} onSubmit={handleSubmit}>
				{({ touched, errors }) => (
					<Form className={style.form}>
						<div className={style.inputGroup}>
							<label htmlFor="username">{t('common.username')}</label>
							<Field
								id="username" name="username"
								placeholder={t('profile.enterUsername')}
								className={style.input}
							/>
							{touched.username && errors.username && <div className={style.error}>{errors.username}</div>}
							<span className={style.current}>{t('profile.prevValue')}: {userData.username}</span>
						</div>

						<div className={style.inputGroup}>
							<label htmlFor="firstName">{t('profile.firstName')}</label>
							<Field id="firstName" name="firstName" placeholder={t('profile.enterFirstName')} className={style.input}/>
							{touched.firstName && errors.firstName && <div className={style.error}>{errors.firstName}</div>}
							{userData.firstName &&
								<span className={style.current}>{t('profile.prevValue')}: {userData.firstName} </span>
							}
						</div>

						<div className={style.inputGroup}>
							<label htmlFor="lastName">{t('profile.lastName')}</label>
							<Field id="lastName" name="lastName" placeholder={t('profile.enterLastName')} className={style.input}/>
							{touched.lastName && errors.lastName && <div className={style.error}>{errors.lastName}</div>}
							{userData.lastName &&
								<span className={style.current}>{t('profile.prevValue')}: {userData.lastName} </span>
							}
						</div>

						<div className={style.inputGroup}>
							<label htmlFor="email">{t('profile.email')}</label>
							<Field id="email" name="email" type="email" placeholder={t('profile.enterEmail')} className={style.input}/>
							{touched.email && errors.email && <div className={style.error}>{errors.email}</div>}
							{userData.email &&
								<span className={style.current}>{t('profile.prevValue')}: {userData.email} </span>
							}
						</div>

						<Button isSubmit={true} type="outlined">{t('profile.saveChanges')}</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
