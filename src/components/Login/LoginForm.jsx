import React from "react";
import s from "../Login/LoginForm.module.css";
import { reduxForm, Field } from "redux-form";
import {
	required,
	minLength8,
	email,
	onlyLat,
} from "../utils/formValidators/validators";

const Input = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;

	return (
		<div className={`${s.formControl} ${hasError ? s.error : ""}`}>
			<input {...input} {...props} />
			{hasError && <span>{meta.error}</span>}
		</div>
	);
};

const LoginForm = (props) => {
	return (
		<form className={s.loginForm} onSubmit={props.handleSubmit}>
			<div className={s.loginForm__container}>
				<div className={s.loginForm__formHeader}>Simple flight check</div>
				<div className={s.loginForm__form}>
					<span className={s.loginForm__inputLable}>Логин:</span>
					<Field
						component={Input}
						name={"login"}
						validate={[required, email]}
						className={s.loginForm__input}
					/>
					<span className={s.loginForm__inputLable}>Пароль:</span>
					<Field
						component={Input}
						name={"password"}
						type={"password"}
						validate={[required, minLength8, onlyLat]}
						className={s.loginForm__input}
					/>
					<button className={s.loginForm__button}>Войти</button>
				</div>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({
	form: "login",
})(LoginForm);

export default LoginReduxForm;
