import React from "react";
import s from "../FlightsList/FlightsList.module.css";
import { FlightsListItem } from "./FlightsListItem";
import arrow from "../../assets/arrow.png";
import TextField from "@material-ui/core/TextField";
import Carousel from "../Carousel/Carousel";

export const FlightsList = () => {
	return (
		<div className={s.flightsList}>
			<div className={s.flightsList__container}>
				<div className={s.flightsList__header}>
					<div className={s.flightsList__directions}>
						<span>Вылеты</span>
						<img src={arrow} />
						<span>SVO - JFK</span>
					</div>
					<div className={s.flightsList__dates}>
						<form noValidate>
							<TextField
								id="date"
								type="date"
								defaultValue="2021-08-25"
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</form>
					</div>
				</div>
				<div className={s.flightsList__images}>
					<Carousel />{" "}
				</div>
				<div className={s.flightsList__favourites}>FAVOURITES</div>
				<div className={s.flightsList__list}>
					<FlightsListItem />
				</div>
			</div>
		</div>
	);
};
