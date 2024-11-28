import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useFocusEffect } from "@react-navigation/native";

import React, { useCallback } from "react";
import { Button, Text, View } from "react-native";
import { dynamicActivate } from "../../locales/i18n";
import { AppLanguage } from "../../locales/Language";

const HomeScreen = () => {
  return (
    <View>
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
        <Trans>Message Inbox</Trans>
      </Text>
      <Button
        title={t(i18n)`Mark messages as read`}
        onPress={() => {
          dynamicActivate(AppLanguage.en);
        }}
      />
    </View>
  );
};
