import React, { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors.ios';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState<number>();
    const [gameisOver, setGameisOver] = useState<boolean>(true);
    const [guessRounds, setGuessRounds] = useState<number>(0);

    const [fontsLoaded] = useFonts({ 
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if (!fontsLoaded) return <AppLoading />

    const pickedNumberHandler = (number: number) => {
        setUserNumber(number);
        setGameisOver(false);
    };
    
    const gameOverHandler = (numberOfRounds: number) => {
        setGameisOver(true);
        setGuessRounds(numberOfRounds);
    };

    const startNewGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(0);
        // setGameisOver(true);
    };

    let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
    }

    if (gameisOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
    }

	return (
		<>
			<StatusBar style='light'/>
			<LinearGradient
				colors={[Colors.primary700, Colors.accent500]}
				style={styles.rootScreen}
			>
				<ImageBackground
					source={require('./assets/images/background.png')}
					style={styles.rootScreen}
					resizeMode='cover'
					imageStyle={{ opacity: 0.25 }}
				>
					<SafeAreaView style={styles.rootScreen}>
						{screen}
					</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});