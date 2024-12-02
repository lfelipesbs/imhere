import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { AddInputProps } from "./AddInput.types"
import { addInputStyles } from "./AddInput.styles";

const AddInput: React.FC<AddInputProps> = ({ onPress, placeholder, buttonText }) => {
	return(
		<View style={addInputStyles.form}>
			<TextInput
				style={addInputStyles.input}
				placeholder={placeholder}
				placeholderTextColor="#6B6B6B"
			/>
			<TouchableOpacity style={addInputStyles.button} onPress={onPress}>
				<Text style={addInputStyles.buttonText}>
					{buttonText}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AddInput;
