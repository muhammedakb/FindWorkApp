import React, { FC } from "react";
import { View } from "react-native";
import Job from "../../components/Job";
import { JobsScreenProps } from "../../types/navigateTypes";

const Jobs: FC<JobsScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Job />
    </View>
  );
};

export default Jobs;
