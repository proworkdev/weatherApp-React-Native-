import {  createStackNavigator } from 'react-navigation';
import forecastScreen from '../containers/forecastScreen/forecastScreen';
import searchCityScreen from '../containers/searchCityScreen/searchCityScreen';
const allScreen = createStackNavigator({
	searchCityScreen: {
		screen: searchCityScreen,
		navigationOptions: {
			header: null
		}
	},
	forecastScreen: {
		screen: forecastScreen,
		navigationOptions: {
			header: null
		}
	}
})
export default allScreen;