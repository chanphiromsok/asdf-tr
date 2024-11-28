import { KeyboardProvider } from "react-native-keyboard-controller";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import AppNavigation from "./src/AppNavigation";
import QueryProvider from "./src/ctx/QueryProvider";
export default function App() {
  return (
    <QueryProvider>
      <KeyboardProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <AppNavigation />
        </SafeAreaProvider>
      </KeyboardProvider>
    </QueryProvider>
  );
}
