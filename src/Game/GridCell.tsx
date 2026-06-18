import {FC, useState} from "react";
import {Animated, StyleSheet, Text, TouchableOpacity} from "react-native";

type Props = {
    value: string;
}
export const GridCell: FC<Props> = ({value}) => {
    const [open, setOpen] = useState(true)
    const opacity = open ? 1 : 0

    const onClick = (): void => {
        setOpen((prev) => !prev)
    }

    return (
        <TouchableOpacity style={styles.wrapper} onPressOut={onClick}>
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