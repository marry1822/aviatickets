import React from "react";
import s from "../components/LoginForm.module.css";
import { reduxForm, Field } from "redux-form";
import {
	required,
	minLength8,
	email,
	onlyLat,
} from "../components/utils/formValidators/validators";

const Input = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;

	return (
		<div className={`${s.formControl} ${hasError ? s.error : ""}`}>
			<div>
				<input {...input} {...props} />
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	);
};

const LoginForm = (props) => {
	return (
		<form className={s.loginForm} onSubmit={props.handleSubmit}>
			<div className={s.loginForm__container}>
				<div className={s.loginForm__formHeader}>Simple flight check</div>
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
		</form>
	);
};

const LoginReduxForm = reduxForm({
	form: "login",
})(LoginForm);

export default LoginReduxForm;
