import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
    return ( 
        <View style={styles.screen}>
            <Title text='Opponents guess' />
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>
                <Text>Log Rounds</Text>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
})
 
export default GameScreen;