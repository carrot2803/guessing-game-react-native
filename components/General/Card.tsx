import { View, StyleSheet } from "react-native";

const Card = (props: any) => <View style={{ ...card.style, ...props.style }}>{props.children}</View>;

const shadow = { shadowColor: "black", shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, shadowOpacity: 0.26 };
const card = StyleSheet.create({
	style: { ...shadow, elevation: 6, borderRadius: 10, backgroundColor: "white", padding: 20 },
});

export default Card;
