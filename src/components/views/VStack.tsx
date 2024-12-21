import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type VStackProps = PropsWithChildren<{
  bgColor?: string;
  flex?: number | boolean;
  // borderRadius?: number;
  // borderWidth?: number;
  // borderColor?: string;
  // alignVertical?: "center" | "flex-start" | "flex-end";
  // alignHorizontal?: "center" | "flex-start" | "flex-end";
  // padding?: number;
  // margin?: number;
}>;
const VStack = ({ children, ...props }: VStackProps) => {
  const flex =
    typeof props.flex === "boolean" ? (props.flex ? 1 : undefined) : props.flex;
  return (
    <View style={[styles.container({ bgColor: props.bgColor, flex })]}>
      {children}
    </View>
  );
};

export default VStack;
type Props = {
  flex: number | undefined;
  bgColor: string | undefined;
};
const styles = StyleSheet.create((theme) => ({
  container: ({ bgColor, flex }: Props) => ({
    flex,
    backgroundColor: bgColor ? bgColor : theme.colors.bgColor,
  }),
}));
