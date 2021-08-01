import React from "react";
import s from "../Header/Header.module.css";
import logout from "../../assets/logout.svg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleIsLoggedIn } from "../../store/loginReducer";

const Header = () => {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(toggleIsLoggedIn(false));
		localStorage.removeItem("token");
	};
	return (
		<div className={s.header}>
			<div className={s.header__container}>
				<div className={s.header__logoutBlock}>
					<NavLink className={s.header__exitText} to={"/"} onClick={onClick}>
						Выйти
					</NavLink>
					<div className={s.header__exitIcon}>
						<img src={logout} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
