import {Dispatch, FC, SetStateAction, useRef, useState} from "react";
import {StyleSheet, View} from "react-native";
import {Cell} from "@/types";
import {GridCell} from "@/Game/GridCell";

type Props = {
    cells: Cell[]
    setScore: Dispatch<SetStateAction<number>>
}
export const Grid: FC<Props> = ({cells, setScore}) => {
    const [openedCells, setOpenedCells] = useState<Cell[]>([])

    return <View style={styles.gridContainer}>
        {cells.sort((a, b) => a.id - b.id).map((cell) => (
          <GridCell key={cell.id} openedCells={openedCells} cell={cell} setOpenedCells={setOpenedCells} setScore={setScore}/>
        ))}
    </View>
}

const styles = StyleSheet.create({
    gridContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 8,
        gap: 16,
    },
});