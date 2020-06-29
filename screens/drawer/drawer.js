import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Icon,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
// import { DrawerActions } from '@react-navigation/drawer';
// import { Header } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class DrawerNav extends React.Component {
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
		console.log();
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}></View>
				<View style={styles.topBar}>
					<TouchableOpacity
						style={{ width: '20%' }}
						// onPress={() => this.props.navigation.navigate('Homescreen')}
					>
						<Ionicons
							name="md-close"
							style={{ color: '#00910f', fontWeight: 'bold', fontSize: 28, margin: 15 }}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<View
						style={{ backgroundColor: '#00910f', width: 120, height: 120, borderRadius: 60 }}
					>
						<Ionicons
							name="md-person"
							style={{
								color: 'white',
								fontSize: 80,
								marginTop: 15,
								marginLeft: 30,
								fontWeight: 'bold',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						/>
					</View>
					<Text
						style={{
							color: 'white',
							backgroundColor: 'rgba(0,0,0,0.4)',
							width: '100%',
							height: 30,
							paddingTop: 5,
							textAlign: 'center',
						}}
					>
						JACKSON KARANJA
					</Text>
				</View>
				<ScrollView>
					<View style={styles.navSection}>
						<Ionicons
							name="md-home"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Home</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="md-trending-up"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Settings</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="md-home"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Home</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="md-person"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>My Profile</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="ios-cash"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Mpesa</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="ios-people"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Services</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="ios-finger-print"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>My Account</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="ios-cloud-upload"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Net Perform</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="ios-cellular"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>My Data Usage</Text>
					</View>

					<View style={styles.navSection}>
						<Ionicons
							name="ios-bulb"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Knowledge base</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="md-globe"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Store Locator</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="ios-chatbubbles"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Tell a friend</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="ios-stats"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Feedback & rating</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="md-alert"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>About Us</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="md-call"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Contact Us</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="ios-options"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Back to Blaze</Text>
					</View>
					<View style={styles.navSection}>
						<Ionicons
							name="ios-log-out"
							style={{
								color: '#b7a5a5',
								fontWeight: 'bold',
								fontSize: 23,
								marginLeft: 15,
								marginRight: 15,
								marginTop: 7,
							}}
						/>
						<Text style={{ color: '#b7a5a5', margin: 10 }}>Logout</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		zIndex: 1,
		backgroundColor: 'rgba(0,0,0,0.8)',
	},
	header: {
		backgroundColor: '#00910f',
		height: 35,
	},
	topBar: {
		backgroundColor: 'rgba(0,0,0,0.2)',
		height: 60,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	navSection: {
		display: 'flex',
		flexDirection: 'row',
		paddingLeft: 20,
	},
});
