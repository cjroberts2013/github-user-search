import React, { Component } from "react";
import Navbar from "./components/Navbar";
import UserItem from "./components/users/UserItem";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="">
				<Navbar />
				<UserItem />
			</div>
		);
	}
}

export default App;
