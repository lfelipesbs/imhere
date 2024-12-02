import { StyleSheet } from "react-native";
import { HeaderStyles } from "./Header.types";

export const headerStyles = StyleSheet.create<HeaderStyles>({
	eventName: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },
    eventDate: {
        color: "#6B6B6B",
        fontSize: 16
    }
});
