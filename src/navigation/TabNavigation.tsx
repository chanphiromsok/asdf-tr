import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
  },
});
