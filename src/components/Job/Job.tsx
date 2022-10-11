import React, { FC } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../Button";
import styles from "./Job.style";

type Props = {
  category: string;
  companyName: string;
  publicationDate: string;
  location: string;
  level: string;
  onPress?: () => void;
  removeButton?: boolean;
  removeButtonOnPress?: () => void;
};

const Job: FC<Props> = ({
  category,
  companyName,
  publicationDate,
  location,
  level,
  onPress,
  removeButton = false,
  removeButtonOnPress,
}) => (
  <TouchableWithoutFeedback onPress={() => onPress?.()}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{category}</Text>
        <Text style={styles.level}>{level}</Text>
      </View>

      <Text>{companyName}</Text>

      <View style={styles.footer}>
        <Text>{publicationDate} • </Text>
        <View style={styles.location}>
          <Text style={styles.location_text}>{location}</Text>
        </View>
      </View>
      {removeButton ? (
        <Button
          text="Remove from favorites"
          icon={<Icon name="bookmark-off" size={20} color="#fff" />}
          style={styles.button}
          onPress={() => removeButtonOnPress?.()}
        />
      ) : null}
    </View>
  </TouchableWithoutFeedback>
);

export default Job;
