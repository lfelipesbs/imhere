import { Control } from "react-hook-form";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { AddInputProps } from "../AddInput/AddInput.types";
import { HomeFormValues } from "../../views/Home/Home.types";

interface FormProps {
	name: "participant";
	control: Control<HomeFormValues>;
	onChangeText?: (text: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

export type AddInputFieldProps = FormProps & AddInputProps;
