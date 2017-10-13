import React, { Component } from 'react';
import { VictoryBar } from 'victory';

class VictoryChart extends Component {
	formatData() {
		const weatherObj = {
			temp: [],
			pressure: [],
			humidity: []
		};
		this.props.data.list.map(val => {
			weatherObj.temp.push(val.main.temp);
			weatherObj.pressure.push(val.main.pressure);
			weatherObj.humidity.push(val.main.humidity);
		});
		return weatherObj;
	}
	render() {
		return (
			<div>
				{console.log('inside the return', this.formatData())}
				<VictoryBar data={this.formatData().pressure} />
			</div>
		);
	}
}

export default VictoryChart;
