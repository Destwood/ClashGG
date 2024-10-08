import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './LogInForm.module.scss';

export const LogInForm: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
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
				<Field type="password" name="password" placeholder={t('common.password')} />
				<ErrorMessage component="div" className={style.errorMsg} name="password" />
			</div>
		</>
	);
};
