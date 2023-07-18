import { View, Text, StyleSheet, Image } from "react-native";
import Mainbtn from "../components/General/Mainbtn";
import { COLORS, overProps } from "../constants";

export default function Over(props: overProps) {
	return (
		<View style={s.screen}>
			<Text style={{ fontFamily: "customfont", fontSize: 20 }}>Game Over</Text>
			<View style={[s.cont, s.border]}>
				<Image style={s.img} resizeMode="cover" source={require("../assets/images/finish.gif")} />
			</View>
			<Text style={s.rtxt}>
				It <Text style={s.result}>{props.rounds}</Text> rounds to guess your number{" "}
				<Text style={s.result}>{props.number}</Text>
			</Text>
			<Mainbtn onPress={props.onRestart}>Play Again?</Mainbtn>
		</View>
	);
}
const s = StyleSheet.create({
	screen: { flex: 1, justifyContent: "center", alignItems: "center" },
	img: { height: "100%", width: "100%" },
	cont: { width: 300, height: 300, overflow: "hidden", marginVertical: 100 },
	border: { borderWidth: 3, borderColor: COLORS.primary, borderRadius: 150 },
	rtxt: { fontFamily: "customfont", textAlign: "center", fontSize: 20, marginBottom: 60 },
	result: { color: COLORS.primary },
});
