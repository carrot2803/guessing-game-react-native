import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants";

export default function Header(props: any) {
	return (
		<View style={header.container}>
			<Text style={header.txt}>{props.title}</Text>
		</View>
	);
}

const align: any = { alignItems: "center", justifyContent: "center" };

const header = StyleSheet.create({
	container: { ...align, width: "100%", height: 120, paddingTop: 40, backgroundColor: COLORS.primary },
	txt: { color: "white", fontSize: 20 },
});
