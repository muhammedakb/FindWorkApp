import React, { FC } from "react";
import { Text, View } from "react-native";
import { JobDetailScreenProps } from "../../types/navigateTypes";

const JobDetail: FC<JobDetailScreenProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Job Detail</Text>
    </View>
  );
};

export default JobDetail;
