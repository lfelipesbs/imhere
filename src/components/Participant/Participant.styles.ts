import { StyleSheet } from "react-native";
import { ParticipantStyles } from "./Participant.types";

export const participantStyles = StyleSheet.create<ParticipantStyles>({
	container: {
		width: '100%',
		backgroundColor: '#1F1E25',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	name: {
		flex: 1,
		color: '#FFF',
		marginLeft: 16,
		fontSize: 16
	},
	button: {
		backgroundColor: '#E23C44',
		width: 56,
		height: 56,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		color: '#FFF',
		fontSize: 24
	}
});
