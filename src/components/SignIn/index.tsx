import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, useWindowDimensions } from 'react-native';
import { FC } from 'react';
import Button from 'components/Button';
import COLORS from '../../colors';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import ControlledInput from '../ControlledInput';
import girlWithFlowers from '../../assets/girl-flowers.png';
import { authenticateUser } from '../../store/sliceData';
import { useDispatch } from 'react-redux';
type Props = {};

const SignIn: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSignIn = (data: any) => {
    //@ts-ignore
    dispatch(authenticateUser(data));
    //@ts-ignore
    navigation.navigate('Home');
  };
  const onSignUp = () => {
    //@ts-ignore
    navigation.navigate('Sign Up');
  };
  const onForgotPassword = () => {
    //@ts-ignore
    navigation.navigate('Forgot Password');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={girlWithFlowers} style={[styles.image, { height: height * 0.3 }]} />
        </View>
        <View style={styles.inputsContainer}>
          <Text style={styles.text}>Welcome to Femme</Text>
          <ControlledInput
            control={control}
            name="username"
            type="e-mail"
            placeholder="Enter your email/username"
            rules={{ required: 'Username is required' }}
          />
          <ControlledInput
            control={control}
            name="password"
            type="password"
            placeholder="Enter your password"
            rules={{
              required: 'Password is required',
            }}
          />

          <Button type="primary" title="Sign In" onPress={handleSubmit(onSignIn)} />
          <Button type="primary" title="Forgot password?" onPress={onForgotPassword} />
          <Text style={styles.text}>or</Text>
          <Button type="primary" title="Sign Up" onPress={onSignUp} />
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

export default SignIn;
