import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import s from "../components/Login.module.css";
import LoginReduxForm from "../components/LoginForm";
import { toggleIsLoggedIn } from "../store/loginReducer";

const Login = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
	const token = localStorage.getItem("token");
	if (token == null) {
		dispatch(toggleIsLoggedIn(false));
	}
	const onSubmit = (formData) => {
		if (
			formData.login === "test@test.com" &&
			formData.password === "qwertyui"
		) {
			localStorage.setItem("token", "logged_in");
			dispatch(toggleIsLoggedIn(true));
		} else {
			alert("Email or password is incorrect");
		}
	};

	if (isLoggedIn===true) {
		return <Redirect to={"/main"} />;
	}

	return (
		<div className={s.loginContainer}>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
