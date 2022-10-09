import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Jobs: undefined;
  JobDetail: { id: number };
};

export type RootDrawerParamList = {
  JobStack: undefined;
  FavoritedJobs: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;
export type JobsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Jobs"
>;
export type JobDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "JobDetail"
>;
export type FavoritedJobsProps = DrawerScreenProps<
  RootDrawerParamList,
  "FavoritedJobs"
>;
