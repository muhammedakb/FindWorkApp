import React, { FC } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  TextStyle,
} from "react-native";
import styles from "./Button.style";

type Props = {
  touchEffect?: boolean;
  onPress?: (event: GestureResponderEvent | any) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  loading?: boolean;
  disabled?: boolean;
};

const Button: FC<Props> = ({
  touchEffect = true,
  onPress,
  style,
  textStyle,
  text,
  loading = false,
  disabled = false,
}) =>
  touchEffect ? (
    <TouchableOpacity
      style={[styles.button, style ? style : null]}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color="#40dac6" />
      ) : (
        <Text style={[styles.text, textStyle ? textStyle : null]}>{text}</Text>
      )}
    </TouchableOpacity>
  ) : (
    <TouchableWithoutFeedback
      style={[styles.button, style ? style : null]}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color="#40dac6" />
      ) : (
        <Text style={[styles.text, textStyle ? textStyle : null]}>{text}</Text>
      )}
    </TouchableWithoutFeedback>
  );

export default Button;
