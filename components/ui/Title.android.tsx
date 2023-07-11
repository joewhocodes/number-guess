import { Text, StyleSheet } from 'react-native';

const Title = (props: {text: string}) => {
    return ( 
        <Text style={styles.title}>{props.text}</Text>
     );
}
 
const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 2,
        padding: 12,
        maxWidth: '80%',
        width: 300,
    },
})

export default Title;