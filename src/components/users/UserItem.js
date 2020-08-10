import React, { Component } from "react";

export default class UserItem extends Component {
	state = {
		id: "id",
		login: "cjroberts2013",
		avatar_url: "https://avatars1.githubusercontent.com/u/49354289?v=4",
		html_url: "https:github.com/cjroberts2013",
	};

	render() {
		const { login, html_url, avatar_url } = this.state;
		return (
			<div className="user card">
				<img src={avatar_url} alt="User profile" />
				<h3>{login}</h3>
				<div>
					<a href={html_url} className="btn">
						More
					</a>
				</div>
			</div>
		);
	}
}
