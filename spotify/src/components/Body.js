import React, { Component } from 'react';
import Info from './Info';

const axios = require('axios');

export default class Body extends Component {
	constructor() {
		super();
		this.state = {
			id: '37i9dQZEVXbMDoHDwVN2tF',
			tracks: []
		};
	}

	componentDidMount() {
		axios.defaults.headers.common['Authorization'] =
			'Bearer BQBE7D9SdXMnyiPwIKEslGn_rFP1v8997hji4NJ0NIPGLOWG7k59aP0w5nkthIIUF5C1278AQGnbUsNzWC8q9opNgL6wr5mcq-giQxkKc1bxi5GpZnIMfUT362tfGlxJ9PAbO6Zrz49_';
		axios.get(`https://api.spotify.com/v1/playlists/${this.state.id}/tracks`).then((res) => {
			console.log(res.data.items);
			this.setState({
				tracks: res.data.items
			});
		});
	}

	render() {
		return (
			<div>
				<h1>popluarity range from 1 - 100</h1>
				<Info data={this.state} />
			</div>
		);
	}
}
