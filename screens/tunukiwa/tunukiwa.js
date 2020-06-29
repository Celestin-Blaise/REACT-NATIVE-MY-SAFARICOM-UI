import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Icon,
	Dimensions,
	ScrollView,
} from 'react-native';
import {
	LineChart,
	BarChart,
	PieChart,
	ProgressChart,
	ContributionGraph,
} from 'react-native-chart-kit';

const data = [
	{
		name: 'Seoul',
		population: 21500000,
		color: 'rgba(131, 167, 234, 1)',
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	},
	{
		name: 'Toronto',
		population: 2800000,
		color: '#F00',
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	},
	{
		name: 'Beijing',
		population: 527612,
		color: 'red',
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	},
	{
		name: 'New York',
		population: 8538000,
		color: '#ffffff',
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	},
	{
		name: 'Moscow',
		population: 11920000,
		color: 'rgb(0, 0, 255)',
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	},
];

const chartConfig = {
	backgroundGradientFrom: '#1E2923',
	backgroundGradientTo: '#08130D',
	color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};
export default class Tunukiwa extends React.Component {
	render() {
		return (
			<ScrollView>
				<View>
					<Text style={{ textAlign: 'center' }}>Line Chart</Text>
					<LineChart
						data={{
							labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
							datasets: [
								{
									data: [
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
									],
								},
							],
						}}
						width={Dimensions.get('window').width} // from react-native
						height={220}
						chartConfig={{
							backgroundColor: '#e26a00',
							backgroundGradientFrom: '#fb8c00',
							backgroundGradientTo: '#ffa726',
							decimalPlaces: 2, // optional, defaults to 2dp
							color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
							style: {
								borderRadius: 16,
							},
						}}
						bezier
						style={{
							marginVertical: 8,
						}}
					/>
				</View>
				<View>
					<Text style={{ textAlign: 'center' }}>Line Chart</Text>
					<LineChart
						data={{
							labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
							datasets: [
								{
									data: [
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
									],
								},
							],
						}}
						width={Dimensions.get('window').width} // from react-native
						height={220}
						chartConfig={{
							backgroundColor: '#43cc21',
							backgroundGradientFrom: '#43cc21',
							backgroundGradientTo: '#ffa726',
							decimalPlaces: 2, // optional, defaults to 2dp
							color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
							style: {
								borderRadius: 16,
							},
						}}
						bezier
						style={{
							marginVertical: 8,
						}}
					/>
				</View>
				<View>
					<Text style={{ textAlign: 'center' }}>Line Chart</Text>
					<LineChart
						data={{
							labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
							datasets: [
								{
									data: [
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
									],
								},
							],
						}}
						width={Dimensions.get('window').width} // from react-native
						height={220}
						chartConfig={{
							backgroundColor: '#43cc21',
							backgroundGradientFrom: '#43cc21',
							backgroundGradientTo: '#ffa726',
							decimalPlaces: 2, // optional, defaults to 2dp
							color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
							style: {
								borderRadius: 16,
							},
						}}
						bezier
						style={{
							marginVertical: 8,
						}}
					/>
				</View>
				<View>
					<Text style={{ textAlign: 'center' }}>Line Chart</Text>
					<LineChart
						data={{
							labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
							datasets: [
								{
									data: [
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
									],
								},
							],
						}}
						width={Dimensions.get('window').width} // from react-native
						height={220}
						chartConfig={{
							backgroundColor: '#43cc21',
							backgroundGradientFrom: '#43cc21',
							backgroundGradientTo: '#ffa726',
							decimalPlaces: 2, // optional, defaults to 2dp
							color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
							style: {
								borderRadius: 16,
							},
						}}
						bezier
						style={{
							marginVertical: 8,
						}}
					/>
				</View>
				<View>
					<Text style={{ textAlign: 'center' }}>Bar Chart</Text>
					<PieChart
						data={data}
						width={Dimensions.get('window').width}
						height={220}
						chartConfig={chartConfig}
						accessor="population"
						backgroundColor="transparent"
						paddingLeft="15"
					/>
				</View>
			</ScrollView>
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
