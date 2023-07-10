import { ReactNode } from 'react';
import { Text, StyleSheet, } from 'react-native';
import Colors from '../../constants/colors';

interface InstructionTextProps {
    children: ReactNode;
    style: object;
}

const InstructionText = (props: InstructionTextProps) => {
    return (  
        <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
    );
}
 
export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
})
