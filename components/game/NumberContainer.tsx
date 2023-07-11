import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const NumberContainer = (props: { currentGuess: number }) => {
	return (
		<View style={styles.conatiner}>
			<Text style={styles.numberText}>{props.currentGuess}</Text>
		</View>
	);
};

export default NumberContainer;

const styles = StyleSheet.create({
	conatiner: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: 24,
		borderRadius: 8,
		margin: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
        fontFamily: 'open-sans-bold',
		color: Colors.accent500,
		fontSize: 36,
	},
});
