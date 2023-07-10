import { ReactNode } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import Colors from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

type IconName = 'md-remove' | 'md-add'; 

interface PrimaryButtonProps {
	setNumber?: Dispatch<SetStateAction<string>>;
	onPress?: ((event: GestureResponderEvent) => void) | undefined;
	number?: string;
	children: ReactNode;
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
				<Ionicons
					name={props.children as IconName}
					size={24}
					color="white"
					style={styles.icon}
					/>
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
	icon: {
		textAlign: 'center',
	},
});

export default PrimaryButton;
