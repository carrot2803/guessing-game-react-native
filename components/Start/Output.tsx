import { View, Text, StyleSheet } from "react-native";
import { MainBtn, Card, Num } from "../General";

type outputProps = { confirm: boolean; sNum: number; press: () => any };

export default function Output({ confirm, sNum, press }: outputProps) {
	return confirm ? (
		<Card style={styles.container}>
			<Text style={styles.title}>Selected</Text>
			<Num>{sNum}</Num>
			<MainBtn onPress={press}>START GAME</MainBtn>
		</Card>
	) : (
		<View></View>
	);
}

const styles = StyleSheet.create({
	title: { fontSize: 20, fontFamily: "customfont", paddingHorizontal: 90 },
	container: { marginTop: 20, alignItems: "center" },
});
