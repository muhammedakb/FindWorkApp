import React, { FC } from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { LoginScreenProps } from "../../types/navigateTypes";
import Lottie from "lottie-react-native";
import styles from "./Login.style";
import useKeyboardStatus from "../../hooks/useKeyboardStatus";
import { Formik } from "formik";
import * as Yup from "yup";
import { userLogin, UserInput } from "../../redux/loginSlice";
import { useAppDispatch } from "../../hooks/useStore";

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
  const { isKeyboardVisible } = useKeyboardStatus();
  const dispatch = useAppDispatch();

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
        style={[styles.form, isKeyboardVisible ? styles.focused_form : null]}
      >
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
              />
              <Input
                label="password"
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="ewedon"
                validationMessage={
                  errors.password && touched.password ? errors.password : null
                }
                secureTextEntry
              />
              {/* TODO: Loading animation add in button */}
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
