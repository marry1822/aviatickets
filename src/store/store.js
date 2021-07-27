import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import loginReducer from "../store/loginReducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
	login: loginReducer,
	form: formReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;
export default store;
