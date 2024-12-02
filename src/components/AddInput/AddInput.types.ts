import { TextStyle, ViewStyle } from "react-native";

export interface AddInputProps {
	onPress: () => any;
	placeholder?: string;
};

export interface AddInputStyles {
	form: ViewStyle;
	input: TextStyle;
	button: ViewStyle;
	buttonText: TextStyle;
};
