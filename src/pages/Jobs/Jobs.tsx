import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { logout } from "../../redux/loginSlice";
import { useAppDispatch } from "../../redux/store";
import { JobsScreenProps } from "../../types/navigateTypes";

const Jobs: FC<JobsScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Jobs</Text>
      <Button
        title="Go job detail"
        onPress={() => navigation.navigate("FavoritedJobs", { id: "12312421" })}
      />
      <Button title="logout" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default Jobs;
