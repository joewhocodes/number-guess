import { Dispatch, SetStateAction } from 'react';
import { View, Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import Colors from '../../constants/colors';


interface PrimaryButtonProps {
	type: string;
	setNumber?: Dispatch<SetStateAction<string>>;
	onPress?: ((event: GestureResponderEvent) => void) | undefined;
	number?: string;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={props.onPress}
				android_ripple={{ color: Colors.primary600 }}
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
			>
				<Text style={styles.buttonText}>{props.type}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden',
		flex: 1,
	},
	buttonInnerContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75,
	},
});

export default PrimaryButton;
