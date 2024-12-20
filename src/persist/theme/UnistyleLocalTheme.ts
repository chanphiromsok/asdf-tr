import { AppThemeName } from "react-native-unistyles/lib/typescript/src/specs/types";
import StorageKey from "../../constant/StorageKey";
import { mmkvStorage } from "../Mmkv";

const setTheme = (theme: AppThemeName) => {
  mmkvStorage.set(StorageKey.UnistyleTheme, theme);
};

/**
 *
 * @param StorageKey.UnistyleTheme
 */
const getTheme = (storageKey: string) => {
  return mmkvStorage.getString(storageKey) as AppThemeName;
};

export default {
  setTheme,
  getTheme,
};
