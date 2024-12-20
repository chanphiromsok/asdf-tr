import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme) => ({
  container: {
    variants: {
      bgColor: {
        primary: {
          backgroundColor: theme.colors.blood,
        },
        secondary: {
          backgroundColor: theme.colors.accent,
        },
        default: {
          backgroundColor: theme.colors.backgroundColor,
        },
      },
    },
    compoundVariants: [
      {
        isBold: true, // when isBold is true
        color: "link", // and color is link
        // apply following styles
        styles: {
          textDecorationLine: "underline",
          // and more styles
        },
      },
    ],
  },
}));
export default styles;
