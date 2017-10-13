import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}
	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input
					className="question"
					value={this.state.term}
					onChange={this.onInputChange}
					type="text"
					name="name"
					id="nme"
					required
					autoComplete="off"
				/>
				<label>
					<span>Location</span>
				</label>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
