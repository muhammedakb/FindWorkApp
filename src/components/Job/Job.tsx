import React, { FC } from "react";
import { Text, View, TouchableWithoutFeedback, Alert } from "react-native";
import styles from "./Job.style";

type Props = {
  category: string;
  companyName: string;
  publicationDate: Date;
  location: string;
  level: string;
};

const Job: FC<Props> = ({
  category,
  companyName,
  publicationDate,
  location,
  level,
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Alert.alert("zort")}>
      <View style={styles.container}>
        <Text style={styles.title}>{category}</Text>
        <Text>{companyName}</Text>
        <View style={styles.footer_container}>
          <View style={styles.footer_left}>
            <Text>{`${publicationDate}`} • </Text>
            <View style={styles.location}>
              <Text style={styles.location_text}>{location}</Text>
            </View>
          </View>
          <Text style={styles.level}>{level}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Job;
