import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, useWindowDimensions } from 'react-native';
import { FC } from 'react';
import Button from 'components/Button';
import COLORS from '../../colors';
import imageSources from '../../images';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import ControlledInput from '../ControlledInput';
import girlWithFlowers from '../../assets/girl-flowers.png';

type Props = {};
const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

const SignUp: FC<Props> = (props) => {
  // const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSignUp = (data: {}) => {
    console.log('SIGN UP');
    console.log(data);

    // navigator.navigate('Main');
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
            control={control}
            name="username"
            placeholder="Enter your username"
            rules={{ required: 'Username is required' }}
          />
          <ControlledInput
            control={control}
            name="e-mail"
            type="e-mail"
            placeholder="Enter your email"
            rules={{ required: 'Username is required', pattern: EMAIL_REGEX }}
          />
          <ControlledInput
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
          <ControlledInput
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
          />
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
    height: 500,
    width: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
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