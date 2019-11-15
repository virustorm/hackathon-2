import React from 'react';

export default function Info(props) {
	console.log(props.data);
	console.log(props.data.tracks);
	const info =
		props.data.tracks &&
		props.data.tracks.map((data, index) => {
			return (
				<div key={index}>
					<h1>{`${data.track.album.name} by ${data.track.artists[0].name}`}</h1>
					<h1>{`duration in ms: ${data.track.duration_ms}`}</h1>
					<h1>{`popularity: ${data.track.popularity}`}</h1>
				</div>
			);
		});
	return <div>{info}</div>;
}
