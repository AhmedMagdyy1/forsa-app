import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home.js/Home";
import Offers from "../screens/Offers/Offers";
import Profile from "../screens/Profile/Profile";
import Retail from "../screens/Retail/Retail";

const Tab = createMaterialBottomTabNavigator();

const MasterLayout = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator activeColor="#072040" inactiveColor="grey">
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: "home",
            }}
          />
          <Tab.Screen
            name="Retail"
            component={Retail}
            options={{
              tabBarLabel: "Retail",
              tabBarIcon: ({ color }) => (
                <Icon
                  name="tag"
                  size={24}
                  color={color}
                  style={{ transform: [{ scaleX: -1 }] }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Offers"
            component={Offers}
            options={{
              tabBarLabel: "Offers",
              tabBarIcon: ({ color }) => (
                <Icon name="clock" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: "account",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MasterLayout;
