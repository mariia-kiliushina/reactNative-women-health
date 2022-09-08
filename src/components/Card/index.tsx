import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import Button from '../Button';
import { Picker } from '@react-native-picker/picker';
import COLORS from '../../colors';
import { useNavigation } from '@react-navigation/native';
import shevron_primary_30 from '../../assets/shevron-primary-30.png';
import headache from '../../assets/headache.png';
import crumps from '../../assets/crumps.png';
import discharges from '../../assets/discharges.png';
import SymptomIcon from '../SymptomIcon';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'hooks';
import { postData } from 'store/sliceData';

type Props = {};

const Card: FC<Props> = (props) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.rowFlexWrapper}>{Header}</View>
      <View style={styles.rowFlexWrapper}>{Content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    width: '100%',
    marginVertical: 10,
    height: 160,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  rowFlexWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todayText: {
    color: COLORS.colorGreyscaleContent,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: COLORS.colorPrimary,
    height: 200,
    width: 200,
    padding: 10,
    margin: 20,
  },
  buttonClose: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.colorPrimary,
    height: 50,
    width: 100,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  dayNumberStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default TodaysLogs;
