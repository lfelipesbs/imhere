import React, { useCallback, useState } from "react";
import Home from "./Home";
import { getMonthName, getWeekDay } from "../../utils/getDate";

const homeContainer: React.FC = () => {
	const date = new Date();
	const [participants, setParticipants] = useState<string[]>([]);

	const handleParticipantAdd = useCallback((): void => {
		setParticipants((prevParticipants) => [...prevParticipants, 'Novo participante']);
	}, [setParticipants]);

	const handleParticipantRemove = useCallback((): void => {
		setParticipants((prevParticipants) => prevParticipants.slice(0, -1));
	}, [setParticipants]);

	return (
		<Home
			handleParticipantAdd={handleParticipantAdd}
			handleParticipantRemove={handleParticipantRemove}
			day={date.getDate()}
			month={getMonthName(date.getMonth())}
			weekDay={getWeekDay(date.getDay())}
			year={date.getFullYear()}
			participants={participants}
		/>
	)
}

export default homeContainer;
