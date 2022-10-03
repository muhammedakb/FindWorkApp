import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { JobsScreenProps } from "../../types/navigateTypes";

// const Container = styled.View`
//   flex: 1;
//   background-color: #eceef0;
//   align-items: center;
//   justify-content: center;
// `;

// const RotatedBox = styled.Text`
//   transform: rotate(45deg);
//   margin-top: 40px;
//   color: #ef5251;
// `;

const Jobs: FC<JobsScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Jobs</Text>
      <Button
        title="Go job detail"
        onPress={() => navigation.navigate("JobDetail", { id: "12312421" })}
      />
    </View>
  );
};

export default Jobs;
