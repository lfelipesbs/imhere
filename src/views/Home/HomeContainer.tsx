import React, { useCallback, useState } from "react";
import Home from "./Home";
import { getMonthName, getWeekDay } from "../../utils/getDate";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { CREATE_PARTICIPANT_FORM_SCHEMA } from "../../constants/schemas";
import { HomeFormValues } from "./Home.types";

const homeContainer: React.FC = () => {
	const date = new Date();
	const [participants, setParticipants] = useState<string[]>([]);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<HomeFormValues>({
		defaultValues: {
			participant: ''
		},
		resolver: yupResolver(CREATE_PARTICIPANT_FORM_SCHEMA)
	})

	const handleParticipantAdd: SubmitHandler<HomeFormValues> = useCallback(data => {
		const name = data.participant.trim();

		if (!errors?.participant?.message) {
			setParticipants((prevParticipants) => [...prevParticipants, name]);
			reset();
		}
	}, [setParticipants, errors, reset]);

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
			control={control}
			day={date.getDate()}
			error={errors?.participant?.message}
			month={getMonthName(date.getMonth())}
			participants={participants}
			weekDay={getWeekDay(date.getDay())}
			year={date.getFullYear()}
			handleClearAll={handleClearAll}
			handleParticipantAdd={handleSubmit(handleParticipantAdd)}
			handleParticipantRemove={handleParticipantRemove}
		/>
	)
}

export default homeContainer;
