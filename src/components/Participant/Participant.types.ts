import { TextStyle, ViewStyle } from "react-native";

export interface ParticipantProps {
	name: string;
};

export interface ParticipantStyles {
	container: ViewStyle;
	name: TextStyle;
	button: ViewStyle;
	buttonText: TextStyle;
};
