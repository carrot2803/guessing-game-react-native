import { View, Text, Button, StyleSheet } from "react-native";
import { COLORS, btnSProps } from "../../constants";

export default function SelectorBtns({ RIH, CIH }: btnSProps) {
	return (
		<View style={[s.container, { justifyContent: "space-between" }]}>
			<View style={s.button}>
				<Button title="Reset" onPress={RIH} color={COLORS.accent} />
			</View>
			<View style={s.button}>
				<Button title="Confirm" onPress={CIH} color={COLORS.primary} />
			</View>
		</View>
	);
}

const s = StyleSheet.create({
	container: { width: "100%", flexDirection: "row", paddingHorizontal: 15, marginVertical: 10 },
	button: { width: "45%" },
});
