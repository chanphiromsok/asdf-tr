import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingTop: rt.insets.top,
  },
  box: {
    backgroundColor: theme.colors.backgroundColor,
    width: 100,
    height: 100,
    borderWidth: 2,
  },
}));
export default styles;
