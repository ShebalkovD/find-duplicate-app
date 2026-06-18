import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {FC, useState} from 'react';
import {useRouter} from "expo-router";

type Props = {
    score: number;
}
export const VictoryDialog: FC<Props> = ({score}) => {
    const [visible, setVisible] = useState(true);
    const router = useRouter();

    const onPress = (): void => {
        setVisible(false)
        router.navigate('/')
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(false)}
        >
            <View style={styles.overlay}>
                <View style={styles.dialog}>
                    <Text style={styles.title}>Победа!</Text>
                    <Text style={styles.message}>{`Вы набрали ${score} очков`}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}
                    >
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});