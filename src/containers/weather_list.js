import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from '../components/gmaps';
import Victory from '../components/victory';

class WeatherList extends Component {
	renderWeather(cityData) {
		if(cityData){
		const name = cityData.city.name;
		const { lon, lat } = cityData.city.coord;
		const weatherArr = [];

		cityData.list.map(val => {
			return weatherArr.push({
				date: val.dt_txt,
				temp: 9 / 5 * (val.main.temp - 273) + 32,
				pressure: val.main.pressure,
				humidity: val.main.humidity
			});
		});
		return (
			<div key={name} className="weather-container">
				<span className="weather-data">{<Map lon={lon} lat={lat} />}</span>
				<span className="weather-data">
					<Victory
						data={weatherArr}
						weatherProperty={'temp'}
						color={'84B93B'}
					/>
				</span>
				<span className="weather-data">
					<Victory
						data={weatherArr}
						weatherProperty={'humidity'}
						color={'2D6580'}
					/>
				</span>
				<span className="weather-data">
					<Victory
						data={weatherArr}
						weatherProperty={'pressure'}
						color={'57348A'}
					/>
				</span>
			</div>
		);
	}
	}

	showHeaders() {
		if (this.props.weather.length !== 0) {
			return (
				<div className="weather-container">
					<p className="weather-data">City</p>
					<p className="weather-data">Temperature (°F)</p>

					<p className="weather-data">Humidity (%)</p>
					<p className="weather-data">Pressure (hPa)</p>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				{this.showHeaders()}
				{this.props.weather.map(this.renderWeather)}
			</div>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather }; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList); // exporting the connected version of this container
