import {FC, useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import {Cell} from "@/types";
import {Grid} from "@/Game/Grid";
import {generateGrid} from "@/Game/utils/generateGrid";
import {VictoryDialog} from "@/Game/VictoryDialog";

export const Game: FC = () => {
    const [cells] = useState<Cell[]>(generateGrid());
    const [score, setScore] = useState(0);
    const [doneCells, setDoneCells] = useState(0);

    const gameFinished = cells.length === doneCells

    return   (
    <View style={styles.container}>
        <Text style={styles.score}>{`Очки: ${score}`}</Text>
        <Grid cells={cells} setScore={setScore} setDoneCells={setDoneCells}/>
        <View></View>

        {gameFinished && (
            <VictoryDialog score={score}/>
        )}

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        backgroundColor: '#25292e',
        color: '#fff',
    },
    score: {
        fontSize: 24,
        color: 'white',
        marginTop: 24,
        textAlign: 'center',
    },
    dialog: {

    }
});