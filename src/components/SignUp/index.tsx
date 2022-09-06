import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, useWindowDimensions } from 'react-native';
import { FC } from 'react';
import Button from 'components/Button';
import COLORS from '../../colors';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import ControlledInput from '../ControlledInput';
import girlWithFlowers from '../../assets/girl-flowers.jpeg';
import { registerUser } from '../../store/sliceData';
import { useDispatch } from 'react-redux';

type Props = {};
const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

export interface User {
  login: string;
  password: string;
}

const SignUp: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSignUp = (data: any) => {
    console.log('SIGN UP');
    console.log(data);
    //@ts-ignore
    dispatch(registerUser(data));
  };
  const onForgotPassword = () => {
    // navigator.navigate('ForgotPassword');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <Text style={styles.text}>Welcome to Femme</Text>
          <ControlledInput
            style={{}}
            control={control}
            name="login"
            placeholder="Enter your username"
            rules={{ required: 'Username is required' }}
          />
          {/* <ControlledInput
            control={control}
            name="e-mail"
            type="e-mail"
            placeholder="Enter your email"
            rules={{ required: 'Username is required', pattern: EMAIL_REGEX }}
          /> */}
          <ControlledInput
            style={{}}
            control={control}
            name="password"
            type="password"
            placeholder="Enter your password"
            rules={{
              required: 'Password is required',
              minLength: {
                value: 5,
                message: 'Password should be minimum 5 characters long',
              },
            }}
          />
          {/* <ControlledInput
            control={control}
            name="passwordRepeat"
            type="password"
            placeholder="Repeat password"
            rules={{
              required: 'Password is required',
              minLength: {
                value: 5,
                message: 'Password should be minimum 5 characters long',
              },
            }}
          /> */}
          <Button title="Sign Up" onPress={handleSubmit(onSignUp)} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <View style={styles.imageContainer}>
            <Image source={girlWithFlowers} style={[styles.image, { height: height * 0.3 }]} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 25,
  },
  image: {
    height: 300,
    width: 300,
  },
  imageContainer: {
    backgroundColor: COLORS.colorSupportingBeige,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: COLORS.colorGreyscaleContent,
    fontSize: 24,
  },
});

export default SignUp;
