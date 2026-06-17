import {Link, useNavigation} from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import {LinkButton} from "@/ui/LinkButton";
import {Button} from "@expo/ui";

export default function Index() {
  const navigate = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>

      <LinkButton path={'/game'} label={'Играть'}/>
      <LinkButton path={'/'} label={'Таблица лидеров'}/>
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
  },
});
