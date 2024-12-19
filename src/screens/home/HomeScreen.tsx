import { Trans, useLingui } from "@lingui/react/macro";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { dynamicActivate } from "../../locales/i18n";
import { AppLanguage } from "../../locales/Language";

export default function TabTwoScreen() {
  console.log("Render");

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text>HomeScreen</Text>
      <Inbox />
    </View>
  );
}
const Inbox = () => {
  const { t } = useLingui();
  console.log("Render Index");

  // useFocusEffect(
  //   useCallback(() => {
  //     dynamicActivate(AppLanguage.km);
  //   }, [])
  // );
  return (
    <View>
      <Text style={styles.text}>
        <Trans id="msg_inbox">Message Inbox</Trans>
      </Text>
      <TouchableOpacity
        onPress={() => {
          dynamicActivate(AppLanguage.en);
        }}
      >
        <Text
          style={{ fontFamily: "SFProDisplay", ...styles.text }}
        >{t`Mark messages as read`}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create((theme) => ({
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
}));
