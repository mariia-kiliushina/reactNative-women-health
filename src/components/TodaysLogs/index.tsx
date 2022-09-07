import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FC } from 'react';
import Button from 'components/Button';
import COLORS from '../../colors';
import { useNavigation } from '@react-navigation/native';
import shevron_primary_30 from '../../assets/shevron-primary-30.png';
import headache from '../../assets/headache.png';
import crumps from '../../assets/crumps.png';
import discharges from '../../assets/discharges.png';
import SymptomIcon from '../SymptomIcon';

type Props = {};

const TodaysLogs: FC<Props> = (props) => {
  const navigation = useNavigation();

  const onForgotPassword = () => {
    //@ts-ignore
    navigation.navigate('Forgot Password');
  };
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.rowFlexWrapper}>
        <Text style={styles.todayText}>Today</Text>
        <Button
          style={{ alignSelf: 'flex-end', width: 60, height: 60 }}
          imageStyle={{ width: 20, height: 20 }}
          type="flat"
          imageSrc={shevron_primary_30}
          onPress={onForgotPassword}
        />
      </View>
      <View style={styles.rowFlexWrapper}>
        <SymptomIcon source={headache} symptomText="" marked={true} />
        <SymptomIcon source={crumps} symptomText="" marked={true} />
        <SymptomIcon source={discharges} symptomText="" marked={true} />
      </View>
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
});

export default TodaysLogs;
