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
			'Bearer BQA3Bcj4yplWWCrftpbXSC1AGc8J2J-5fBYLSr8c2RRpBZgZvgv2RGeLxBVZnQFaShW6LrzgEbRHUGeJgA995ZlrL1hNLWBv6WTWNompGRgrgZxMX1TL8Sh4N3K2YxGQspGfs37IcZGl';
		axios.get(`https://api.spotify.com/v1/playlists/${this.state.id}/tracks`).then((res) => {
			console.log(res.data.items);
			this.setState({
				tracks: res.data.items
			});
		});
	}

	render() {
		return (
			<div className="info__body">
				<Info data={this.state} />
			</div>
		);
	}
}
