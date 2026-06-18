import { getScoreList } from "@/Game/utils/getScoreList";
import { LinkButton } from "@/UI/LinkButton";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";


const Score: FC = () => {
    const list = getScoreList();

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                {list.map((item, index) => (
                    <View style={styles.line} key={index}>
                        <Text style={styles.lineText}>{`${item.date} - ${item.score}`}</Text>
                    </View>
                ))}
            </View>

            <LinkButton path={'/'} label={'Назад'} />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#25292e',
        gap: '1rem',
        color: '#fff',
        paddingBottom: 24,

    },
    listContainer: {
        width: '100%',
        paddingTop: 24,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        backgroundColor: '#25292e',
        gap: '1rem',
        color: '#fff',
        height: '70%',
        overflowY: 'auto',
    },
    text: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 600,
    },
    line: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    lineText: {
        fontSize: 18,
        color: 'white'
    }
});

export default Score;


