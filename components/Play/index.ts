import Card from "../General/Card";
import { renderList } from "./List";
import Mainbtn from "../General/Mainbtn";
import Num from "../General/Num";
import PlayBtns from "./PlayBtns";

const play: any = {
	screen: { flex: 1, padding: 10, alignItems: "center" },
	title: { marginVertical: 3, fontSize: 18, fontFamily: "customfont" },
	listContainer: { marginTop: 10, flex: 1, width: "80%" },
	list: { flexGrow: 1, justifyContent: "flex-end" },
};

export { Card, renderList, Mainbtn, Num, PlayBtns, play };
