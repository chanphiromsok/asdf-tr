import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const navigatorOptions: NativeStackNavigationOptions = {
  freezeOnBlur: true,
  navigationBarHidden: true,
};

const disableHeader: NativeStackNavigationOptions = {
  headerShadowVisible: false,
};
//https://x.com/Baconbrix/status/1856920356319109540
const largeHeader: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerTransparent: true,
  headerBlurEffect: "systemUltraThinMaterial",
  headerLargeTitleShadowVisible: false,
  headerShadowVisible: true,
  headerLargeStyle: {
    backgroundColor: "transparent",
  },
};

export default {
  navigatorOptions,
  disableHeader,
  largeHeader,
};
