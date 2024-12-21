import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { enableFreeze, enableScreens } from "react-native-screens";
import AppNavigation from "./src/AppNavigation";
import QueryProvider from "./src/ctx/QueryProvider";
import I18nProvider from "./src/locales/i18nProvider";
import "./unistyles";
enableScreens();
enableFreeze();

export default function App() {
  return (
    <QueryProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <I18nProvider>
          <AppNavigation />
        </I18nProvider>
      </SafeAreaProvider>
    </QueryProvider>
  );
}
