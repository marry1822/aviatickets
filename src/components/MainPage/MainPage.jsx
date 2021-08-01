import React from "react";
import Header from "../Header/Header";
import s from "../MainPage/MainPage.module.css";
import { getTicketsAPI } from "../../axios/axios";
import { useEffect } from "react";
import { FlightsList } from "../FlightsList/FlightsList";

const MainPage = () => {
	const date = "2021-08-25";
	useEffect(() => {
		getTicketsAPI.getTickets(date);
	});

	return (
		<div className={s.mainPage}>
			<Header />
			<div className={s.mainPageContainer}>
				<FlightsList />
			</div>
		</div>
	);
};

export default MainPage;
