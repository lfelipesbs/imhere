import { Control, FieldValues, SubmitHandler } from "react-hook-form";
import { TextStyle, ViewStyle } from "react-native";

export interface HomeProps {
	handleParticipantAdd: () => void;
	handleParticipantRemove: (name: string) => void;
	handleClearAll: () => void;
	title?: string;
	weekDay: string;
	day: number;
	month: string;
	year: number;
	participants: string[];
	control: Control<HomeFormValues>;
	error?: string;
};

export interface HomeStyles {
	container: ViewStyle;
	clearAllContainer: ViewStyle;
	clearAllText: TextStyle;
	listEmptyText: TextStyle;
};

export interface HomeFormValues {
	participant: string;
}
