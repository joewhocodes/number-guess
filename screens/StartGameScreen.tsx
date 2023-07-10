import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';

import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

interface StartGameScreenProps {
	pickedNumberHandler?: ((number: number) => void) | undefined;
}

const StartGameScreen = (props: StartGameScreenProps) => {
	const [number, setNumber] = useState<string>('');

	const onEnterNumber = (text: string) => {
		setNumber(text);
	};

	const resetNumber = () => {
		setNumber('');
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(number);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number!',
				'Number must be a number between 1 and 99',
				[{ text: 'Okay', style: 'destructive', onPress: resetNumber }]
			);
			return;
		}
		if (props.pickedNumberHandler) {
			props.pickedNumberHandler(chosenNumber);
		}
	};

	return (
		<View style={styles.rootContainer}>
			<Title text='Guess My Number' />
			<Card>
				<InstructionText style={styles.instructionText}>
					Enter a Number
				</InstructionText>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType='number-pad'
					autoCapitalize='none'
					onChangeText={onEnterNumber}
					value={number}
				/>
				<View style={styles.buttonsContainer}>
					<PrimaryButton onPress={resetNumber}>
						chevron-back-sharp
					</PrimaryButton>
					<PrimaryButton
						onPress={confirmInputHandler}
						number={number}
					>
                        checkmark-sharp
					</PrimaryButton>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center',
	},
	instructionText: {
		margin: 12,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default StartGameScreen;
