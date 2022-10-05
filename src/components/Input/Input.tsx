import React, { FC } from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { TextInput, TextInputProps } from "react-native";
import styles from "./Input.style";

type Props = TextInputProps & {
  label?: string;
  viewStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  validationMessage?: string | null;
};

const Input: FC<Props> = ({
  label,
  viewStyle,
  labelStyle,
  validationMessage,
  ...props
}) => (
  <View style={[styles.container, viewStyle ? viewStyle : null]}>
    {label ? (
      <Text style={[styles.label, labelStyle ? labelStyle : null]}>
        {label}
      </Text>
    ) : null}
    <TextInput style={styles.input} {...props} />
    {validationMessage ? (
      <Text style={styles.validation}>{validationMessage}</Text>
    ) : null}
  </View>
);

export default Input;
