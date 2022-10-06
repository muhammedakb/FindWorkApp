import React, { FC } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from "react-native";
import styles from "./Button.style";

type Props = {
  touchEffect?: boolean;
  onPress?: (event: GestureResponderEvent | any) => void;
  style?: StyleProp<ViewStyle>;
  text: string;
  loading?: boolean;
};

const Button: FC<Props> = ({
  touchEffect = true,
  onPress,
  style,
  text,
  loading = false,
}) =>
  touchEffect ? (
    <TouchableOpacity
      style={[styles.button, style ? style : null]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#40dac6" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  ) : (
    <TouchableWithoutFeedback
      style={[styles.button, style ? style : null]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#40dac6" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableWithoutFeedback>
  );

export default Button;
