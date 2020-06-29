import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Icon } from 'react-native';
import LottieView from 'lottie-react-native';

export default class DataPlans extends React.Component {
	state = {
		width: 50,
		random: 0.2,
	};

	componentDidMount() {
		setInterval(() => {
			this.setState({
				width: Math.random() * 200,
				random: Math.random() * 100,
			});
		}, 100);
	}
	render() {
		return (
			<View styles={styles.container}>
				<LottieView
					style={{ width: 300, height: 300 }}
					loop
					source={require('../../assets/my-desk.json')}
					autoPlay={true}
				/>
				<View
					style={{
						width: '100%',
						height: 30,
						marginVertical: 50,
						borderColor: 'yellow',
						borderWidth: 5,
						transform: [{ rotate: this.state.random }],
					}}
				>
					<View
						style={{
							transform: [{ scale: this.state.random }],
							width: 100,
							height: 20,
							backgroundColor: 'red',
						}}
					></View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		backgroundColor: '#43cc21',
		height: 35,
	},
	topBar: {
		backgroundColor: 'black',
		height: 60,
		flexDirection: 'row',
	},
});
