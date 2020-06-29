import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Icon } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Services extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<WebView
					style={{ flex: 1 }}
					javaScriptEnabled={true}
					source={{
						uri: 'https://beta-ltd.web.app/',
					}}
					domStorageEnabled={true}
					allowsFullscreenVideo={true}
				/>
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
