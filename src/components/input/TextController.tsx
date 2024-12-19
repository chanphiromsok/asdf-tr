import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

interface Props extends Omit<TextInputProps, "defaultValue">, ControllerProps {
  control: any;
  name: string;
}

const TextController = ({ control, name, ...props }: Props) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
      )}
      name={name}
      defaultValue=""
      disabled={props.disabled}
    />
  );
};

export default TextController;
