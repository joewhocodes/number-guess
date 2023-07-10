import React, { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';

import GameScreen from './screens/GameScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState<number>();

    const pickedNumberHandler = (number: number) => {
        setUserNumber(number);
    };

    let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;
    
    if (userNumber) {
        screen = <GameScreen />;
    }

	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.accent500]}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require('./assets/images/background.png')}
				style={styles.rootScreen}
                resizeMode='cover'
                imageStyle={{opacity: 0.25}}
			>
				<SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
