import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./page";
import "./components/styles/app.scss";

function App() {
	return (
		<Switch>
			<Route path="/" component={Home} />
		</Switch>
	);
}

export default App;
