import {FC} from "react";
import {StyleSheet, Text} from "react-native";

type Props = {
    value: string;
}
export const GridCell: FC<Props> = ({value}) => {
    return (
    <Text style={styles.gridCell}>
        {value}
    </Text>
    )
}

const styles = StyleSheet.create({
    gridCell: {
        width: '20%',
        aspectRatio: 1,
        backgroundColor: '#2c3031',
        borderRadius: 8,
        fontSize: 28,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
});