import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";
import { AppThemeName } from "react-native-unistyles/lib/typescript/src/specs/types";

export default function TabTwoScreen() {
  const onThemeChange = (theme: AppThemeName) => {
    console.log("Before", UnistylesRuntime.hasAdaptiveThemes);
    if (UnistylesRuntime.hasAdaptiveThemes) {
      UnistylesRuntime.setAdaptiveThemes(false);
    }
    UnistylesRuntime.setTheme(theme);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      {/* <Inbox /> */}
      <Text style={styles.text}>
        Color Schema {UnistylesRuntime.colorScheme}
      </Text>
      <TouchableOpacity onPress={() => onThemeChange("dark")}>
        <Text style={styles.text}>Dark</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onThemeChange("light")}>
        <Text style={styles.text}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onThemeChange("premium")}>
        <Text style={styles.text}>System</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          UnistylesRuntime.setAdaptiveThemes(true);
        }}
      >
        <Text style={styles.text}>Adaptive</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create((theme) => {
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
