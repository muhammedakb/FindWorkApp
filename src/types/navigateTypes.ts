import { DrawerScreenProps } from "@react-navigation/drawer";

export type RootDrawerParamList = {
  Jobs: undefined;
  JobDetail: { id: string };
};

export type JobsScreenProps = DrawerScreenProps<RootDrawerParamList, "Jobs">;
export type JobDetailScreenProps = DrawerScreenProps<
  RootDrawerParamList,
  "JobDetail"
>;
