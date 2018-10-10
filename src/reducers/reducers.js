import {GET_CITY_DATA, GET_FORECAST, GET_ICONS} from '../constants/constants';

const reducerState={
	cityData: '',
	forecastData: '',
	iconsData: ''
}
const cityDataReducer = (state=reducerState, action) =>{ 
switch(action.type) {
	case GET_CITY_DATA: 
	return {
		...state,
		cityData: action.cityData
	}
	case GET_FORECAST:
	return {
		...state,
		forecastData: action.locationData
	}
	case GET_ICONS:
	return {
		...state,
		iconsData: action.iconsData
	}
	default : 
	return state;
}

}
export default cityDataReducer
