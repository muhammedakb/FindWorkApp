import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
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
export type JobStackProps = NativeStackScreenProps<
  RootDrawerParamList,
  "JobStack"
>;

export type FavoritedJobsProps = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, "FavoritedJobs">,
  NativeStackScreenProps<RootStackParamList>
>;
