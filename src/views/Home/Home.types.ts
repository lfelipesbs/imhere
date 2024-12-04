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
};

export interface HomeStyles {
	container: ViewStyle;
	clearAllContainer: ViewStyle;
	clearAllText: TextStyle;
	listEmptyText: TextStyle;
};
