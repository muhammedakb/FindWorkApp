import "react-native-gesture-handler";
import React from "react";
import { Dimensions, useWindowDimensions } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Feather";
import Button from "./components/Button";
import FavoriteJobs from "./pages/FavoriteJobs";
import JobDetail from "./pages/JobDetail";
import Filters from "./pages/Filters";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Company from "./pages/Company";
import Category from "./pages/Category";
import Level from "./pages/Level";
import Location from "./pages/Location";
import { logout, userSelector } from "./redux/loginSlice";
import { useAppDispatch, useAppSelector } from "./redux/store";
import {
  FilterStackParamList,
  RootDrawerParamList,
  RootStackParamList,
} from "./types/navigateTypes";

type CustomDrawerProps = DrawerContentComponentProps & {
  onPress: () => void;
};

const CustomDrawerContent = (props: CustomDrawerProps) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <Button
      text="Logout"
      style={{
        alignSelf: "center",
        width: 120,
        marginTop: Dimensions.get("window").height - 173,
      }}
      icon={<Icon name="log-out" size={20} color="#fff" />}
      iconPosition="left"
      onPress={props.onPress}
    />
  </DrawerContentScrollView>
);

const Stack = createNativeStackNavigator<RootStackParamList>();
const FiltersStack = createNativeStackNavigator<FilterStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const dimensions = useWindowDimensions();

  const handleLogout = () => {
    dispatch(logout());
  };

  const FilterStack = () => (
    <FiltersStack.Navigator>
      <FiltersStack.Screen
        name="Filters"
        component={Filters}
        options={{ headerTitle: "Filter Jobs", headerTitleAlign: "center" }}
      />
      <FiltersStack.Screen name="Company" component={Company} />
      <FiltersStack.Screen name="Category" component={Category} />
      <FiltersStack.Screen name="Level" component={Level} />
      <FiltersStack.Screen name="Location" component={Location} />
    </FiltersStack.Navigator>
  );

  const JobStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // statusBarColor: "#40dac6",
        // navigationBarColor: "#40dac6",
      }}
    >
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="FiltersStack" component={FilterStack} />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        // options={{ navigationBarColor: "" }}
      />
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
            drawerActiveBackgroundColor: "#40dac6",
            drawerActiveTintColor: "#fff",
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
