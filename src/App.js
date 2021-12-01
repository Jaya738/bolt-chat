import {
	Switch,
	Route
  } from "react-router-dom";
import Home from "./components/Home/Home";
import Notifications from "./components/Notifications/Notifications";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { paths } from "./routes/paths";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route
					path={paths.notifications}
					component={Notifications}
				/>
				<Route
					path={paths.home}
					component={Home}
					exact={true}
				/>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
