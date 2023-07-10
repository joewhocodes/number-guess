import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
	const pressHandler = () => {
        console.log('pressed');
    };

    return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={pressHandler}
				android_ripple={{ color: '#640233' }}
				style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden',
		flex: 1,
	},
	buttonInnerContainer: {
        backgroundColor: '#72063c',
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		textAlign: 'center',
	},
	pressed : {
		opacity: 0.75,
	},
});
 
export default PrimaryButton;