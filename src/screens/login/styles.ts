import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme) => ({
  loginButtonEnable: {
    backgroundColor: theme.colors.bgColor,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  loginText: {
    color: theme.colors.bgColor,
    textAlign: "center",
    fontSize: 16,
  },
}));

export default styles;
