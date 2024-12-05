import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { AddInputProps } from "./AddInput.types"
import { addInputStyles } from "./AddInput.styles";

const AddInput: React.FC<AddInputProps> = ({
	onAddParticipant,
	placeholder,
	error,
	...props
}) => (
	<>
		<View style={addInputStyles.form}>
			<TextInput
				style={addInputStyles.input}
				placeholder={placeholder}
				placeholderTextColor="#6B6B6B"
				{...props}
			/>
			<TouchableOpacity style={addInputStyles.button} onPress={onAddParticipant} disabled={!!error}>
				<Text style={addInputStyles.buttonText}>
					+
				</Text>
			</TouchableOpacity>
		</View>
		{error && <Text style={addInputStyles.error}>{error}</Text>}
	</>
);

export default AddInput;
