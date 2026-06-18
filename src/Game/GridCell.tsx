import {Dispatch, FC,  SetStateAction, useEffect, useState} from "react";
import {Animated, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Cell} from "@/types";

type Props = {
    openedCells: Cell[];
    setOpenedCells: Dispatch<SetStateAction<Cell[]>>;
    cell: Cell;
}
export const GridCell: FC<Props> = ({cell, openedCells, setOpenedCells}) => {
    const {id, value} = cell;

    const [open, setOpen] = useState(true);
    const [disabled, setDisabled] = useState(true);

    const opacity = open ? 1 : 0;

    const onClick = (): void => {
        setOpen(true);

        setOpenedCells((prev) => [...prev, {id, value}])
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
            setDisabled(false);
        }, 1000 * 3);

        return () => {
            clearTimeout(timer)
        };
    }, []);

    useEffect(() => {
        if (openedCells.length < 2) return;

        let timer = null;
        const matched = openedCells.filter((item) => item.value === value);

        setDisabled(true);

        timer = setTimeout(() => {
            if (matched.length < 2) {
                setOpenedCells([]);
                setOpen(false);
            }
            setDisabled(false);
        }, 1000 * 2);

        return () => {
            if (!timer) return;
            clearTimeout(timer);
        }
    }, [openedCells]);

    return (
        <TouchableOpacity style={styles.wrapper} onPressOut={onClick} disabled={disabled}>
            <Animated.View style={[{opacity: opacity}]}>
                <Text style={styles.text}>
                    {value}
                </Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '20%',
        aspectRatio: 1,
        backgroundColor: '#2c3031',
        borderRadius: 8,

        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 28,
    }
});