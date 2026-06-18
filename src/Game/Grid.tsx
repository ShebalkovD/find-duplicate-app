import {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Cell} from "@/types";
import {GridCell} from "@/Game/GridCell";

type Props = {
    cells: Cell[]
}
export const Grid: FC<Props> = ({cells}) => {
    return <View style={styles.gridContainer}>
        {cells.sort((a, b) => a.id - b.id).map((cell) => (
          <GridCell key={cell.id} value={cell.value}/>
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