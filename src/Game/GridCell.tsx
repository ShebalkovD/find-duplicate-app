import {FC, RefObject, useEffect, useState} from "react";
import {Animated, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Cell} from "@/types";

type Props = {
    value: string;
    openedRef: RefObject<Cell[]>
}
export const GridCell: FC<Props> = ({value, openedRef}) => {
    const [open, setOpen] = useState(true)
    const [disabled, setDisabled] = useState(true)
    const opacity = open ? 1 : 0

    const onClick = (): void => {
        setOpen(true)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
            setDisabled(false);
        }, 1000 * 3)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <TouchableOpacity style={styles.wrapper} onPressOut={onClick} disabled={disabled}>
            <Animated.View style={[{opacity: opacity}]}>
                <Text style={styles.text}>
                    {value}
                </Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

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