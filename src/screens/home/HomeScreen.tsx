import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useFocusEffect } from "@react-navigation/native";

import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { dynamicActivate } from "../../locales/i18n";
import { AppLanguage } from "../../locales/Language";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text>HomeScreen</Text>
      <Inbox />
    </View>
  );
};

export default HomeScreen;
const Inbox = () => {
  const { i18n } = useLingui();

  useFocusEffect(
    useCallback(() => {
      dynamicActivate(AppLanguage.km);
    }, [])
  );
  return (
    <View>
      <Text>
        <Trans id="msg_inbox">Message Inbox</Trans>
      </Text>
      <TouchableOpacity
        onPress={() => {
          dynamicActivate(AppLanguage.en);
        }}
      >
        <Text style={{ fontFamily: "SFProDisplay", fontSize: 40 }}>{t(
          i18n
        )`Mark messages as read`}</Text>
      </TouchableOpacity>
    </View>
  );
};
