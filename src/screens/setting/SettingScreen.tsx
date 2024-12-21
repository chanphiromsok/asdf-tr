import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { Button, ScrollView, View } from "react-native";
import useSelectTheme from "../../hook/useSelectTheme";
import styles from "./styles";

const SettingScreen = () => {
  const { onSelectAdaptiveTheme, onThemeChange } = useSelectTheme();
  const headerHeight = useHeaderHeight();
  return (
    <ScrollView style={{ ...styles.container, paddingTop: headerHeight }}>
      <Button
        title="Change to Light Theme"
        onPress={() => onThemeChange("light")}
      />
      <Button
        title="Change to Dark Theme"
        onPress={() => onThemeChange("dark")}
      />
      <Button
        title="Change to Premium Theme"
        onPress={() => onThemeChange("dim")}
      />
      <Button
        title="Change to Adaptive Theme"
        onPress={onSelectAdaptiveTheme}
      />

      {Array.from({ length: 1000 }).map((_, index) => (
        <View style={styles.box} key={index} />
      ))}
    </ScrollView>
  );
};

export default SettingScreen;
