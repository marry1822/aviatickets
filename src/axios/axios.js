import axios from "axios";

const instance = axios.create({
	baseURL:
		"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/RUB/en-US/SVO-sky/JFK-sky/",
	headers: {
		"x-rapidapi-key": "b96a80225cmsh506b5977bc26c93p12af23jsn6587210d7f10",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	},
});

export const getTicketsAPI = {
	getTickets(date) {
		return instance.get(`${date}`).then((response) => response.data);
	},
};
