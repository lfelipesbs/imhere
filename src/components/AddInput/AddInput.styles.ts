import { StyleSheet } from "react-native";
import { AddInputStyles } from "./AddInput.types";

export const addInputStyles = StyleSheet.create<AddInputStyles>({
	form: {
		width: '100%',
		flexDirection: 'row',
		marginTop: 36,
		marginBottom: 16
	},
	input: {
		flex: 1,
		height: 56,
		backgroundColor: "#1F1E25",
		borderRadius: 5,
		color: "#FFF",
		padding: 16,
		fontSize: 16,
		marginRight: 12
	},
	buttonText: {
		color: "#FFF",
		fontSize: 24
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#31CF67",
		alignItems: 'center',
		justifyContent: 'center'
	}
});
