import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
import Home from "./components/Home/Home";
import Notifications from "./components/Notifications/Notifications";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				{/* <Switch>
					<Route
						path="/notifications"
						component={Notifications}
					/>
					<Route
						path="/"
						component={Home}
						exact={true}
					/>
				</Switch> */}
				<Home />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
