import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface Props
  extends Omit<TextInputProps, "defaultValue">,
    Omit<ControllerProps, "render"> {
  control: any;
  name: string;
}

const TextController = ({ control, name, ...props }: Props) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.container}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      name={name}
      defaultValue=""
      disabled={props.disabled}
    />
  );
};

export default TextController;
const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.bgColor,
    color: theme.colors.text,
    borderColor: theme.colors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
}));
