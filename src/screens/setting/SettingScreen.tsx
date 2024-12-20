import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { Button, ScrollView } from "react-native";
import View from "react-native/Libraries/Components/View/ViewNativeComponent";
import useSelectTheme from "../../hook/useSelectTheme";
import styles from "./styles";

const SettingScreen = () => {
  const { onSelectAdaptiveTheme, onThemeChange } = useSelectTheme();
  const headerHeight = useHeaderHeight();
  return (
    <ScrollView style={{ ...styles.container, paddingTop: headerHeight }}>
      <Button
        title="Change to Light Theme"
        color={"#000000"}
        onPress={() => onThemeChange("light")}
      />
      <Button
        title="Change to Dark Theme"
        onPress={() => onThemeChange("dark")}
      />
      <Button
        title="Change to Premium Theme"
        onPress={() => onThemeChange("premium")}
      />
      <Button
        title="Change to Adaptive Theme"
        onPress={onSelectAdaptiveTheme}
      />

      {Array.from({ length: 1000 }).map((_, index) => (
        <View
          style={styles.box}
          key={index}
          title={`Button ${index}`}
          onPress={() => {}}
        />
      ))}
    </ScrollView>
  );
};

export default SettingScreen;
