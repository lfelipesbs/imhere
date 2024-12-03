import { ViewStyle } from "react-native";

export interface HomeProps {
	handleParticipantAdd: () => void;
	handleParticipantRemove: () => void;
	title?: string;
	weekDay: string;
	day: number;
	month: string;
	year: number;
	participants: string[];
};

export interface HomeStyles {
	container: ViewStyle;
};
