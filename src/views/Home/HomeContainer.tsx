import React, { useCallback } from "react";
import Home from "./Home";
import { getMonthName, getWeekDay } from "../../utils/getDate";

const homeContainer: React.FC = () => {
	const date = new Date();

	const handleParticipantAdd = useCallback((): void => {
		console.log('Você clicou no botão de Adicionar!');
	}, []);

	return (
		<Home
			onPress={handleParticipantAdd}
			day={date.getDate()}
			month={getMonthName(date.getMonth())}
			weekDay={getWeekDay(date.getDay())}
			year={date.getFullYear()}
		/>
	)
}

export default homeContainer;
