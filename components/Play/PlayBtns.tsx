import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card, MainBtn } from "../General";

type btnProps = { plus: (pos: string) => void; minus: (pos: string) => void };

export default function PlayBtns({ plus, minus }: btnProps) {
	return (
		<Card style={play.container}>
			<View style={play.button}>
				<MainBtn onPress={minus}>
					<Ionicons name="md-remove" size={24} />
				</MainBtn>
			</View>
			<View style={play.button}>
				<MainBtn onPress={plus}>
					<Ionicons name="md-add" size={24} />
				</MainBtn>
			</View>
		</Card>
	);
}

const play = StyleSheet.create({
	container: { flexDirection: "row", width: "80%", marginTop: 10, marginBottom: 40, justifyContent: "space-between" },
	button: { width: "30%" },
});
