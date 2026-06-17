import {FC} from "react";
import {StyleSheet, Text} from "react-native";
import {Button} from "@expo/ui";
import { Href,  useRouter} from "expo-router";

import {PALETTE} from "@/constants";

type Props = {
    path: Href;
    label?: string;
}
export const LinkButton: FC<Props> =({path, label}) => {
    const router = useRouter();

    return (
    <Button onPress={() => router.navigate(path)}  style={styles.button}>
        <Text style={styles.text}> {label ?? 'Перейти'}</Text>
    </Button>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: PALETTE.PRIMARY,
        minWidth: 200,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
})