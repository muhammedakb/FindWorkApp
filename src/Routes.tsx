import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobDetail from "./pages/JobDetail";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import { userSelector } from "./redux/loginSlice";
import { useAppSelector } from "./redux/store";
import { RootDrawerParamList, RootStackParamList } from "./types/navigateTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  const user = useAppSelector(userSelector);

  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: "#40dac6",
          }}
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: "#40dac6",
          }}
        >
          <Drawer.Screen name="Jobs" component={Jobs} />
          <Drawer.Screen name="FavoritedJobs" component={JobDetail} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;
