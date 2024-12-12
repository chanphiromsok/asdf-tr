import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import React, { useCallback, useLayoutEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { dynamicActivate } from "../../locales/i18n";
import { AppLanguage } from "../../locales/Language";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProfileScreen");
        }}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
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
