import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
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

	const { width, height } = useWindowDimensions();

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

	const marginTopDistance = height < 380 ? 30 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior='position'>
				<View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		marginTop: 20,
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


