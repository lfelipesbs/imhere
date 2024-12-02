import { ViewStyle } from "react-native";

export interface HomeProps {
	onPress: () => any;
	title?: string;
	weekDay: string;
	day: number;
	month: string;
	year: number;
};

export interface HomeStyles {
	container: ViewStyle;
};
