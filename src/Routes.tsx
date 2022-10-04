import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import { RootDrawerParamList } from "./types/navigateTypes";
import Login from "./pages/Login";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "#40dac6",
        }}
      >
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Jobs" component={Jobs} />
        <Drawer.Screen name="FavoritedJobs" component={JobDetail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
