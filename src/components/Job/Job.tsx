import React, { FC } from "react";
import { Text, View, TouchableWithoutFeedback, Alert } from "react-native";
import styles from "./Job.style";

const Job: FC = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Alert.alert("zort")}>
      <View style={styles.container}>
        <Text style={styles.title}>Project Management</Text>
        <Text>Siemens</Text>
        <View style={styles.footer_container}>
          <View style={styles.footer_left}>
            <Text>2 weeks ago • </Text>
            <View style={styles.location}>
              <Text style={styles.location_text}>Laplace, La</Text>
            </View>
          </View>
          <Text style={styles.level}>Mid Level</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Job;
