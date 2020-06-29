import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Icon,
	TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default class Mpesa extends React.Component {
	state = {
		hasPermission: null,
		type: Camera.Constants.Type.back,
	};

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasPermission: status === 'granted' });
		this.getPermissionAsync();
	}
	handleCameraType = () => {
		const { cameraType } = this.state;

		this.setState({
			cameraType:
				cameraType === Camera.Constants.Type.back
					? Camera.Constants.Type.front
					: Camera.Constants.Type.back,
		});
	};
	takePicture = async () => {
		if (this.camera) {
			let photo = await this.camera.takePictureAsync();
		}
	};

	getPermissionAsync = async () => {
		// Camera roll Permission
		if (Platform.OS === 'ios') {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!');
			}
		}
		// Camera Permission
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasPermission: status === 'granted' });
	};

	pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
		});
	};
	render() {
		const { hasPermission } = this.state;
		if (hasPermission === null) {
			return <View />;
		} else if (hasPermission === false) {
			return <Text>No access to camera</Text>;
		} else {
			return (
				<View style={{ flex: 1 }}>
					<Camera
						style={{ flex: 1 }}
						type={this.state.cameraType}
						ref={(ref) => {
							this.camera = ref;
						}}
					>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'space-between',
								margin: 20,
							}}
						>
							<TouchableOpacity
								style={{
									alignSelf: 'flex-end',
									alignItems: 'center',
									backgroundColor: 'transparent',
								}}
								onPress={() => this.pickImage()}
							>
								<Ionicons name="ios-photos" style={{ color: '#fff', fontSize: 40 }} />
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									alignSelf: 'flex-end',
									alignItems: 'center',
									backgroundColor: 'transparent',
								}}
								onPress={() => this.takePicture()}
							>
								<FontAwesome name="camera" style={{ color: '#fff', fontSize: 40 }} />
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									alignSelf: 'flex-end',
									alignItems: 'center',
									backgroundColor: 'transparent',
								}}
								onPress={() => this.handleCameraType()}
							>
								<MaterialCommunityIcons
									name="camera-switch"
									style={{ color: '#fff', fontSize: 40 }}
								/>
							</TouchableOpacity>
						</View>
					</Camera>
				</View>
			);
		}
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
