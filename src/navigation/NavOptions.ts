import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const navigatorOptions: NativeStackNavigationOptions = {
  freezeOnBlur: true,
  navigationBarHidden: true,
};

const disableHeader: NativeStackNavigationOptions = {
  headerShadowVisible: false,
};

export default {
  navigatorOptions,
  disableHeader,
};
