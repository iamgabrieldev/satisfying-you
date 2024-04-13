import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export const DefaultButton = ({ title, color, width, style, disabled, onFocus, onPress }: { title: string, color: string, width: number, style?: any, disabled?: boolean, onFocus?: () => void, onPress?: () => void }) => {
    const buttonStyle = {
        backgroundColor: color || 'green'
    };

    const styles = StyleSheet.create({
        button: {
            padding: 10,
            borderRadius: 1,
            alignItems: 'center',
            width: width
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontFamily: 'AveriaLibre-Regular'
        },
    });

    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle, style]}
            disabled={disabled}
            onFocus={onFocus}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};