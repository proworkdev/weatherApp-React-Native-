import {GET_CITY_DATA, GET_FORECAST, GET_ICONS} from '../constants/constants';
import axios from 'axios';

export const getCityData=(cityData)=>{
	return {
		type: GET_CITY_DATA,
		cityData
	}
}

export const fetchCityData=(searchedTerm)=>{
	return dispatch=>{
		return axios.get(`https://www.metaweather.com/api/location/search/?query=${searchedTerm}`)
		.then((response)=>{
			let filterData = response.data.filter(function (res) {
        						return res.title.substring(0, searchedTerm.length).toLowerCase() == searchedTerm.toLowerCase();
							});
			console.log(filterData);
			return dispatch(getCityData(filterData));
		})
	}
}
export const getForecastData=(locationData)=>{
	return {
		type: GET_FORECAST,
		locationData
	}
}
export const getIconsData=(iconsData)=>{
	return {
		type: GET_ICONS,
		iconsData
	}
}
export const fetchLocationForecast =(woeid)=>{
	return dispatch=>{
		return axios.get(`https://www.metaweather.com/api/location/${woeid}`)
			.then((response)=>{
				console.log("Forecast Response", response);
				return dispatch(getForecastData(response))
			})
	}
}