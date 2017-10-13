import React, { Component } from 'react';
import SearchBar from '../containers/searchbar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
	render() {
		return (
			<div>
				<p
					style={{ fontSize: '30px', textAlign: 'center', marginBottom: '2px' }}
				>
					Weather Master Platinum Edition
				</p>
				<p style={{ textAlign: 'center', marginTop: '2px' }}>
					Enter a location below. The accompanying charts represent the 5 day
					forecast.
				</p>
				<SearchBar />
				<WeatherList />
			</div>
		);
	}
}
