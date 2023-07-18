import { View, Text, StyleSheet } from "react-native";

export const renderList = (guess: number, round: number) => {
	return (
		<View key={guess} style={styles.listItem}>
			<Text>#{round}</Text>
			<Text>{guess}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 25,
		marginBottom: 10,
		borderColor: "#ccc",
		borderWidth: 1,
		backgroundColor: "white",
		borderRadius: 100,
	},
});
