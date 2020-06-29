import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Icon } from 'react-native';

export default class PlatinumPlans extends React.Component {
	render() {
		return (
			<View>
				<View style={styles.topBar}>
					<Text>PlatinumPlans!!!</Text>
				</View>
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
