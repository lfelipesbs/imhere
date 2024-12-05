import { useCallback } from "react";
import { useController } from "react-hook-form"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import AddInput from "../AddInput";
import { AddInputFieldProps } from "./Form.types";

const AddInputField: React.FC<AddInputFieldProps> = ({
	name,
	control,
	onChangeText,
	...props
}) => {
	const { field } = useController({
		name,
		control,
		defaultValue: ''
	});

	const onChange = useCallback((text: NativeSyntheticEvent<TextInputChangeEventData>): void => {
		field.onChange(text.nativeEvent.text || '');;
		onChangeText?.(text.nativeEvent.text);
	}, [field, onChangeText]);

	return (
		<AddInput
			value={field.value}
			onChange={onChange}
			{...props}
		/>
	)
}

export default AddInputField;
