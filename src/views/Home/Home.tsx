import React from "react";
import { View } from "react-native";
import { homeStyles } from "./Home.styles";
import { HomeProps } from "./Home.types";
import Header from "../../components/Header";
import AddInput from "../../components/AddInput";
import ParticipantsList from "../../components/ParticipantsList";

const Home: React.FC<HomeProps> = ({
	handleParticipantAdd,
	handleParticipantRemove,
	title = "Nome do Evento",
	day,
	month,
	weekDay,
	year,
	participants
}) => {
    return (
        <View style={homeStyles.container}>
            <Header
				title={title}
				day={day}
				month={month}
				weekDay={weekDay}
				year={year}
			/>
			<AddInput
				onPress={handleParticipantAdd}
				placeholder="Adicione um participante"
			/>
			<ParticipantsList data={participants} onRemove={handleParticipantRemove}/>
        </View>
    );
};

export default Home;
