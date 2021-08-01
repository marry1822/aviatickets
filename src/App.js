import "./App.css";
import Login from "../src/components/Login/Login";
import MainPage from "../src/components/MainPage/MainPage";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<div className="App">
					<Route exact path="/" render={() => <Login />} />
					<Route path="/main" render={() => <MainPage />} />
				</div>
			</Provider>
		</BrowserRouter>
	);
};

export default App;
