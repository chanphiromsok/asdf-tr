import { getLoadedFonts } from "expo-font";
import { useEffect } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { enableFreeze, enableScreens } from "react-native-screens";
import AppNavigation from "./src/AppNavigation";
import QueryProvider from "./src/ctx/QueryProvider";
import I18nProvider from "./src/locales/i18nProvider";
enableScreens();
enableFreeze();

export default function App() {
  useEffect(() => {
    const ggg = getLoadedFonts();
    console.log("ggg", JSON.stringify(ggg, null, 2));
  }, []);
  return (
    <QueryProvider>
      <KeyboardProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <I18nProvider>
            <AppNavigation />
          </I18nProvider>
        </SafeAreaProvider>
      </KeyboardProvider>
    </QueryProvider>
  );
}
