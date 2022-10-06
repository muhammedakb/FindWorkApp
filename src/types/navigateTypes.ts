import { DrawerScreenProps } from "@react-navigation/drawer";

export type RootStackParamList = {
  Login: undefined;
};

export type RootDrawerParamList = {
  Jobs: undefined;
  FavoritedJobs: { id: string };
};

export type LoginScreenProps = DrawerScreenProps<RootStackParamList, "Login">;
export type JobsScreenProps = DrawerScreenProps<RootDrawerParamList, "Jobs">;
export type JobDetailScreenProps = DrawerScreenProps<
  RootDrawerParamList,
  "FavoritedJobs"
>;
