import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  //state: (state = {}) => state ---- removed after adding weather: WeatherReducer
});

export default rootReducer;
