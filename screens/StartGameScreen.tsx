import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
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
            Alert.alert('Invalid number!', 'Number must be a number between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetNumber}]);
            return;
        }
        console.log('valid number!');
    };

    return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType='number-pad'
				autoCapitalize='none'
                onChangeText={onEnterNumber}
                value={number}
			/>
			<View style={styles.buttonsContainer}>
                    <PrimaryButton type='Reset' onPress={resetNumber}></PrimaryButton>
                    <PrimaryButton type='Confirm' onPress={confirmInputHandler} number={number}></PrimaryButton>
            </View>
		</View>
	);
}
 
const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    numberInput : {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default StartGameScreen;