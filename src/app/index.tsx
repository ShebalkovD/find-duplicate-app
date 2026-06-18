import { LinkButton } from "@/UI/LinkButton";
import { useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  const navigate = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Найди пару</Text>

      <LinkButton path={'/game'} label={'Играть'} />
      <LinkButton path={'/score'} label={'Таблица очков'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#25292e',
    gap: '1rem',
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 600,
  },
});
