import { View, Text } from "react-native";
import { styles } from "./additional-links.styles";
import { Link } from "expo-router";

export function AdditionalLinks({
	text,
	linkText,
}: {
	text: string;
	linkText: string;
}) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<Link href={"/register/step-one"}>
				<Text style={styles.linkText}>{linkText}</Text>
			</Link>
		</View>
	);
}
