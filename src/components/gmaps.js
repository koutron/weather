import React, { Component } from 'react';
import { Gmaps } from 'react-gmaps';

const params = { v: '3.exp', key: 'AIzaSyDSNQRhrm4OXvcbDgkGwW--NafUhzBjJSc' };

class Map extends Component {
	onMapCreated(map) {
		map.setOptions({
			disableDefaultUI: true
		});
	}

	render() {
		return (
			<Gmaps
				width={'200px'}
				height={'200px'}
				lat={this.props.lat}
				lng={this.props.lon}
				zoom={10}
				loadingMessage={'Be happy'}
				params={params}
				onMapCreated={this.onMapCreated}
			/>
		);
	}
}

export default Map;
