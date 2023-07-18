import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";

export default function MainBtn(props: any) {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={[styles.btnCont, styles.padding]}>
				<Text style={styles.btnTxt}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	padding: { paddingHorizontal: 25, paddingVertical: 12 },
	btnCont: { backgroundColor: COLORS.primary, borderRadius: 25, elevation: 8 },
	btnTxt: { fontFamily: "customfont", color: "white", textAlign: "center" },
});
