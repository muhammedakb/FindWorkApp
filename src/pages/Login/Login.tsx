import React, { FC, useEffect, useState } from "react";
import { Alert, Keyboard, View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { LoginScreenProps } from "../../types/navigateTypes";
import Lottie from "lottie-react-native";
import styles from "./Login.style";
import useKeyboardStatus from "../../hooks/useKeyboardStatus";
import { Formik } from "formik";

interface Values {
  userName: string;
  password: string;
}

const Login: FC<LoginScreenProps> = () => {
  const { isKeyboardVisible } = useKeyboardStatus();

  const handleLogin = (values: Values) => {
    Alert.alert(JSON.stringify(values));
  };

  return (
    <View style={styles.container}>
      <Lottie
        style={[styles.img, isKeyboardVisible ? styles.focused_img : null]}
        source={require("../../assets/login.json")}
        autoPlay
      />
      <View
        style={[styles.form, isKeyboardVisible ? styles.focused_form : null]}
      >
        <Formik
          initialValues={{ userName: "", password: "" }}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <Input
                label="user name"
                value={values.userName}
                onChangeText={handleChange("userName")}
              />
              <Input
                label="password"
                value={values.password}
                onChangeText={handleChange("password")}
                secureTextEntry
              />
              <Button
                text="Login"
                style={styles.button}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
