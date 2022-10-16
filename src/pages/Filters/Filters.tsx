import { View, Text } from "react-native";
import React, { FC } from "react";
import { FiltersScreenProps } from "../../types/navigateTypes";

const Filters: FC<FiltersScreenProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Filters Page</Text>
    </View>
  );
};

export default Filters;
