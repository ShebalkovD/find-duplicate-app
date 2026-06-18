import { getScoreList } from "@/Game/utils/getScoreList";
import { FC } from "react";
import { StyleSheet, View } from "react-native";

const Score: FC = () => {
    const list = getScoreList();
    console.log(list)
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#25292e',
        gap: '1rem',
        color: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 600,
    },
});

export default Score;


