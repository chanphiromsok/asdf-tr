import { StyleSheet } from "react-native-unistyles";
import StorageKey from "./src/constant/StorageKey";
import UnistyleLocalTheme from "./src/persist/theme/UnistyleLocalTheme";
import { colors } from "./src/themes/colors";

const lightTheme = {
  colors: {
    ...colors.status,
    bgColor: colors.white,
    btnBg: colors.black,
    borderColor: colors.gray3,
    text: colors.black,
    textButton: colors.white,
  },
};

const darkTheme = {
  colors: {
    ...colors.status,
    bgColor: colors.black,
    btnBg: colors.white,
    borderColor: colors.gray3,
    text: colors.white,
    textButton: colors.black,
  },
};

const dimTheme = {
  colors: {
    ...colors.status,
    bgColor: colors.gray5,
    btnBg: colors.gray1,
    borderColor: colors.gray3,
    text: colors.gray1,
    textButton: colors.gray1,
  },
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
  dim: typeof dimTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}
StyleSheet.configure({
  settings: {
    initialTheme: () => {
      return UnistyleLocalTheme.getTheme(StorageKey.UnistyleTheme) || "light";
    },
  },
  breakpoints,
  themes: {
    light: lightTheme,
    dark: darkTheme,
    dim: dimTheme,
  },
});
