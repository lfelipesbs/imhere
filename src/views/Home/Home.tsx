import React from "react";
import { View } from "react-native";
import { homeStyles } from "./Home.styles";
import { HomeProps } from "./Home.types";
import Header from "../../components/Header";
import AddInput from "../../components/AddInput";
import Participants from "../../components/Participant";

const Home: React.FC<HomeProps> = ({
	onPress,
	title = "Nome do Evento",
	day,
	month,
	weekDay,
	year
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
				onPress={onPress}
				placeholder="Adicione um participante"
			/>
			<Participants name="Luiz Felipe" />
			<Participants name="Lucas Gusmão" />
			<Participants name="Marcelo Melo" />
			<Participants name="João Pedro" />
        </View>
    );
};

export default Home;
