import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

interface GuessLogItemProps {
    roundNumber: number;
    guess: number;
}

const GuessLogItem = (props: GuessLogItemProps) => {
    return ( 
        <View style={styles.listItem}>
            <Text># {props.roundNumber}</Text>
            <Text>Opponents Guess: {props.guess}</Text>
        </View>
     );
}
 
export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans',
    },
});
