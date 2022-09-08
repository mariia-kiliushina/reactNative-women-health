import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { FC } from 'react';
import Button from 'components/Button';
import COLORS from '../../colors';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import ControlledInput from '../ControlledInput';
import GoBackButton from '../GoBackButton';
type Props = {};

const ForgotPassword: FC<Props> = (props) => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <Text style={styles.text}>Welcome to Femme</Text>
          <ControlledInput
            control={control}
            name="username"
            type="e-mail"
            placeholder="Enter your email/username"
            rules={{ required: 'Username is required' }}
          />

          <Button title="Reset password" onPress={() => console.log('Reset')} />
        </View>
        <View style={{ position: 'absolute', top: 100, left: 20 }}>
          <GoBackButton type="flat" onPress={() => navigation.goBack()} />
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

export default ForgotPassword;
