import { Control, FieldValues } from "react-hook-form";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { AddInputProps } from "../AddInput/AddInput.types";

interface FormProps {
	name: string;
	control: Control<FieldValues>;
	onChangeText?: (text: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

export type AddInputFieldProps = FormProps & AddInputProps;
