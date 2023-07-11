import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

const NumberContainer = (props: { currentGuess: number }) => {
	return (
		<View style={styles.conatiner}>
			<Text style={styles.numberText}>{props.currentGuess}</Text>
		</View>
	);
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	conatiner: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: deviceWidth < 380 ? 12 : 24,
		margin: deviceWidth < 380 ? 12 : 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
        fontFamily: 'open-sans-bold',
		color: Colors.accent500,
		fontSize: deviceWidth < 380 ? 28 : 36,
	},
});
