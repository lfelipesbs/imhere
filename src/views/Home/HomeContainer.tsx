import React, { useCallback, useState } from "react";
import Home from "./Home";
import { getMonthName, getWeekDay } from "../../utils/getDate";

const homeContainer: React.FC = () => {
	const date = new Date();
	const [participants, setParticipants] = useState<string[]>([]);

	const handleParticipantAdd = useCallback((): void => {
		setParticipants((prevParticipants) => [...prevParticipants, 'Novo participante']);
	}, [setParticipants]);

	const handleParticipantRemove = useCallback((name: string): void => {
		setParticipants((prevParticipants) =>
			prevParticipants.filter((participant) => participant !== name)
		);
	}, [setParticipants]);

	const handleClearAll = useCallback((): void => {
		setParticipants([]);
	}, [setParticipants]);

	return (
		<Home
			day={date.getDate()}
			month={getMonthName(date.getMonth())}
			participants={participants}
			weekDay={getWeekDay(date.getDay())}
			year={date.getFullYear()}
			handleClearAll={handleClearAll}
			handleParticipantAdd={handleParticipantAdd}
			handleParticipantRemove={handleParticipantRemove}
		/>
	)
}

export default homeContainer;
