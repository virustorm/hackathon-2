import React from 'react';
import { interfaceDeclaration } from '@babel/types';

export default function Info(props) {
	console.log(props.data);
	console.log(props.data.tracks);

	//let attn = {data.track.duration_ms} / {data.track.popularity}

	const info =
		props.data.tracks &&
		props.data.tracks.map((data, index) => {
			let duration  = data.track.duration_ms
			let pop = data.track.popularity
			let attn = (duration/1000) / (pop + 1) 
			return (
				<div key={index} className="info__cell">
					<h1 className="info__main"><span className="info__track">{data.track.album.name}</span> by <span className="info__artist">{data.track.artists[0].name}</span></h1>
					<h1 className="info__attn">Attention IDX <span className="info__number">{attn}</span></h1>
				</div>
			);
		});
	return <div>{info}</div>;
}
