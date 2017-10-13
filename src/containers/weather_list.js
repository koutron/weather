import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/gmaps';
import Victory from '../components/victory';
//import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(
			weather => 9 / 5 * (weather.main.temp - 273) + 32
		);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		return (
			<div key={name} className="weather-container">
				<span className="weather-data">{<Map lon={lon} lat={lat} />}</span>

				<span className="weather-data">
					<Victory data={cityData} />

					{/*}<Chart data={temps} color="black" units="°F" />*/}
				</span>

				<span className="weather-data">
					<Chart data={pressures} color="grey" units="hPa" />
				</span>

				<span className="weather-data">
					<Chart data={humidities} color="blue" units="%" />
				</span>
			</div>
		);
	}

	render() {
		return (
			<div>
				<div className="weather-container">
					<p className="weather-header">City</p>
					<p className="weather-header">Temperature (°F)</p>
					<p className="weather-header">Pressure (hPa)</p>
					<p className="weather-header">Humidity (%)</p>
				</div>

				{this.props.weather.map(this.renderWeather)}
			</div>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather }; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList); // exporting the connected version of this container
