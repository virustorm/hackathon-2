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
			'Bearer BQBWnAT0PK3Qi1t3VhdXJYclBeRS4Jjcg9vtPWuYvcaN-vLBsyMYCWXqRTxdkof6To_qmDZDugCg8vWrBON1XYg-jw2TKtwAETlBJwNmP4YwtC9emm_bJ4mtPTfocIcgtLFTTuk6AiHFDjS6hlQFPMxIyWu8luA';
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
