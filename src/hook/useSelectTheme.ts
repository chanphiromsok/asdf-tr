import { UnistylesRuntime } from "react-native-unistyles";
import { AppThemeName } from "react-native-unistyles/lib/typescript/src/specs/types";

const useSelectTheme = () => {
  const onThemeChange = (theme: AppThemeName) => {
    if (UnistylesRuntime.hasAdaptiveThemes) {
      UnistylesRuntime.setAdaptiveThemes(false);
    }
    UnistylesRuntime.setTheme(theme);
  };
  const onSelectAdaptiveTheme = () => {
    UnistylesRuntime.setAdaptiveThemes(true);
  };
  return {
    onThemeChange,
    onSelectAdaptiveTheme,
  };
};

export default useSelectTheme;
