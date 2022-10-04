import { DrawerScreenProps } from "@react-navigation/drawer";

export type RootDrawerParamList = {
  Login: undefined;
  Jobs: undefined;
  FavoritedJobs: { id: string };
};

export type LoginScreenProps = DrawerScreenProps<RootDrawerParamList, "Login">;
export type JobsScreenProps = DrawerScreenProps<RootDrawerParamList, "Jobs">;
export type JobDetailScreenProps = DrawerScreenProps<
  RootDrawerParamList,
  "FavoritedJobs"
>;
