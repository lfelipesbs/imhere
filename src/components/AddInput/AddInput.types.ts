import { TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface AddInputProps extends TextInputProps {
	onAddParticipant?: () => void;
	placeholder?: string;
	error?: string;
};

export interface AddInputStyles {
	form: ViewStyle;
	input: TextStyle;
	button: ViewStyle;
	buttonText: TextStyle;
	error: TextStyle;
};
