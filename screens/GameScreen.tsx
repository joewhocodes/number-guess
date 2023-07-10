import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min: number, max: number, exclude: number) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props: { userChoice: number }) => {
	const initalGuess = generateRandomBetween(
		minBoundary,
		maxBoundary,
		props.userChoice
	);
	const [currentGuess, setCurrentGuess] = useState<number>(initalGuess);

	const nextGuessHandler = (direction: string) => {
		if (direction === 'lower') {
			maxBoundary = currentGuess;
			generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		} else {
			minBoundary = currentGuess + 1;
			generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		}
		const newRandomNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRandomNumber);

		if (
			(direction === 'lower' && currentGuess < props.userChoice) ||
			(direction === 'higher' && currentGuess > props.userChoice)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong...', [
				{ text: 'Sorry!', style: 'cancel' },
			]);
			return;
		}
	};

	return (
		<View style={styles.screen}>
			<Title text='Opponents guess' />
			<NumberContainer currentGuess={currentGuess} />
			<View>
				<Text>Higher or Lower?</Text>
				<View style={styles.buttonsContainer}>
					<PrimaryButton
						type='-'
						onPress={nextGuessHandler.bind(this, 'lower')}
					/>
					<PrimaryButton
						type='+'
						onPress={nextGuessHandler.bind(this, 'higher')}
					/>
				</View>
			</View>
			{/* <View>
				<Text>Log Rounds</Text>
			</View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
    buttonsContainer: {
        flexDirection: 'row',
    },
});

export default GameScreen;
