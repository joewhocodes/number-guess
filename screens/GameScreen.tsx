import { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

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

const GameScreen = (props: { userChoice: number, onGameOver: Function }) => {
	const initalGuess = generateRandomBetween(
		1,
		100,
		props.userChoice
	);

	const [currentGuess, setCurrentGuess] = useState<number>(initalGuess);

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver()
            Alert.alert('Game Over!', 'You won!', [{text: 'Okay', style: 'cancel'}]);
        }
    }, [currentGuess, props.userChoice, props.onGameOver]);

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
			<Card>
				<InstructionText>Higher or Lower?</InstructionText>
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
			</Card>
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
