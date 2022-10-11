import "react-native-gesture-handler";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobDetail from "./pages/JobDetail";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import { logout, userSelector } from "./redux/loginSlice";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { RootDrawerParamList, RootStackParamList } from "./types/navigateTypes";
import { useWindowDimensions } from "react-native";
import Button from "./components/Button";
import FavoriteJobs from "./pages/FavoriteJobs";
import Icon from "react-native-vector-icons/Feather";

type CustomDrawerProps = DrawerContentComponentProps & {
  onPress: () => void;
};

const CustomDrawerContent = (props: CustomDrawerProps) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <Button
      text="Logout"
      style={{ alignSelf: "center", width: 120, marginVertical: 10 }}
      icon={<Icon name="log-out" size={20} color="#fff" />}
      iconPosition="left"
      onPress={props.onPress}
    />
  </DrawerContentScrollView>
);

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const dimensions = useWindowDimensions();

  const handleLogout = () => {
    dispatch(logout());
  };

  const JobStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
    </Stack.Navigator>
  );

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
            drawerStyle: {
              backgroundColor: "#fff",
            },
            drawerType: dimensions.width >= 768 ? "permanent" : "front",
          }}
          useLegacyImplementation
          drawerContent={(props: DrawerContentComponentProps) => (
            <CustomDrawerContent onPress={handleLogout} {...props} />
          )}
        >
          <Drawer.Screen
            name="JobStack"
            component={JobStack}
            options={{ title: "Jobs" }}
          />
          <Drawer.Screen
            name="FavoritedJobs"
            component={FavoriteJobs}
            options={{ title: "Favorited Jobs" }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;
