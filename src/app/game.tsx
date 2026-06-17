import {FC} from "react";
import {View, Text, StyleSheet} from "react-native";

const Game: FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Game route</Text>
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
    }
});

export default Game;
