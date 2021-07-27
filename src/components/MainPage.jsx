import React from "react";
import Header from "./Header";
import s from "../components/MainPage.module.css";
import { getTicketsAPI } from "../axios/axios";
import { useEffect } from "react";

const MainPage = () => {
	const date = "2021-08-25";
	useEffect(() => {
		getTicketsAPI.getTickets(date);
	});

	return (
		<div className={s.mainPageContainer}>
			<Header />
		</div>
	);
};

export default MainPage;
