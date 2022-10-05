import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import { RootDrawerParamList } from "./types/navigateTypes";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  return (
    <Provider store={store}>
      {/* TODO: Protected route */}
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
    </Provider>
  );
};
export default App;
