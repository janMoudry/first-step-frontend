import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen from "../Screens/index";
import NavigationTab from "./BottomTab";
import { MainOption } from "./navigationOption";

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={(props) => <NavigationTab {...props} />}
  >
    <Tab.Screen
      name="IncomingMessenges"
      options={MainOption}
      component={Screen.IncomingMessenges}
    />
    <Tab.Screen
      name="Home"
      options={{ headerShown: false }}
      component={Screen.Home}
    />
    <Tab.Screen name="Chat" options={MainOption} component={Screen.Chat} />
  </Tab.Navigator>
);

export default BottomTabs;
