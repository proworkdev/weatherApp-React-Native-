import React from 'react'
import { Text, View, Button, Image, StyleSheet, ScrollView } from 'react-native';
import {connect} from 'react-redux';
class ForecastScreen extends React.Component {
	// state={
constructor(props){
 super(props);
 this.state = {
	forecastData: [],
	title:''
 }

}
componentWillMount=()=>{
	console.log("This", this.props)
}
componentWillReceiveProps = (nextProps) => {
	const condtion = nextProps.forecastData.data;
	let icons = nextProps.iconsData.config;
	console.log("Icons in nextProps", icons)
	if(condtion && condtion.consolidated_weather.length){
		this.setState({
			forecastData: condtion.consolidated_weather,
			title: condtion.title
		});
	}
}
	render() {
		console.log("Props are", this.state.forecastData);
		return (
			<ScrollView style={styles.container}>
				<Text style={{textAlign: 'center', fontSize: 19}}>City Name: {this.state.title}</Text>
			{this.state.forecastData.map((val, key) => {
						return (<View key={key} style={{flex: 1,
							flexDirection: 'row',
							justifyContent: 'flex-start', marginBottom: 1,  borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1, clear: 'both', paddingBottom: 5, paddingTop: 5, backgroundColor: '#fff',}}>
        							
									<View style={{marginRight: 50, paddingTop: 20, textAlign: 'center', paddingLeft: 30, }}>
											{this.props.iconsData.config != null && <View>
													<Image style={{width: 50, height: 50}} source={{uri: `https://www.metaweather.com/static/img/weather/png/${val.weather_state_abbr}.png`}}/>
											</View>}
									</View>

									<View>
										<Text  style={{color: '#000',}}>Day: {key}</Text>
										<Text  style={{color: '#000',}}>State Name: {val.weather_state_name}</Text>
										<Text  style={{color: '#000',}}>Min Temperature: {Math.round(val.min_temp * 100)/100}</Text>
										<Text  style={{color: '#000',}}>Max Temperature: {Math.round(val.max_temp *100)/100}</Text>
										<Text  style={{color: '#000',}}>Predictability: {val.predictability}</Text>
									</View>
							</View>
						)
					})
				}
			{/*{this.state.forecastData.length != 0 && <View>
				{this.state.forecastData.map((cityData)=>{
				return <Text>Data is: {cityData.title} </Text>
			})}
			</View>}*/}
			<View style={{marginBottom:15, marginTop:15, paddingLeft: 70, paddingRight: 70,}}>
			<Button style={{borderRadius: 20, borderWidth: 0.5, borderColor: '#fff',}} title="Search Another City" onPress={()=>{this.props.navigation.navigate('searchCityScreen')}}/>
				</View>
			</ScrollView>
			
			)
	}
}
mapStateToProps=(state)=>{
return {
	cityDetails: state.cityData.cityData,
	forecastData: state.cityData.forecastData,
	iconsData: state.cityData.iconsData
}	
}
const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
   

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
  },
  
});
export default connect(mapStateToProps, null)(ForecastScreen);