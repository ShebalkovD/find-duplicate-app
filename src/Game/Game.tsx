import {FC} from "react";
import {StyleSheet, Text, View} from "react-native";

export const Game: FC = () => {
    return   (
    <View style={styles.container}>
        <Text style={styles.text}>Game route</Text>
    </View>
    )
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