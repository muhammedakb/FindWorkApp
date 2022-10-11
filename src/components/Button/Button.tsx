import React, { FC, memo, ReactNode, useMemo } from "react";
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
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

const Button: FC<Props> = ({
  touchEffect = true,
  onPress,
  style,
  textStyle,
  text,
  loading = false,
  disabled = false,
  icon,
  iconPosition = "left",
}) => {
  const buttonChildren: ReactNode = useMemo(
    () =>
      loading ? (
        <ActivityIndicator color="#40dac6" />
      ) : iconPosition === "left" ? (
        <>
          {icon}
          <Text
            style={[
              styles.text,
              styles.left_icon,
              textStyle ? textStyle : null,
            ]}
          >
            {text}
          </Text>
        </>
      ) : (
        <>
          <Text
            style={[
              styles.text,
              styles.right_icon,
              textStyle ? textStyle : null,
            ]}
          >
            {text}
          </Text>
          {icon}
        </>
      ),
    [loading, iconPosition, icon, text, textStyle]
  );

  return touchEffect ? (
    <TouchableOpacity
      style={[disabled ? styles.disabled : styles.button, style ? style : null]}
      onPress={onPress}
      disabled={disabled}
    >
      {buttonChildren}
    </TouchableOpacity>
  ) : (
    <TouchableWithoutFeedback
      style={[disabled ? styles.disabled : styles.button, style ? style : null]}
      onPress={onPress}
      disabled={disabled}
    >
      {buttonChildren}
    </TouchableWithoutFeedback>
  );
};
export default memo(Button);
