import { TextStyle, ViewStyle } from "react-native";

export interface ParticipantProps {
	name: string;
	onPress: () => void;
};

export interface ParticipantStyles {
	container: ViewStyle;
	name: TextStyle;
	button: ViewStyle;
	buttonText: TextStyle;
};
