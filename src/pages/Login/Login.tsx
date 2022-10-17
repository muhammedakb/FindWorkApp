import React, { FC } from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import Lottie from "lottie-react-native";
import * as Yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useKeyboardStatus from "../../hooks/useKeyboardStatus";
import {
  errorSelector,
  statusSelector,
  UserInput,
  userLogin,
} from "../../redux/loginSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { LoginScreenProps } from "../../types/navigateTypes";
import styles, { focusedStyles } from "./Login.style";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be a minimum of 3 characters!")
    .max(30, "Username must be a maximum of 30 characters!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be a minimum of 6 characters!")
    .required("Required"),
});

const Login: FC<LoginScreenProps> = () => {
  const { isKeyboardVisible, keyboardHeight } = useKeyboardStatus();
  const dispatch = useAppDispatch();
  const status = useAppSelector(statusSelector);
  const error = useAppSelector(errorSelector);

  const handleLogin = (values: UserInput) => {
    dispatch(userLogin(values));
  };

  return (
    <View style={styles.container}>
      <Lottie
        style={[styles.img, isKeyboardVisible ? styles.focused_img : null]}
        source={require("../../assets/login.json")}
        autoPlay
      />
      <View
        style={[
          styles.form,
          isKeyboardVisible ? focusedStyles(keyboardHeight).form : null,
        ]}
        // onLayout={(e) => console.log(e.nativeEvent.layout.height)}
      >
        {error ? (
          <Text style={styles.error_message}>
            User name or Password is wrong!
          </Text>
        ) : null}
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
              <Input
                label="user name"
                value={values.username}
                onChangeText={handleChange("username")}
                placeholder="donero"
                validationMessage={
                  errors.username && touched.username ? errors.username : null
                }
                autoCapitalize="none"
              />
              <Input
                label="password"
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="ewedon"
                validationMessage={
                  errors.password && touched.password ? errors.password : null
                }
                autoCapitalize="none"
                secureTextEntry
              />
              <Button
                text="Login"
                style={styles.button}
                onPress={handleSubmit}
                loading={status === "loading"}
                disabled={status === "loading"}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
