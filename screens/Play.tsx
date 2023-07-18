import { Num, renderList, play, PlayBtns } from "../components/Play";
import { View, Text, Alert, ScrollView } from "react-native";
import { useState, useRef, useEffect } from "react";
import { genNum, playProps } from "../constants";

export default function Play(this: any, props: playProps) {
	const initGuess = genNum(0, 100, props.userChoice);
	const [currGuess, setCurr] = useState(initGuess);
	const [pastGuess, setPast] = useState([initGuess]);
	const currLo = useRef(1);
	const currHi = useRef(100);

	useEffect(() => {
		if (currGuess === parseInt(props.userChoice)) props.onGameOver(pastGuess.length);
	}, [currGuess]);

	const nextGuessHandler = (pos: string) => {
		if ((pos === "lower" && currGuess < props.userChoice) || (pos === "greater" && currGuess > props.userChoice)) {
			Alert.alert("Don't lie!", "You know that this is wrong ...", [{ text: "Sorry!", style: "cancel" }]);
			return;
		}
		pos === "lower" ? (currHi.current = currGuess) : (currLo.current = currGuess + 1);
		const nextNum = genNum(currLo.current, currHi.current, currGuess);
		setCurr(nextNum);
		setPast((curPastGuess) => [nextNum, ...curPastGuess]);
	};

	return (
		<View style={play.screen}>
			<Text style={play.title}>Bot's Guess</Text>
			<Num>{currGuess}</Num>
			<View style={play.listContainer}>
				<ScrollView contentContainerStyle={play.list}>
					{pastGuess.map((guess, index) => renderList(guess, pastGuess.length - index))}
				</ScrollView>
			</View>
			<PlayBtns plus={nextGuessHandler.bind(this, "greater")} minus={nextGuessHandler.bind(this, "lower")} />
		</View>
	);
}
