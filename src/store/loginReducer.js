const TOGGLE_IS_LOGGED_IN = "TOGGLE_IS_LOGGED_IN";

let initialState = {
	isLoggedIn: Boolean(localStorage.getItem("token")),
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_IS_LOGGED_IN: {
			return {
				...state,
				isLoggedIn: action.isLoggedIn,
			};
		}
		default:
			return state;
	}
};

export const toggleIsLoggedIn = (isLoggedIn) => ({
	type: TOGGLE_IS_LOGGED_IN,
	isLoggedIn,
});

export default loginReducer;
