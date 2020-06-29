import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Icon,
	TouchableOpacity,
} from 'react-native';
// import { Header } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import DrawerNav from '../drawer/drawer';

export default class Homescreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font,
		});

		// setInterval(() => {
		// 	console.log(this.props);
		// }, 1000);
		setTimeout(() => {
			this.setState({ isReady: true });
		}, 1000);
	}

	render() {
		return (
			<View>
				<View style={styles.header}></View>
				<View style={styles.topBar}>
					<TouchableOpacity
						style={{ width: '30%' }}
						onPress={() => this.props.navigation.openDrawer()}
					>
						<Ionicons
							name="ios-menu"
							style={{ color: 'white', fontWeight: 'bold', fontSize: 28, margin: 15 }}
						/>
					</TouchableOpacity>
					<View style={{ flexDirection: 'row' }}>
						<Ionicons
							name="ios-search"
							style={{ color: 'white', fontWeight: 'bold', fontSize: 28, margin: 15 }}
						/>
						<Ionicons
							name="ios-notifications"
							style={{ color: 'white', fontWeight: 'bold', fontSize: 28, margin: 15 }}
						/>
					</View>
				</View>
				<View style={styles.header2}>
					<Text style={{ color: 'white', fontWeight: 'bold' }}>Welcome Jackson</Text>
				</View>

				<View style={styles.container2}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Check Balance')}>
						<View
							style={{
								margin: 5,
								width: 105,
								height: 150,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 7,
								},
								shadowOpacity: 0.51,
								shadowRadius: 9.11,

								elevation: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									backgroundColor: '#064199',
									width: 60,
									height: 60,
									borderRadius: 30,
									marginTop: 20,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons
									name="ios-cash"
									style={{
										color: 'white',
										fontSize: 30,
										fontWeight: 'bold',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</View>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 15,
									fontWeight: 'bold',
									color: 'grey',
									marginTop: 10,
								}}
							>
								Check Balance
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Mpesa')}>
						<View
							style={{
								margin: 5,
								width: 105,
								height: 150,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 7,
								},
								shadowOpacity: 0.51,
								shadowRadius: 9.11,

								elevation: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									backgroundColor: '#0cb318',
									width: 60,
									height: 60,
									borderRadius: 30,
									marginTop: 20,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons
									name="ios-rocket"
									style={{
										color: '#de0909',
										fontSize: 24,
										fontWeight: 'bold',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</View>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 15,
									fontWeight: 'bold',
									color: 'grey',
									marginTop: 10,
								}}
							>
								Mpesa
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Tunukiwa')}>
						<View
							style={{
								margin: 5,
								width: 105,
								height: 150,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 7,
								},
								shadowOpacity: 0.51,
								shadowRadius: 9.11,

								elevation: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									backgroundColor: '#0cc9c9',
									width: 60,
									height: 60,
									borderRadius: 30,
									marginTop: 20,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons
									name="ios-gift"
									style={{
										color: 'white',
										fontSize: 30,
										fontWeight: 'bold',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</View>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 15,
									fontWeight: 'bold',
									color: 'grey',
									marginTop: 10,
								}}
							>
								Tunukiwa
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('My Data Usage')}>
						<View
							style={{
								margin: 5,
								width: 105,
								height: 150,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 7,
								},
								shadowOpacity: 0.51,
								shadowRadius: 9.11,

								elevation: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									backgroundColor: '#bd0832',
									width: 60,
									height: 60,
									borderRadius: 30,
									marginTop: 20,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons
									name="ios-cellular"
									style={{
										color: 'white',
										fontSize: 30,
										fontWeight: 'bold',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</View>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 15,
									fontWeight: 'bold',
									color: 'grey',
									marginTop: 10,
								}}
							>
								My Data Usage
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('Data & Calling Plans')}
					>
						<View
							style={{
								margin: 5,
								width: 105,
								height: 150,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 7,
								},
								shadowOpacity: 0.51,
								shadowRadius: 9.11,

								elevation: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									backgroundColor: '#00910f',
									width: 60,
									height: 60,
									borderRadius: 30,
									marginTop: 20,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons
									name="ios-paper-plane"
									style={{
										color: 'white',
										fontSize: 30,
										fontWeight: 'bold',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</View>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 15,
									fontWeight: 'bold',
									color: 'grey',
									marginTop: 10,
								}}
							>
								Data & Calling Plans
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Platinum Plans')}>
						<View
							style={{
								margin: 5,
								width: 105,
								height: 150,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 7,
								},
								shadowOpacity: 0.51,
								shadowRadius: 9.11,

								elevation: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									backgroundColor: '#00910f',
									width: 60,
									height: 60,
									borderRadius: 30,
									marginTop: 20,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons
									name="ios-star-outline"
									style={{
										color: 'white',
										fontSize: 30,
										fontWeight: 'bold',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</View>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 15,
									fontWeight: 'bold',
									color: 'grey',
									marginTop: 10,
								}}
							>
								Platinum Plans
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Services')}>
						<View
							style={{
								margin: 5,
								width: 105,
								height: 150,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 7,
								},
								shadowOpacity: 0.51,
								shadowRadius: 9.11,

								elevation: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									backgroundColor: '#bd0832',
									width: 60,
									height: 60,
									borderRadius: 30,
									marginTop: 20,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons
									name="ios-chatbubbles"
									style={{
										color: 'white',
										fontSize: 30,
										fontWeight: 'bold',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</View>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 15,
									fontWeight: 'bold',
									color: 'grey',
									marginTop: 10,
								}}
							>
								Services
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('My Account')}>
						<View
							style={{
								margin: 5,
								width: 105,
								height: 150,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 7,
								},
								shadowOpacity: 0.51,
								shadowRadius: 9.11,

								elevation: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									backgroundColor: '#8f949c',
									width: 60,
									height: 60,
									borderRadius: 30,
									marginTop: 20,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons
									name="md-person"
									style={{
										color: 'white',
										fontSize: 30,
										fontWeight: 'bold',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</View>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 15,
									fontWeight: 'bold',
									color: 'grey',
									marginTop: 10,
								}}
							>
								My Account
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Contact Us')}>
						<View
							style={{
								margin: 5,
								width: 105,
								height: 150,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 7,
								},
								shadowOpacity: 0.51,
								shadowRadius: 9.11,

								elevation: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									backgroundColor: '#064199',
									width: 60,
									height: 60,
									borderRadius: 30,
									marginTop: 20,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons
									name="ios-call"
									style={{
										color: 'white',
										fontSize: 30,
										fontWeight: 'bold',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</View>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 15,
									fontWeight: 'bold',
									color: 'grey',
									marginTop: 10,
								}}
							>
								Contact Us
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<ImageBackground
					style={{
						height: 120,
						width: '110%',
						marginLeft: -50,
					}}
					source={{
						uri:
							'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIWFhUVGBUVGBgWFxgVGBUWFxUXGBgXGBoYHSggGBolHhoaITEhJSkrLi4uFyAzODUsNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBEQACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQQFBgIDBwj/xABJEAACAQIDBAYFCQYDBgcAAAABAgMAEQQSIQUGMUETIlFhcZEHMjVCgQgUI3SDobGztBZSU3LB0TNi8BWCssLh8SQlNENEY5L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMhEAAgIBBAEDAwAJBQEAAAAAAAECEQMEEiExEwVBURQiYRUjMlJxgZGhsQYzQvDxFv/aAAwDAQACEQMRAD8A4bQF49CftrCfb/ppqA9TVJAtAFABoBKAwmiVwVYAg6EHUGoaTVMmMmnaNOA2fHDm6MWzG5ub8rWF+VRGCj0a5c08j+5jqrGIUAlAKKAKAKAKASgFFAFAFAUPejaxmk6JD9Ghtp77jifAcB8a0hG+T3PT9JS3yQ1wWH5mpm/Y9LJP2RsZXlcRxi5PkO89govtVmbnHDHdMebI3UkMubEABF4AG/SH4cF/GuZpzlbPM1HqCcax+5dQLCwrQ8gKkki9s7FScX9WQcG/o3aKmMqOvS6yWB/gqJLxOY5BYj7+8dorRrce/FxzQUose4PEmNhJH8RyYdhqn4OfPiWSO2X8i4YTErIgdeB+7tFVPn5wcJbWcy+UX7Mh+tx/kT1DKnnOoAUAUBePQn7awn2/6aagPS+2tomFAwQuWZVsCBxYA8SPh324carOW1GGbL40RSb0m8ReIqknSEtcHKFZVVtL9XrAG/A91ZLNyrMfq6q12b4d5kCRNIpBkv6tio+kKDiQTw5A1bzKl+S31UVFN+5m288A4hwcsrEEDq9EWDKdfW6rW8KnyxJ+qgCbzQFilnDAObHKLsi5mT1r3AB46aHWnlTC1UG6MBvCJBG0QIVpY4yzAEEspYqLNoRpc8Oy9R5U+UR9RuVx6McPvMoiieZSDJxK2yjrlRoWufheiyqlZEdUtqb9zY288QNmVwfpb3t1TETcHXibEinmiT9VH3/7RlJvEgbo8rK5TMM2W2bo8+U2a/DutpxqXlRL1Mbr3NWC3mRoBKyMbBAxUKF6RlzMq5mHD/V6rHKnGysNXFw3Mwm3lBz9GjZRAZlci9tGPWW40FrceOnfTy3dfAeq5aS4q7J7DSZkVu1QeziL1snaOqLtWbKkkKAabTeQRkxC76W5/jWeRtRtFZtpcDpTpV0WQtSBrtLP0T9GOvlOXlrRdmmLbvW7o55hMKb2Itbjfjet7SR9XujGP2jzEyWAVeJ00qkV7mcV3Jlu2FssQpr67asf6eAqsnbPn9ZqXmn+F0SVVOQWgCgC1ARm3NkrOnY6+q39D3GrRlR16XUvDK117kdu7sUgZ5hrcgIeVjxPbUylZ1a3Xb/tx9FjUVU8tu+TlvyjPZsP1uP8jEVDB5zqAFAFAXj0J+2sJ9v+mmoD07j9nxzBRIobKcwuOf8AaocU+zOeOM+xtFsSBQoCaKjR25FXtmuOZNhrUeOJmsGP4/BoG7OHAUAMAoUeu2oVy637bEmq+GJX6XHx+DZNu9h2LMyG7usjan1lv5A3Nxzual4ot2Wemxvtfk2DYsOZ3AYdJmzAM2W7izHLewJ7anxRsn6eNt/JhFu/ApUqpGUxsAGNs0alVYjtsde2o8UUQtPBdGpt2sOQBZrBQujtqA5cA9upNPFEj6aDNuI3fgcuzKbuyO3WPFL2t2DU3HO5o8aD02NtuuxX2DCXMlmuSWtmNszJkJtwvanij2S9PBy3GpN2sOAAAwtktZ2GqKUDae8VNiedR4YkfSwqkZ/s9BlC2YARmHR2F0N9D28Tap8USfp4f2ok4kCqFHAAAeAFqulXBslSoxxWISNGkkYIii7MxsAO0k1NkrkpW2fSvs2A5Vd52/8ApXMB3ZnKrfwJqLL7R7uj6QsHtB+jhLpJYtklUAkDiQVJBt2XomHEttSUEoBaEkfj9lJJdh1XPvDn4jnU2dODVTx8doidlbvyJOHkKlV1WxvduWh4W41Zy4o7NTr4zxbIcWWaqHkiUAUAVJItQAoQJQC0Byz5Rns2H63H+RiKgk850AUAUBePQn7awn2/6aagPU1SQFBQy+fXn6EDgCST22UgDzrTx/ZvMFmXl8Y9rM3CgsKAKCgoSFCKNEuNiU5WkRT2FlB8iaWTRvoAoQcj9NuOnkkiwUbFYsgmkA98l2VAe4ZCbc791Zt8msEcy2fshTKFbU3PM38qpbN4Qi+y5vutJgzHi8PdJEIcA3Ae3unuIuPjVraXJd4o+x3YGtThYUAVFgKkBQBQBQBQBQgKAKAKAKA5b8ov2bD9bj/IxFQSec6AKAKAvHoT9tYT7f8ATTUB6mqSAoSYdAubNlGbt58LVNuqK7I3u9zOoJCgAUCCpJCoByj0s7bxDSHCQSGONFUyMhKs7ML5SQfVC2NuZPdUd8I0Ufc45tKLKbk3J1JPM95NRXyWao696Fd9GlPzCZixCloWOpAX1oyedhqPAjsorspJI67VyhxPb+2lxO0cS0iqnzYCBRmv0gRpOsbiwNyfw4g1k+zWJVsPCvzeWdpuszWvYE5r6ZdCSPKwPGqnTFFuwW0JsRh4wsiyFYySmck3UkZjlYFToDqCOGlE+C7Ow4QdRP5V/AVqjz32ysbV3rIkKQgWW4LnUkjjlHC3eeNebn1suYwNoYvdiYHbc1xds47CBqPgP9XFcmPV5lK27NJYo0WqKQMAw4EXr24SUlaOVquDOrkBQBQCO4AuSAO/ShKTfCI3E7dgT3i38ov9/CrKLZ1Y9Fln0jRhd5Y5JFjVHuxsDYW+OtHBovl9PyYouUq4JqqnAFAFAct+UX7Mh+tx/kT1BJ5zoAoAoC8ehP21hPt/001AepqkgKEhQBQgKAKAKEhRg5ZtnaKCTFRdGZLzNnZlZbXY8TxKjRdBrYcjWEtz4R1wrbZQNq4MuCHw8SmzOos4JS5UE9bNY8fI1EMe3tkTd+wei7Bk7VwpjTLleVmCk2EYiZWPWJ6tyB8fCtUYSPSVXMzjnpmwkUEhlRAr4mKzkcGKPa5HC9nGtqzmbQOd7BljKiOQyFRJmIjy3YMLe8CDY93OqM6IHTNrzLGkTYWQlVja+dQsiEZcgsFFzrrccuJqWXjuVtktuRvdK8IjlJaWJikgCEhVC9U5xyIAsbdt6eSqMliUivbwbbWGaQhAxBkdQWy6BlJuLcAHBsLHQ6iuBaZOVs38bURlgNpST/4sloz1iv8AhxqLcCPe8Wue+t3CMeImuOKStnT9yiojZI2DRjKykHMOte+UjS2g4dtb4ZWqOTVwpp/JZK3OMKAZbYxRihd1tcWtfhqQP61MVbN9NiWXIosqi4p5Dd2JPf8A0HAVaSo93wQxqoo0YsVMWb4mb904r4gH91WP9P61bJ0c3qkqw18l4rE+cCgCgOW/KL9mQ/W4/wAieoB5zoSFAFAXj0J+2sJ9v+mmoD1NUgKEBQAKEi0Bi7AAk8BqfCobS5ZDGOG2xA5AWTU6AEFT5EVSGSMumZxyRl0Pq0NDnu+OypRjRMnVDhDnFhrGp+j10B53IOnC9qo7Ts6Mclto5bvftN3nEzsLkWAHqhQSByF9Kqy7aLp6MVgizYx0YztG0cEYQ6opu+U2tmPVFyb2B7dYlkjjjul0Yf7jqJ0/ZO11mUH1WIuFJuSBxt22Oh7NO0VrGUZRUou0zG5Rk4TVNexx/wBPW145nw8ULhjF0ucqQQC2UZbjjbLr/cVWTRtFNI5jgekz2UdYfCs6LptM7Tsbpp9nPtHEsrDDR4gxxhdGaBWAMhJswDLwAF8ovVkrVl3kbe0oG7+LxmIlgw12yljK4GgIjewk6uqNdCuhHPkdcpVGNr3Nse5y2/BN76sommCtya50vcqUP+vDsqKrlm7kZbEmSSPI0BmB1WylgGVWF2IHVBBIv31m7u0XUkonU9wcKggMwUhpcoNwV6sYyhQOQBzdupOp0rpwxqJ5+qnunwWatjmCgIneo/8Ahn8U/wCMVaHZ2+nf76Krgmq0z38qNmJFREpjY/3MX6ST+Ufe1WydHH6s/tj/ABLbWR4IUAUBy35RfsyH63H+RPUA850JCgCgLx6E/bWE+3/TTUB6mqQFCAoAoAoDGRAQQeB0Pgahq1QfI2wmz0jJK3ue03sOwVljwwg7RSONId1sXIjeVoWheOYAqwJN7AKFGbPc6DLa9+7vAOObIoLnsvju7XSOU4bc6KWdpp3vkkksHK5csbWzAaBnPHLwUWJraEfk5c2Z5OE6Q92JsoSyZg/0CTRYhJb2zGNyQka6Zr8M4FrMdeIqMrjJOJhDLHBbky07QhRkIUgo2cHts56wuOV7X4W05VjhxKEVFM87Wa/LN+WLOW7c3MkjlzIpaPXUale5h7v4fhWrjTPX0evx54rn7vdMg5sIVkBym9r/ANNaoz0q9y/7rbYeTZuIwLWAKTRox0ylgSSbcRmZifjU+1Hjan1D6fU0+uGRu6+21gneOaIpPpH6t8pAvdivLnfnyvXIoPdyfR4NVDNC17ll2tsWKbDAScwB0g9ZWYagnvY31005V5X1+3PKD7XsVfZz3drFYvB4psLJEeswVXBVCD7rqXIUi3G/DgbHSvXUsc4KaZSGWS4a4PSUCBVAHAAfhXXFquDhfZnViAoCN3kS+Gk7gD5MDVoumdeidZ4lNwLVpM+kzDvEDSs0YQ7HO6coWdlPvKbeIN/71pPo5/U4N4lL4ZcKxPnwoAoDlvyi/ZkP1uP8ieoB5zoSFAFAXj0J+2sJ9v8AppqA9TVJAUAUAUAUAUAzxu1IYgWkkVQONyNNbcONSk2DZjMWqKCWAzEKt+BJ4cPOq99ESko9lcxWH6eN84uGWWJ1sSevoBYNcMMq8baWrx5ZW6yvtXwdqjX6v2dOyvbS2fC7uxUNDAuVhlIDS5RmQ2Izi9sx1BbQjqVtPNJxUkzLxxXaIvYW0szi1gNV00sBoB4DSujT8xs+T9Uk1mosE0OWRbkWfS49VuSsRyYEgEcw+lgWFbvhpmKSar5JnAR9IgzC9x8RbipPaDpfurS75NsWJS7GmP3YhdszICL3PI8+OW1xrzqjs6t+oxLbGXBWtq4dYpBZQF1FhpYEEMOXaahI8TLmk8j38ld3qw4TE4TGDUTAxyH/ADKFF/In/wDIqJ1Z9V6HkuO34Oh7vgFDEwBHDuZW5H4/iO2vjvXtPKGWOWJ9Bk5KdvdsMrPGAQGjZpELH/EiYMzLl0zEOEHbqDrrb0vTs8Xgd99GV2dJ3QjKwkFmOZi6htcqkC4B/dzXI/mrt9P10Ms3i90c+aPNk9XrWjAr28W86wArEOkl0AHFVJNgGI5k8vO1VcvZG0MN8y4Rv2Xjjio5FYLoOjYq1+uV6y/C486umP8AbyKSKlhQVJB4g2PiK3l0fUyalFNEouHd9EUt4f34VkcbzQh+0zbhN38QHWQFUINxc3P3Vfeqoxz+oYZQcOWW4VkeEFAFAct+UX7Mh+tx/kT1APOdCQoAoC8ehP21hPt/001AepakgWgCgCgCgCgKJv7hsNCyyu6J0xZSrX67gcVC8XOgseNx31eOXYqNceNyZW/2ihhsmJgOJiQFYmMiZlQa2CK7WI4X0a1hyqm8tPT82jZ+08UrhY2KDMq2mOYoGewsb3IUEHUnmOAtXO8dzs0e6MKonMPiA+zpG6LJmjgsxcOz5rMTe5IF+0/feq6tJYmkcmLf7o59sOcJ9IQTGHKSBeKg8HH3n4Vjpm4o8T1TBKWTa0/wXs4klOjfUpkdHHvISArjt4hT3ODXY3aPMjHIlTiya2JIRnU8mVxx4SANbzJ86mMk1aZ16eOSMnBxfz0TmUEa1nnkoQbPUhilOk0ytbybPzxlgtuJI+69cGk1f3eKbt/J5PqmhcY+aKrnlHJ94MYxgMB4wTq48GRxbz/CuyT9jt9FtSv5RfN3dqDLFIewBvD1W8uP+7XJ6jpvqNM4+/a/ij6uXJZ9sxKzrcAjopT33V4bWPgWr5rSanZB/wAVZjXNGGztsxxYWOV2C5QY7HixjJSwHbper44TWuWTH/Mna5LaUvereWSeU9YpEuiIDYkHizWOrH7tPE/WSyWb4cEYLkZ/7byxRHpFjOcqC0MkikgEL19AhseJ1IvaqpM0nSZ0fcPCZMMZXDCSdi8mYqQCvUAUqq3WyixIub61046SPN1Em58jz/YCGZpWN1Y3C8Nedz2d1bbuDoWumsSxx7+SYRQBYCw7qqcLbfLFoQAoAoAoDlvyi/ZkP1uP8ieoB5zoSFAFAXj0J+2sJ9v+mmoD1NUkCUAUAooAtQGnG4gRxvI3BFZj4KL1D4Rpji5zUV7nE905OlxZlnhknUB5CFUy9G7nquUv1gDfQf0rkxtuXJ9r6nihi0sYQaT4Xxdfkndo7uxs2IbEtCgSGHo5EiaAB5ncL0sakkuLDTsI0raUO7PHwapwUVii223adPhfDNO0d0IQMSkCNJLCmFjUBmY9LJq8hF/VswNuAtUOCp0bY/UJ3CWRJJuT6XS9h9htz8GzTqpZQsyQxhZDeVkjEkqrc2LE5l14WNPGpGM/UM0drpcpt8LhN8f0NGwt2sLLB08sJjDvOzL08itDDFcZguplYMBe9vW8BURxxronV6mccuxU6S/4qm3/AIGmF3SX5lLIxczdHJNEM+UxxpYoGjvcs4ueFhbkajx/abZNdB6iKUI7VSfC5fvyP5N1cOkJlMjl4cLnmj6RwTKyBomFjoNGFuHCpWOPsYvXTlkpQVOXD2rpdroq+9uFGHmWGNnusUXSXdjeVlzMdTpoRpWWV06Pd9KUc+J5JxXbrhdE/uDs0TiNJCzBzNK3Wb1UtGove/rAmssKc50+j43/AFNjxZdesSXCXJUPSwyQ4pYIhaMFr6k6hV5nvzV0KCt0eRosUceSTj0hzuztL6IC/C4+OYn8Pxq8aqme5HosWO3olEakBbqGQu3INbl26cb8hpXiz9GxLI5p8OnX5JilJlVw2NeaTooFMz9Y8bItyWJJOii99B5V2yeLBHdLg2tRLt+yuB+bNPjJpD0K5nSNljQ3uRa12Ym+X1rEjQCtcOXHOLkcuTNkbpFd3A3cOOleSMfN8PE2VmX6QysdTGnSXXq6AuwJtb4a4ouS3SIy5dlV2dP23gCqgAsYbBSL6IQLA+B/HxrPUwmvui+DydRuk277JPYU0rRjpRqugb98Dg1v9XrowSco8l8UpOP3EjWxqFAFAFAFAct+UX7Mh+tx/kT1BJ5zoAoAoC8ehP21hPt/001AepqkgSgCgAUAtCSF3vcfNWQqW6UpFlDZSc7AWvY20vWeV1Eq9VLTNZYdp8fxKKd2RDMka4eVZHBI6PFMDlB1JKroK5qadJf3OzN/qPXTahOEX/JEfjdy8U0zRJI12yOUD9JlsLZpGJFyTqL69lS4yvav8hf6h1kWorHG/wCHQY/cbaECtMJmLWu7K5zEAe8RYkD410Ydif62PH4ZXL67r1HmEaX4I/d7dLH4ghlfLErXGpADc2DX0bvUE1GeONy/U3ROP/Ueryx+2EfjlExPubio5EDtI2clUKytYFtWGbiL2JPbaubbNUmVy+u65UlCPP4QSbv5MQInSQzuoFxiWvY30LWvaw4UdqVe5l/9FrozWJxjz+EEu6svTvDllZ2S9hOWCreyCRj6wFjoe2pqV7aJfr/qCmoKMeOelwO8ZuOVvLNA7i12KYgu4sLXOZbtYVTxZF+1ydX/ANF6hijxFV+EWHcWKLPI0QIijRIkzcbXZ2J8Sb00eNx3N+7PLeqlq8888+6KbtndJ9oQyTFRGGdpOlZgthmJ0B93Ui9aQcmrSObT58kYNqPF3bNO73o2xKqGVtDqOkspPfYAnztVo737UdMNVqJLiKNW2tgYhCcOydaVSo5gk8CLcdezWjm19sjVeouPE1z7fklNh+j7GQRnKVuTnsWAINgLC2nAczXHqdDLO037FPqNQ/u2/wBxntrdTaGMjd5pyqRFsyWChcovw97Tn5VpjweNWkVWuz03sXBZNypZsNgFSGBGihzlneTKzG5dmtbv+6uiGSTjaXBg9Zlyp5NvBP4baWNmQMmFjUEf+65F79gAvbxq6nOS/ZJhlzTVqP8AUeYDazGQQTxdFKQStjmSQDjlbtHZVoz5pqjWGZ7tk1T/ALEtWp0BQBQgKAKA5b8ov2ZD9bj/ACJ6gk850AUAUBefQn7awn2/6aagPUlSQFAFBQUAXoTdEJtsZ8RhIuWdpj9mht95rGfMkjlz85Ix/mPcWwbpugZfnCqFvxK6FlB8z51L567NJtNPb2QW7yyDATNHc4hjKWvq/SA21v71rVnjvxv5OXApeB1+0Z7oCeOGZ8UXC8R0pJIABzHragHSmLck9w0qyRhJ5f7i7bjlGBiXBhstkv0d82TLfTLrxte3fTJu2LaTnUvCli/t8DLdvCYv5zEMSZMscbumY3Fz1dTzbrc9RVMccm77jHSwzb15OkiYwj4SXGMVVjPHe7HNYZeoba2524Vqtkpfk6Y+GeZtftI2JKWTFvDrLmdBwvmRAFH9fjU3addl7tScOyO3MTEIsz4lpAmhHSk3Frlj1tQOHlVMKkr3HPpFkSk8nX5Nu6YjjwbyvZY5HkY30AUtkAPwFTipRtl9KoxxuT6bMN5IX+cYVCQMMXUZQLLnBuobtB0sOHGoyftL4I1EX5IX+yat74sa08a4fpAlhYoSoD3Ny5HIC3HSmVTcltK6qOZzSh0T8rRmeJWsZVSR17R6ik/G58jWvFpPs67i5pPsqW049onFSNH0oC3K2J6PJbSw9VifO9c0ll3No87LHU+VuNkvg2jh2evzrMVkBz3zFmMjE621vY/dWqajD7jpi1DT/rffv+Y5Iw6YSNY1ywytGAGvqsrgm+bXUE8eVW+1R4NF44Y0o9Mjt9I8Y0kS4fpAluMZK9e/vEcBa3HSs8298RMNZHNKUVjuh9tq5lwUd7yiTOSOSqhznuBq8u0vc1zcygveyerf2Ov2CgCgCgChJyz5RfsyH63H+RPUA86UAUAUBePQn7awn2/6aagPU1qkgW1CQtQGEtwCRa9udUyS2xbRKVvk1xSk6EfG9xWOLUb3VEyhSsYY/ZcjzCaObIQmQdQNoTc8Tbs8q0lBt2mck8MnPenVDOLd+ZHMqYm0jk52KAhhpYZb2FiDr31VYmnaZmtNOL3KXJA7HbFtjJ44pArLmMrEAJmDlUBUC12UBr9hNQsc07TENNkjLcpdmO1TjJbpNIgUGxHSxqtweYXU/HyrKW6XDZ05NA8q5yf2NuBfEQDo0m4X6uW6jXkXt91Vc3DhMjFoMsV9kuPyMdubbxuG+lzl2YEWAXgCDZQV7+Q1tVY5ZuVvgrk0mWEr3kp6N3Lxy4p1sXAOvH3mPnoa3wxq2c+mxbJSbILZeNxXTOcN6zuQQWsGPrG4KkaXNZRck7T7ObHujK4vljzHTbRnCrKt0bXLHqSAfWKKtyOwnSrT3y7Jz+Wcff8AgYyNiDGMOek6PkvQ62Vrk9uh461WpVt5Od+bbsa4M8RNiWiEF5GUEJlMNiCuoAOpzC3jUtya2lnLM4qDsc4DauOa8aOWKqSbopYAcdTxP31aE5PhM6MeXLL7Uxh80xJdZx0rOwzB1Us1tQL5T1Rx0NUcZXu5syeOblv5sc4vbW0MpBzKvNsmRrG4BJy6XsfKjyZaqjaWbJXLf9DHGySyoI5HlKoA1ugAygCwYkNe1uZo90lTZjkcpx2yb4/A7wmElxidD05yR5SAYlUcCF9VtdKvFPIqs0hCWdbU+ET0GzcYqhRjAQNLtGGPmTr8a2UZ/J1xxZkq3DzZuyViZpCzSSto0j8bfugcFXuFWhCnb7NMeHa7fL+SQrQ2CgChIUAUByz5RfsyH63H+RPUEHnShIUAUBePQn7awn2/6aagPVAqSBbUJC1AFqhgxEY42qqgrsmzK1WIC1SBiMOkTSyKvWlZS1uZVAo+Gn31VuiVyRs2AV36Rh1uqSQ1gGA4cDw04Vi4Ls2jNpUa5MKWJsACwYZr9bQWz34Xv8ahxV9GsZbeiK27s7pMj25ceBNr8uABzXrOULM8kvto37PxYiiOHVeIIvqOIy9laRtRo82pRi1RhsbCdE2cLqM/wZr668tamMGmcsGoy3MkllHWkKG8gVWOhF15gEc9PKrr5NllXLrkWUsVMOS148qm4uL+sb99RTqiHl42o2vnDF8lyAAOtw/eOnvHtqeSXkp3Q1jgZHldFsz8DcdW7Bj41zSzRhJ2Wx4pczj7jsjMSwQqxUICrAZRqTbTiSTrUS1eOzfxyfsNo8ZcFRHfUJ1uH0YsPGzXNXeeKI8cqqh8cO5LHoh9J6xz6kZcoHgB28zWy5V12Rslzx2Lu/s0wqwa12I79AP+9TihtI0+Lxp2Stam4WoSJagC1AR20sa6MqqAQRck301rOcnE6MGKOTs3bNxLSKSwAINtPAH+tTCTaKZsahKojurmJyz5RfsyH63H+RPUEnnOgCgCgLz6E/bWE+3/AE01AeqBUgU1AK/it78LHKYnZldXaMgrwIjWS/8AKVYWPaaq5pM68ehzTjuiuOxqN/MJ1tJRkTpGuliFyCThe98pGlN6NX6bm4654Q5l3wwqwjEEt0RkMStl9ci+ZlHEoACS3YDRzVWU/R+d5HipWlY6x28MMcqw2kdyoc9GhcIjNlVnI4An8DRumZ49LOcd3CXXL7ZFDf8AweXN9LqUABSxIcOVI1tbqNz5VG9HR+is91/3gyl3ywhazGRALAsyHIGMYlC5hfUrY2o5JlY+n5mrVP8A9o27M2zh5w5AdTHkkYSIUORh1Xt2EDTwqtpmeowz063Sarnr/A+w2MgOW0ingFt2sCR8SFPkasnE4/PGT77Ig7y4cu0XRzAiRYetHYLI1iBe/gfCobXR6L0GRw3Wur79iKl3owVmYsy5EElitiQXyWXXU35VVSikSvSNRKqV26JT9pMKFRmZgXkMHq+8tusbcFBYDN/mq29I436TmbaXsrE2pvFhYOkilYhogsjDLe4cgDL+8dRpUuVcDF6VnyxUorh3/YcbW3jw0DRGRj1lLXVcwVQVDZrcLFhRySZGH0vLlvb7cGht88Jkkf6TKjBT1RqxfIANe0cTYaU3mj9HyuSj8/8Ao5Tb+HaWGG7B5kzqCtrCxIDHgGIViB3VzZYRk0y0NDlhjlL2izdHtiDOyl8pVsnWsAzaXy63sLgXNtTXP40+GcS1MLq+jGDFQhC5dcodgW1sDe5HDlWzxpk+aG274JDHbYiivma5VDJlGrFQCdOWtjz5V17kkVnlhFWzJNsQHKRIvWJUd7DS3jTyR+SPNCk77Ej23hmAImUgkAWPEkXH3U3r5Hmh8g+2YAjSdICqEBra2LGw4d/Om9fI80K3WZrtWA57SL1AWbX1QOJ+HOp3L5J8sOeTCTbEI0DhjmyWBGhzIDxPLOvnTeiHmh7M0iSPEMWikV8oAIHK9yP9d1Q6l0dGDUR5oe4GHKviSatFUTklukOLVYyOV/KM9mw/W4/yJ6gk850AUAUBefQl7awn2/6aagPVIoBaAgtrbp4TEO7yxktIqoxDFbhGDC1uB0GvYKq4puzrw6/PhSjB8K/7mvE7n4V2kYq46UWcCRgpGUJwB00A8qbEWj6hnikk+ujF9ysGRYxnLdyEzsEUyAByqg2F7fee01GxEr1HOnafPz78G6XdfDs0b2kDRIsYKyupZFN1WTKRnAPb31akZrWZYppVzz17/j4Gi7i4IDKqOoujdV2HWRWVW8bO3jUbEa/pPUXbd/y+f/Dd+xuEzF2RmJtcO7spIjEeYrexbKLXqFBFP0hnqk6NmB3Xw8SOih/pAoYtIzNlT1FDE3CjspsVUZarPPUKsnX44N0G78CMrKGBS1us1rjNYkXsT1j51CxpHDHBCLtGvF7tYeQSBla8rpKSHZWEiKFVlIN1IAHCrONnoQ1eSG2n0q/l+RodycFly9FfqhBdmJAystwb8SGbXt15VHjia/pLUdqQTblYNic0bENn99hYuQWIsdDcDyFR44kL1LOlSY4xu6uFlZmkjLMwC5ixuAEKXBvobE6/GpcIvszhrs8Fti6Rtk3dwzOkjQqWjDBbgW1KksRwLdUdY61baii1eaMXFS77Gq7nYUKyjpQHJYgSuNSxYkWPaTpw1qNiNn6jmtO1x+DWm5eETKyIwZDGVOd7r0YsoGvDu53PbUbEif0lqJJpvu+K+RzLsOJiSQbkknrEXzZbg2OqnKundUPHFnmSwQk+RzJsOFolhYHKCWsGI1bNfx9Y1LgmqDwQcdvsZYnY8TlrhusnRsAzAMoBAuAbEgE61LgmWeGDNcmwYC2cqcwbP6xtmuDe3iBVfEiHpsbFi2DCMpAYFQoBDsDZVygXvqLce2p8aRHgh2kZQ7CgVHjVSFe17E30NxY8rGixxCwwScfk2YfY8SMzBTdgwNyWFnIL2B0GYgE02JExxQXRph3dw6+qh9z3j7jZgfG4FzzsKjxxKrT40OsDs2OL1ARdUTUk6JfL/wARqyikXjjUeh5VjQKA5V8o32bD9bj/ACJ6A85UAUAUBefQl7awn2/6aagPVIoBaAKALUAUAUAhoOiNO2Y/83lWfkRi88R3hcQJFzLe17a1dO0aQkpK0b7VJYCKALUAlqEBagC1BQWoKAigoxy0JM7UAlqEhagI3br2jA7WH96pk6MM7e3gZ7BQmQnsX8TVMd3yY6dO+SwVsdgUAUAUAlAcr+Ud7Mh+tx/kT0B5xoAoAoC8+hL21hPt/wBNNQHqkUAtAFAFAFAFAasU9kY9gP4VD6KzdIqWQ9h8q5qZ521ll2Ulol8L+ZvXRFUjvxKoIbTbyYVWKtMoZSQRroQbEcKq8sF2yktVii6cjD9qMH/HXyb+1PND5K/V4f3hP2pwf8dfJv7VHmh8j6vD+8KN6cH/AB18j/anmh8j6vF+8b8FtvDzNkilDNYmwB4DnqO8VaM4y4ReGfHPiLsdYzFpEhkkYKotcnvNhVnJR5Zec1FWyN/anB/x18m/tWfmh8mP1eH94X9qMH/HXyP9qeaHyPq8P7wftRg/46+Tf2p5YfI+rw/vB+1OD/jr5H+1PND5H1eH94cYHbUEzZIpAzAXsAeHxHfVo5Iy6ZpDPCbqLskKuagRQCAUBlQBQBQBQBQHKvlHezYfrcf5E9AecaAKAKAvPoS9tYT7f9NNQHqkUAtAFAFANdoN1R3mrQXII+9a0Wod7OGpPd+NUmQPrVmQYTOFUseCgk+AF6hsrJ0rOc7IwWGmw0+IlR+kjzuxzEKWOZwAAfDzrihGMots8fFDFlxym1zybINi4aJYBiekeTEEAKhsEzEAX5m2YVKxQjV+4jpsUFHyctgN1kGImDuwghUOSPWIIzBfuP3dtR4EpO+kT9FFZJW/tRrxuzMKcMuKiWRUD5WVm1IvluDrY3sfOjhjcd6KzwYXjWSPRM7npC+InlhTKihY17D2kCwy3CqfEmtcCjubidOiUJZJSgjP0i4i0CJ++/3KCfxtTUv7aJ9RnWOvkid1djRyQPI8QlfPZFLlNABfUfHyrPDjTjdHPpMMJQ3NWxxsfY8Ek83S4fokjEa5C5PXYnXMDrcW86tDHGUnaNMWnhKct0aSDYu6idNL046gZljUkjPzzaa2At99IYEpNsjDoo75Oa49kQO0sZhzGY4ocp6RzmzMbAEBbX4gi+nAVhKUa2pHJlyY9uyK+Sf9G2G1mk/lQfeT/wAtbaSPbOr0yHDkbdt4hjO9mNgbaE8hat5Pk+z0mKPiVoY9M37x8zVbZ0eKHwTm6ly7sSTZQOJ5n/pV4Hn69Rikki0VoeWFAFAFAJQHKvlHezIfrcf5E9AecqAKAKAvPoS9tYT7f9NNQHqkUAtAFAFAMdongPGrwAzy1pwWH+z10PefwrOb5IY7qhBDb3YnJhJjzK5B/vnL/Wsssqgzn1ctuKTKBhtrKuDkwwRs8jXLaZbXXTjfgLcOdccclQ2o8aGdLA4Jcskm3mhbonmwzNNCLKc1lvpr9wPA2q/mjw2uUbvVwdOceUNtn7zWaczoXSfRgpsV0KgDutpx5VEc3e73KY9Y90t64Y22vtpZIkw8MfRwob2JzMx11Y/E9vGq5Mqa2xM8+oUo7IKkXH0fYfLhc38R2b4Cy/8ALXTp41A9P0+NYr+SF9IDNJOkaAnImY25Z2tr5DzrLUW3Ry+otyyKK9kNNm41YljY7PLSRjRxmBv+8wy9/OojLal9pTFl2JfZbRjLtido5lMTCSaQMW9UL0eRstjqLADj21Hkk0+OSr1M9rpct/4HKbwYkyNLJAxOToUADKqGQ+t1hrcqPKp8sn2jRarI5OTj7UitnASjjG/P3SeHwrnabfR57xz+Dom4WHy4QN++zP5HKPuWu/TqoHuaCFYl+SAnkzMzdpJ8zeofLPsscdsEZxYSRhdI2bwBsfjwo066KSz449yRYt3oJIlbPEQWPavADuPjURnNf8Ty9ZkhkktrJqOQnipHlWuOTkrao4mZ5u41oQGbuNAGbuNAGbuNAcr+Uaf/AC2HT/5cf5E9AecqAKAKAvPoS9tYT7f9NNQHqgGgMqAKAKAKAxc2F6rJ0mwlbGuGxRZrWFcmHUPJKqNZ49qsd12GRXN9sFNNEkcKF+vdrFRYAG3rEc/wrLPFyVI4tbjnkhUCt4TZW0I06MYYEa8WjvqQx1z8LgeVYRx5IqqOKGHPFVtNz4LaB1OEQm4OpjPC2mr8NKnbk+C3izfumJ2dj8tvmaDjreO5Jvx6/fTbk+CPFn/cQ22hsPHS2vhFWxJ6jRi97f5+776rLFkfsUnps0+40X7YuEMUEUZFiqKD/NbX7711wjUUj18MNkEim7d2TjnxMskUb5WIAIdBdVUAe9e3E69tc2THkc7R5mowZpZHKKGUGw9oAi8UhUG5AlQE63Njn41RYsvuZR02oTTY+bY+IJ/9NMBcmwnj4kWPFteNX8cvg28E3/xf9TVi9jYxh1IZwbqQWmjPA316/HhbwqHjn7IrPBma+1P+ozXYO0QCBG9jxHSR66W/f7NKr4cpl9NqapHQNn4Xo4Eh5rGFNuRtqfOu2KqNHt4VsjFfBpwWw4YusesRzbgPAcPjRRSOvJqp5ODbitohQCuQA6BpHEaHwOpb4C3fRtIwbjH9tjTZWLxTYiSOURGJVVg8eYdZvd6xNzbU+I7arFytpnRkjhWJSg3b9mS+HxKOCUZWAJUlSDYjiNOdXVHIpKXKFnxKJYuwW5Ci5tdjwA7zQlyS7Nl6kkL0AXoDlfyjvZkP1uP8iegPONAFAFAXj0J+2sJ9v+mmoD1QKkgyqCRaAKAKAQioasGKRgcABVVCK6RLbfZnVyBLUAUAtAFAJQC0AlALQBQCGgMM1+Hn/agMgtqApn7SCXHPDIkgii6qqsbv0kgNizhQbKPdHA8TytlvuVHqS0e3TxyJq3+VwiQ3hwckvRyRxPnVXA1isM1tHR7gg24jUUyRvlHg6rFKTW3tDdsFjOlU9a2aEnI4WMRhQHXJfjmufDyqm2d8mTx5t3/aGg2RjEhRIw4Ijk0SQLklLXBbXrDLwFRsklRTw5YxVfn+o7lwmIW7vIwPzhMoaQZRD1STa/G9xbjUuLqy/iyVbfNmC4XF5AG6UtnBktMo6Vev/ha9QerppwptnQ25K/zz3/AwOBxpy5pHuBB6sgA9c9JfXUhCNeZ7abZEePK+38Fg2BHIsWWUksGksS2Ylc5y3PPS1aQTqjqwqSjUjnvyjvZkP1uP8ietDY840AUAUBePQn7awn2/6aagPU4qSDK9CRagBQBQC0AUAUAUAUAUAUAUAUAUAUBgX7NaAMpPHyoDO1AIaATLQC2oAtUALVIMJoQwseFwfIg/0p2Q0n2MRsWLsbn7x5i3/XxJ7arsRn4oguxohwBHDnfQNcDW+nK3YLU2oeGI6wuFEYyre1ydTc3NSlReMVFcHMvlHezIfrcf5E9SWPONAFAFAXj0J+2sJ9v+mmoD1NUkC0AoqALQkWgCgCgFoAoAoAoAoAoAoBvOxvxoBYteNAbqAWgCgCgCgCgCgCgCgCgCgCgOVfKO9mw/W4/yJ6A840AUB//Z',
					}}
				></ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container2: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingVertical: 10,
		paddingHorizontal: 5,
		marginTop: 10,
	},
	header: {
		backgroundColor: '#43cc21',
		height: 35,
	},
	header2: {
		backgroundColor: '#43cc21',
		height: 50,
		paddingTop: 15,
		paddingLeft: 20,
		color: 'white',
	},
	topBar: {
		backgroundColor: 'black',
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
