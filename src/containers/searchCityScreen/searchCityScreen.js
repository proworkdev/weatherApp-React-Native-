import React from 'react'
import { Text, View, TextInput, Button, Picker, StyleSheet, ImageBackground, Platform } from 'react-native';
import {fetchCityData, fetchLocationForecast, getIconsData} from '../../actions/actions';
import ForecastScreen from '../forecastScreen/forecastScreen';
import {connect} from 'react-redux';
import axios from 'axios';
import backgroundImage from '../../../assets/bg.jpg'
class SearchCityScreen extends React.Component {
	state={
		city: '',
		woeid: ''
	}
	inputHandler=(e)=>{
		this.props.dispatch(fetchCityData(this.state.city))
	}
	locationHandler=(woeid)=>{
		console.log("Props??", this.props.navigation.navigate)
		
		console.log("Woeid", woeid);
		this.props.dispatch(fetchLocationForecast(woeid))
		return axios.get(`https://www.metaweather.com/api/location/${woeid}`)
		.then((response)=>{
			return response.data.consolidated_weather.map((stateAbbr)=>{
				console.log("weather_state_abbr", stateAbbr.weather_state_abbr);
				return stateAbbr.weather_state_abbr;
			})
		}).then((abbrResponse)=>{
			console.log("abbrResponse is", abbrResponse);
			abbrResponse.map((abbr)=>{
				return axios.get(`https://www.metaweather.com/static/img/weather/png/${abbr}.png`)
			.then((icon)=>{
				this.props.dispatch(getIconsData(icon))
			}).then(this.props.navigation.navigate('forecastScreen'))
			})
		})
	}
	render() {
		return (
			<ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}>
			<View style={styles.container}>
			
			<Text style={styles.title}>Platform {typeof Platform.isTV} Days</Text>
			<TextInput 
			style={styles.input}
			placeholder={'Search Your City Here'}
			placeholderTextColor={'#f1f1f1'}
			name="city"
			value={this.state.city}
			onChangeText={(city)=>this.setState({city})}
			onChange={this.inputHandler}
			/>
			<View>
				{this.props.cityDetails.length != 0  && <Picker mode="dropdown" onValueChange={this.locationHandler} style={styles.picker}>
				<Picker.Item label="Click Here To Get Related Cities"/>
				 {this.props.cityDetails.map((data)=> {
								 { return <Picker.Item key={data.woeid} label={data.title} value={data.woeid}/>}
							})}
							</Picker>
							
						}
			</View>
			<View>
			{/* {(this.props.cityForecast.length !=0 && this.props.iconsData.length !=0 )  && <ForecastScreen forecastData={this.props.cityForecast} iconsData={this.props.iconsData}/>} */}
			</View>
			</View>
			</ImageBackground>
			)
	}
}
mapStateToProps=(state)=>{
	if(state.cityData.cityData){
		console.log("State in Search City Screen", state);
	}
	return {
		cityDetails: state.cityData.cityData
		// cityForecast: state.cityData.forecastData,
		// iconsData: state.cityData.iconsData
	}
}


const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    marginTop: 180,
  },
  title: {
    fontSize: 19,
    color: '#f1f1f1',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    alignSelf: 'center'
  },
  input: {
    color: '#f1f1f1',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  picker:{
  	color: '#f1f1f1'
  }
  
});
export default connect(mapStateToProps, null)(SearchCityScreen);