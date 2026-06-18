import {Dispatch, FC,  SetStateAction, useEffect, useState} from "react";
import {Animated, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Cell} from "@/types";
import {SCORE_BONUS} from "@/constants";

type Props = {
    openedCells: Cell[];
    setOpenedCells: Dispatch<SetStateAction<Cell[]>>;
    cell: Cell;
    setScore: Dispatch<SetStateAction<number>>;
}

export const GridCell: FC<Props> = ({cell, openedCells, setOpenedCells, setScore}) => {
    const {id, value} = cell;

    const [open, setOpen] = useState(true);
    const [done, setDone] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const opacity = open ? 1 : 0;
    const pressDisabled = disabled || done || open;

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
        if (done) return;
        if (openedCells.length < 2) return;

        setDisabled(true);

        const matched = openedCells.filter((item) => item.value === value);

        setTimeout(() => {
            if (matched.length < 2) {
                setOpenedCells([]);
                setOpen(false);
            } else {
                setDone(true)
                setScore((prev) => prev + SCORE_BONUS)
            }
            setDisabled(false);
        }, 1000 * 2);

    }, [openedCells]);

    return (
        <TouchableOpacity style={[styles.wrapper, {opacity: pressDisabled ? 0.8 : 1}]} onPressOut={onClick} disabled={pressDisabled}>
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