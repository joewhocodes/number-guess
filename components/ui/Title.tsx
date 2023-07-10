import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const Title = (props: {text: string}) => {
    return ( 
        <Text style={styles.title}>{props.text}</Text>
     );
}
 
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 2,
        padding: 12,

    },
})

export default Title;