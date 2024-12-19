import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createComponentForStaticNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/home/HomeScreen";
import SettingScreen from "../screens/setting/SettingScreen";

const MainTabs = createBottomTabNavigator({
  tabBarStyle: {
    position: "absolute",
    borderTopWidth: 0,
    elevation: 0,
    height: 84,
    paddingTop: 0,
    paddingBottom: 30,
    backgroundColor: "transparent",
  },
  screenOptions: {
    tabBarBackground: () => (
      <BlurView
        tint="systemChromeMaterial"
        intensity={99}
        style={styles.blurView}
      />
    ),
  },
  tabBarLabelStyle: {
    marginBottom: 10,
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
        tabBarLabel: "Home!",
      },
    },
    Settings: {
      screen: SettingScreen,
      options: {
        tabBarLabel: "Settings!",
      },
    },
  },
});

const MainTabScreen = createComponentForStaticNavigation(MainTabs, "MainTabs");
export default MainTabScreen;
const styles = StyleSheet.create({
  blurView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 84,
  },
});
