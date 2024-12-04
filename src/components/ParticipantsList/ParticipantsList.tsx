import { ParticipantsListProps } from "./ParticipantsList.types";
import Participant from "../Participant";
import { ScrollView } from "react-native";

const ParticipantsList: React.FC<ParticipantsListProps> = ({ data, onRemove }) => (
	<ScrollView showsVerticalScrollIndicator={false}>
		{data.map(( name: string, index: number) => (
			<Participant key={`PARTICIPANT_KEY_${index}`} name={name} onPress={() => onRemove(name)}/>
		))}
	</ScrollView>
);

export default ParticipantsList;
