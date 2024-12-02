import { Text } from "react-native";
import { HeaderProps } from "./Header.types";
import { headerStyles } from "./Header.styles";

const Header: React.FC<HeaderProps> = ({ title, weekDay, day, month, year }) => {
	return (
		<>
			<Text style={headerStyles.eventName}>{title}</Text>
			<Text style={headerStyles.eventDate}>{weekDay}, {day} de {month} de {year}</Text>
		</>
	);
};

export default Header;
