import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default function Num(props: { children: string | number | boolean }) {
	return (
		<View style={[styles.c, styles.border]}>
			<Text style={styles.number}>{props.children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	border: { borderWidth: 2, borderColor: COLORS.accent, borderRadius: 10, borderStyle: "dotted" },
	c: { padding: 10, marginVertical: 10, alignItems: "center", justifyContent: "center" },
	number: { color: COLORS.accent, fontSize: 22, fontFamily: "customfont" },
});
