import { StyleSheet } from "react-native";
import { HomeStyles } from "./Home.types";

export const homeStyles = StyleSheet.create<HomeStyles>({
    container: {
        flex: 1,
        backgroundColor: "#131016",
        padding: 24
    },
	listEmptyText: {
		color: '#FFF',
		fontSize: 14,
		textAlign: 'center'
	},
	clearAllContainer: {
		marginBottom: 16
	},
	clearAllText: {
		color: "#E23C44"
	}
});
