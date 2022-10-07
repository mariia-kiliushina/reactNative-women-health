import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, useWindowDimensions } from 'react-native';
import { FC } from 'react';
import Button from 'components/Button';
import COLORS from 'src/constants/colors';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import ControlledInput from 'components/ControlledInput';
import { authenticateUser, clearAll } from 'src/store/sliceUser';
import { useDispatch } from 'react-redux';
import GoBackButton from 'components/GoBackButton';

type Props = {};

const SignIn: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSignIn = (data: any) => {
    dispatch(clearAll());
    //@ts-ignore
    setTimeout(() => dispatch(authenticateUser(data)), 1000);
    //@ts-ignore
    setTimeout(() => navigation.navigate('Main'), 2000);
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
    <View style={styles.container}>
      <View style={styles.inputsWrapper}>
        <Text style={styles.text}>Sign In</Text>
        <ControlledInput
          style={styles.input}
          control={control}
          name="login"
          type="e-mail"
          placeholder="Email or username"
          rules={{ required: 'Username is required' }}
        />
        <ControlledInput
          style={styles.input}
          control={control}
          name="password"
          type="password"
          placeholder="Password"
          rules={{
            required: 'Password is required',
          }}
        />

        <Button
          style={{ alignSelf: 'flex-end' }}
          type="flat"
          title="Forgot password?"
          onPress={onForgotPassword}
        />
        <Button
          style={{ marginVertical: 30, alignSelf: 'flex-end' }}
          type="primary"
          title="Sign In"
          onPress={handleSubmit(onSignIn)}
        />
        <View style={styles.registerWrapper}>
          <Text style={styles.newToText}>New to Femme?</Text>
          <Button style={{ width: 50 }} type="flat" title="Register" onPress={onSignUp} />
        </View>
      </View>
      <View style={{ position: 'absolute', top: 100, left: 20 }}>
        <GoBackButton type="flat" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  registerWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputsWrapper: {
    height: '100%',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  input: { width: '90%', marginBottom: 40, fontSize: 39 },
  text: {
    color: COLORS.colorGreyscaleContent,
    fontSize: 32,
    alignSelf: 'flex-start',
    marginBottom: 50,
    marginLeft: 20,
  },
  newToText: {
    fontSize: 18,
  },
});

export default SignIn;