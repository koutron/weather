import React from 'react';
import { Gmaps } from 'react-gmaps';
const params = { v: '3.exp', key: 'AIzaSyDSNQRhrm4OXvcbDgkGwW--NafUhzBjJSc' };
const styles = [
	{
		featureType: 'all',
		elementType: 'all',
		stylers: [
			{
				invert_lightness: true
			},
			{
				saturation: 10
			},
			{
				lightness: 30
			},
			{
				gamma: 0.5
			},
			{
				hue: '#435158'
			}
		]
	}
];

const Map = props => {
	return (
		<Gmaps
			style={{ alignSelf: 'center' }}
			width={'100%'}
			height={'100%'}
			lat={props.lat}
			lng={props.lon}
			zoom={10}
			loadingMessage={'Loading...'}
			params={params}
			onMapCreated={this.onMapCreated}
			styles={styles}
		/>
	);
};

export default Map;
