import React from 'react';

export default function Info(props) {
	console.log(props.data);
	console.log(props.data.tracks);

	const info =
		props.data.tracks &&
		props.data.tracks.map((data, index) => {
			let duration  = data.track.duration_ms
			let pop = data.track.popularity
			let attn = Math.round((duration/100) / (pop + 1))
			return (
				<div key={index} className="info__cell">
					<h1 className="info__track">{data.track.album.name}</h1>
					<h1 className="info__artist">{data.track.artists[0].name}</h1>
					<h1 className="info__attn">attn.IDX <span className="info__number">{attn}</span></h1>
				</div>
			);
		});
	return <div className="info__box">{info}</div>;
}
