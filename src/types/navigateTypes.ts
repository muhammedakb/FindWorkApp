import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Jobs: undefined;
  FiltersStack: undefined;
  JobDetail: { id: number };
};

export type FilterStackParamList = {
  Filters: undefined;
  Company: undefined;
  Category: undefined;
  Level: undefined;
  Location: undefined;
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

export type FiltersScreenProps = NativeStackScreenProps<
  FilterStackParamList,
  "Filters"
>;
export type CompanyScreenProps = NativeStackScreenProps<
  FilterStackParamList,
  "Company"
>;
export type CategoryScreenProps = NativeStackScreenProps<
  FilterStackParamList,
  "Category"
>;
export type LevelScreenProps = NativeStackScreenProps<
  FilterStackParamList,
  "Level"
>;
export type LocationScreenProps = NativeStackScreenProps<
  FilterStackParamList,
  "Location"
>;

export type JobStackProps = NativeStackScreenProps<
  RootDrawerParamList,
  "JobStack"
>;

export type FavoritedJobsProps = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, "FavoritedJobs">,
  NativeStackScreenProps<RootStackParamList>
>;
