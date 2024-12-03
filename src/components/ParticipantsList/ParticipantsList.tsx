import { ParticipantsListProps } from "./ParticipantsList.types";
import Participant from "../Participant";

const ParticipantsList: React.FC<ParticipantsListProps> = ({ data, onRemove }) => (
	<>
		{data.map(( name: string, index: number) => (
			<Participant key={index} name={name} onPress={onRemove}/>
		))}
	</>
);

export default ParticipantsList;
