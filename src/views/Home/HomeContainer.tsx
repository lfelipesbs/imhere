import React, { useCallback } from "react";
import Home from "./Home";
import { getMonthName, getWeekDay } from "../../utils/getDate";

const homeContainer: React.FC = () => {
	const date = new Date();
	const data = ["Luiz", "Marta", "Felipe", "Leticia"];

	const handleParticipantAdd = useCallback((): void => {
		console.log('Você clicou no botão de Adicionar!');
	}, []);

	const handleParticipantRemove = useCallback((): void => {
		console.log('Você clicou no botão de Remover!')
	}, []);

	return (
		<Home
			handleParticipantAdd={handleParticipantAdd}
			handleParticipantRemove={handleParticipantRemove}
			day={date.getDate()}
			month={getMonthName(date.getMonth())}
			weekDay={getWeekDay(date.getDay())}
			year={date.getFullYear()}
			participants={data}
		/>
	)
}

export default homeContainer;
