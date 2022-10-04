import React, { FC } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import styles from "./Button.style";

type Props = {
  touchEffect?: boolean;
  onPress?: (event: GestureResponderEvent | any) => void;
  style?: StyleProp<ViewStyle>;
  text: string;
};

const Button: FC<Props> = ({ touchEffect = true, onPress, style, text }) =>
  touchEffect ? (
    <TouchableOpacity
      style={[styles.button, style ? style : null]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableWithoutFeedback
      style={[styles.button, style ? style : null]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableWithoutFeedback>
  );

export default Button;
