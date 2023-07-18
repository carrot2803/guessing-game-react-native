import { Start, Play, Over } from "../screens";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useState } from "react";

const f = () => Font.loadAsync({ customfont: require("../assets/fonts/Inter-Regular.ttf") });

export default function useLogic() {
	const [numUser, setNum]: any = useState();
	const [numRounds, setRounds] = useState(0);
	const [data, setLoad] = useState(false);

	if (!data) return { component: <AppLoading startAsync={f} onFinish={() => setLoad(true)} onError={console.log} /> };

	const newGame = () => {
		setRounds(0), setNum(undefined);
	};

	const startHandler = (selectedNumber: any) => {
		setNum(selectedNumber), setRounds(0);
	};

	const gameHandler = (Rounds: number) => setRounds(Rounds);

	let c = <Start onGameStart={startHandler} />;
	if (numUser && numRounds <= 0) c = <Play userChoice={numUser} onGameOver={gameHandler} />;
	else if (numRounds > 0) c = <Over rounds={numRounds} number={numUser} onRestart={newGame} />;

	return { component: c };
}
