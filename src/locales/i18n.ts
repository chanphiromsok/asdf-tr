// Don't remove -force from these because detection is VERY slow on low-end Android.
// https://github.com/formatjs/formatjs/issues/4463#issuecomment-2176070577
import "@formatjs/intl-locale/polyfill-force";
import "@formatjs/intl-numberformat/locale-data/en";
import "@formatjs/intl-numberformat/polyfill-force";
import "@formatjs/intl-pluralrules/locale-data/en";
import "@formatjs/intl-pluralrules/polyfill-force";
import { i18n } from "@lingui/core";
import { useEffect } from "react";
import { AppLanguage } from "./Language";

export async function dynamicActivate(locale: AppLanguage) {
  switch (locale) {
    case AppLanguage.km: {
      await Promise.all([
        require("@formatjs/intl-pluralrules/locale-data/km"),
        require("@formatjs/intl-numberformat/locale-data/km"),
      ]);
      const { messages } = await require(`./km/messages.po`);
      i18n.loadAndActivate({ locale, messages });
      break;
    }

    default: {
      const { messages } = await require(`./en/messages.po`);
      i18n.loadAndActivate({ locale, messages });
      break;
    }
  }
}

export function useLocaleLanguage() {
  useEffect(() => {
    dynamicActivate(AppLanguage.km);
  }, []);
}
