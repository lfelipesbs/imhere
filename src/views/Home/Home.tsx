import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "./Home.styles";
import { HomeProps } from "./Home.types";
import Header from "../../components/Header";
import ParticipantsList from "../../components/ParticipantsList";
import { AddInputField } from "../../components/form";

const Home: React.FC<HomeProps> = ({
	handleParticipantAdd,
	handleParticipantRemove,
	handleClearAll,
	title = "Nome do Evento",
	day,
	month,
	weekDay,
	year,
	participants,
	control,
	error
}) => {
    return (
        <View style={homeStyles.container}>
            <Header
				day={day}
				month={month}
				title={title}
				weekDay={weekDay}
				year={year}
			/>
			<AddInputField
				control={control}
				name="participant"
				placeholder="Adicione um participante"
				onAddParticipant={handleParticipantAdd}
				error={error}
			/>

			{participants.length ?
				(
					<>
						<TouchableOpacity style={homeStyles.clearAllContainer} onPress={handleClearAll}>
							<Text style={homeStyles.clearAllText}>Limpar</Text>
						</TouchableOpacity>
						<ParticipantsList data={participants} onRemove={handleParticipantRemove} />
					</>
				) :
				<Text style={homeStyles.listEmptyText}>
					Ninguém confirmado até agora, adicione algum participante na lista!
				</Text>
			}
        </View>
    );
};

export default Home;
