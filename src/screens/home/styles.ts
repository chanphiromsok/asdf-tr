import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create((theme) => {
  console.log("home style");

  return {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.backgroundColor,
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.colors.typography,
    },
  };
});
