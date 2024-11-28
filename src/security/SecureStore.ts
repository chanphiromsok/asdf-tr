import * as SecureStore from "expo-secure-store";
import Keys from "../constant/Keys";

const setAccessToken = async (accessToken: string) => {
  try {
    await SecureStore.setItemAsync(Keys.AccessToken, accessToken);
  } catch (error) {}
};

const getAccessToken = () => {
  return SecureStore.getItem(Keys.AccessToken);
};

export default {
  setAccessToken,
  getAccessToken,
};
