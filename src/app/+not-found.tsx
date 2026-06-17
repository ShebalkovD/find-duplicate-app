import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFound() {
    return (
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
                Go to home screen
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#25292e',
        color: '#fff',
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
