import { TextStyle } from "react-native"

export interface HeaderProps {
	title: string;
	weekDay: string;
	day: number;
	month: string;
	year: number;
};

export interface HeaderStyles {
	eventName: TextStyle;
	eventDate: TextStyle;
};
