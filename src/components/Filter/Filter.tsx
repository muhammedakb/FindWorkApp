import React, { FC } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../Button";
import styles from "./Filter.style";

type Props = {
  onPress: () => void;
  isFiltered?: boolean;
};

const Filter: FC<Props> = ({ onPress, isFiltered = false }) => (
  <Button
    text="Filter jobs"
    style={styles.container}
    textStyle={styles.title}
    icon={
      <Icon
        name={isFiltered ? "filter" : "filter-outline"}
        size={30}
        color="#000"
      />
    }
    iconPosition="right"
    onPress={onPress}
  />
);

export default Filter;
