import { Text, TouchableOpacity, View } from "react-native";
import { ParticipantProps } from "./Participant.types";
import { participantStyles } from "./Participant.styles";

const Participants: React.FC<ParticipantProps> = ({ name }) => {
	return (
		<View style={participantStyles.container}>
			<Text style={participantStyles.name}>
				{name}
			</Text>
			<TouchableOpacity style={participantStyles.button}>
				<Text style={participantStyles.buttonText}>
					-
				</Text>
			</TouchableOpacity>
		</View>
	);
}

export default Participants;
