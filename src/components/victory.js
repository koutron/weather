import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const Victory = props => {
	return (
		<div>
			<VictoryChart
				domainPadding={10}
				animate={{
					duration: 2000,
					onLoad: { duration: 1000 }
				}}
			>
				<VictoryAxis
					tickValues={[1, 8, 15, 23, 31, 39]}
					tickFormat={x => x.slice(5, 10)}
				/>
				<VictoryAxis
					dependentAxis

					// tickFormat specifies how ticks should be displayed
				/>

				<VictoryLine
					style={{ data: { stroke: props.color } }}
					data={props.data}
					x="date"
					y={props.weatherProperty}
				/>
			</VictoryChart>
		</div>
	);
};

export default Victory; 
