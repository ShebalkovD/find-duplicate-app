import {FC, useState} from "react";
import {StyleSheet, View} from "react-native";
import {Cell} from "@/types";
import {Grid} from "@/Game/Grid";
import {generateGrid} from "@/Game/utils/generateGrid";

export const Game: FC = () => {
    const [cells, setCells] = useState<Cell[]>(generateGrid())

    return   (
    <View style={styles.container}>
        <Grid cells={cells} />
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
});