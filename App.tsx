import { View } from "react-native";
import Header from "./components/Header";
import Logic from "./components/Logic";
import { StatusBar } from "expo-status-bar";

export default function App() {
	const { component } = Logic();

	return (
		<View style={{ flex: 1 }}>
			<Header title={"Choose A Number"} />
			{component}
			<StatusBar style="light" />
		</View>
	);
}
