import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type HStackProps = PropsWithChildren<{
  bgColor?: string;
  flex?: number | boolean;
}>;
const HStack = ({ children, ...props }: HStackProps) => {
  const flex =
    typeof props.flex === "boolean" ? (props.flex ? 1 : undefined) : props.flex;
  return (
    <View style={[styles.container({ bgColor: props.bgColor, flex })]}>
      {children}
    </View>
  );
};

export default HStack;
type Props = {
  flex: number | undefined;
  bgColor: string | undefined;
};
const styles = StyleSheet.create((theme) => ({
  container: ({ bgColor, flex }: Props) => ({
    flex,
    flexDirection: "row",
    backgroundColor: bgColor ? bgColor : theme.colors.bgColor,
  }),
}));
