import { Text, StyleSheet } from "react-native";
import { numSProps } from "../../constants";
import { Card } from "../General";
import Input from "./Input";
import SelectorBtns from "./SelectorBtns";

export default function NumSelector({ x, TH, RIH, CIH }: numSProps) {
	return (
		<Card style={s.container}>
			<Text style={{ fontFamily: "customfont", fontSize: 18 }}>Select A Number</Text>
			<Input
				style={s.input}
				blurOnSubmit
				autoCapitalixe="none"
				autoCorrect={false}
				keyboardType="number-pad"
				maxLength={2}
				onChangeText={TH}
				value={x}
			/>
			<SelectorBtns RIH={RIH} CIH={CIH} />
		</Card>
	);
}

const s = StyleSheet.create({
	container: { width: "80%", alignItems: "center", marginTop: 90, marginBottom: 50 },
	btn: { width: "100%", flexDirection: "row", paddingHorizontal: 15, marginVertical: 10 },
	button: { width: "45%" },
	input: { width: 100, textAlign: "center", fontFamily: "customfont" },
});
