import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const DrawerNavigator = createDrawerNavigator();
import { createStackNavigator } from '@react-navigation/stack';
const StackNav = createStackNavigator();
import DrawerNav from './screens/drawer/drawer';
import Homescreen from './screens/homescreen/homescreen';
import CheckBalance from './screens/checkBalance/checkBalance';
import Mpesa from './screens/mpesa/mpesa';
import Tunukiwa from './screens/tunukiwa/tunukiwa';
import MyAccount from './screens/account/account';
import DataPlans from './screens/callingPlans/callingPlans';
import ContactUs from './screens/contactUs/contactUs';
import DataUsage from './screens/dataUsage/dataUsage';
import PlatinumPlans from './screens/platinumPlans/platinumPlans';
import Services from './screens/services/services';

const Stack = createStackNavigator();

function stackNavigator() {
	return (
		<Stack.Navigator initialRouteName="Homescreen">
			<Stack.Screen
				options={{ headerShown: false }}
				name="Homescreen"
				component={Homescreen}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#43cc21' },
					headerTintColor: '#fff',
				}}
				name="Check Balance"
				component={CheckBalance}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#43cc21' },
					headerTintColor: '#fff',
				}}
				name="Mpesa"
				component={Mpesa}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#43cc21' },
					headerTintColor: '#fff',
				}}
				name="Tunukiwa"
				component={Tunukiwa}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#43cc21' },
					headerTintColor: '#fff',
				}}
				name="My Account"
				component={MyAccount}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#43cc21' },
					headerTintColor: '#fff',
				}}
				name="Data & Calling Plans"
				component={DataPlans}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#43cc21' },
					headerTintColor: '#fff',
				}}
				name="Contact Us"
				component={ContactUs}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#43cc21' },
					headerTintColor: '#fff',
				}}
				name="My Data Usage"
				component={DataUsage}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#43cc21' },
					headerTintColor: '#fff',
				}}
				name="Platinum Plans"
				component={PlatinumPlans}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
					headerStyle: { backgroundColor: '#43cc21' },
					headerTintColor: '#fff',
				}}
				name="Services"
				component={Services}
			/>
		</Stack.Navigator>
	);
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
		};
	}

	// COMPONENT DID MOUNT

	async componentDidMount() {
		setTimeout(() => {
			this.setState({ isReady: true });
		}, 1000);
	}

	render() {
		// PRELOADER COMPONENT STARTS
		if (!this.state.isReady) {
			return (
				<ImageBackground
					style={{
						height: '100%',
						width: '100%',
						backgroundColor: 'rgba(0,0,0,1)',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					resizeMode="cover"
					imageStyle={{ opacity: 0.4 }}
					source={{
						uri:
							'https://images.unsplash.com/photo-1555679486-e341a3e7b6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
					}}
				>
					<Image source={require('./assets/icon2.png')} />
					<Image source={require('./assets/831.gif')} />
				</ImageBackground>
			);
		}
		// PRELOADER COMPONENT STARTS

		//MAIN VIEW
		return (
			// <Homescreen />
			<NavigationContainer>
				<DrawerNavigator.Navigator drawerContent={() => <DrawerNav />}>
					<DrawerNavigator.Screen name="stackNavigator" component={stackNavigator} />
				</DrawerNavigator.Navigator>
			</NavigationContainer>
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
});
