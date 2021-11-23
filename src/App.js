import reactLogo from "./logo.svg";
import Header, { ReactLink } from "./components/Header";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
				<ReactLink />
			</header>
		</div>
	);
}

export default App;
