import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './SignUpForm.module.scss';

export const SignUpForm: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className={style.fieldContainer}>
				<label className={style.label} htmlFor="username">
					{t('common.username')}:
				</label>
				<Field type="text" name="username" placeholder={t('common.username')} />
				<ErrorMessage component="div" className={style.errorMsg} name="username" />
			</div>
			<div className={style.fieldContainer}>
				<label className={style.label} htmlFor="email">
					{t('common.email')}:
				</label>
				<Field type="text" name="email" placeholder={t('common.email')} />
				<ErrorMessage component="div" className={style.errorMsg} name="email" />
			</div>
			<div className={style.fieldContainer}>
				<label className={style.label} htmlFor="password">
					{t('common.password')}:
				</label>
				<Field type="password" name="password" placeholder={t('common.username')} />
				<ErrorMessage component="div" className={style.errorMsg} name="password" />
			</div>
			<div className={style.fieldContainer}>
				<label className={style.label} htmlFor="confirmPassword">
					{t('common.confirmPassword')}:
				</label>
				<Field type="password" name="confirmPassword" placeholder={t('common.confirmPassword')} />
				<ErrorMessage component="div" className={style.errorMsg} name="confirmPassword" />
			</div>
		</>
	);
};
