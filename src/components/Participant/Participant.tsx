import { Text, TouchableOpacity, View } from "react-native";
import { ParticipantProps } from "./Participant.types";
import { participantStyles } from "./Participant.styles";

const Participant: React.FC<ParticipantProps> = ({ name, onPress }) => (
	<View style={participantStyles.container}>
		<Text style={participantStyles.name}>
			{name}
		</Text>
		<TouchableOpacity style={participantStyles.button} onPress={onPress}>
			<Text style={participantStyles.buttonText}>
				-
			</Text>
		</TouchableOpacity>
	</View>
);

export default Participant;
