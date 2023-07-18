import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { NumSelector, Output } from "../components/Start";
import { useState } from "react";

export default function Start(props: { onGameStart: (arg0: undefined) => any }) {
	const [val, setVal] = useState("");
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber]: any = useState();

	const txtHandler = (inputText: string) => setVal(inputText.replace(/[^0-9]/g, ""));

	const resetInputHandler = () => {
		setVal(""), setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const choosenNumber = parseInt(val);
		if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
			Alert.alert("Invalid ", "Number must be between 1 to 99", [
				{ text: "Okay", style: "destructive", onPress: resetInputHandler },
			]);
			setConfirmed(false);
		} else {
			setConfirmed(true);
			setSelectedNumber(val);
			Keyboard.dismiss();
		}
		setVal("");
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={s.screen}>
				<Text style={s.title}>Start A New Game !</Text>
				<NumSelector x={val} TH={txtHandler} RIH={resetInputHandler} CIH={confirmInputHandler} />
				<Output press={() => props.onGameStart(selectedNumber)} sNum={selectedNumber} confirm={confirmed} />
			</View>
		</TouchableWithoutFeedback>
	);
}

const s = StyleSheet.create({
	title: { fontSize: 20, fontFamily: "customfont", marginTop: 50 },
	screen: { alignItems: "center", padding: 10, flex: 1 },
});
