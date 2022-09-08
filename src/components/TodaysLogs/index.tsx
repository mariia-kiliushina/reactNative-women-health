import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import Button from '../Button';
import COLORS from '../../colors';
import { useNavigation } from '@react-navigation/native';
import shevron_primary_30 from '../../assets/shevron-primary-30.png';
import headache from '../../assets/headache.png';
import spotting from '../../assets/spotting.png';
import acne from '../../assets/acne.png';
import breastTenderness from '../../assets/breast-tenderness.png';
import painfulSex from '../../assets/painful-sex.png';
import moodSwings from '../../assets/mood-swings.png';
import crumps from '../../assets/crumps.png';
import discharges from '../../assets/discharges.png';
import hairLoss from '../../assets/hair-loss.png';
import SymptomIcon from '../SymptomIcon';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'hooks';
import { postData } from 'store/sliceData';

type Props = {};

const TodaysLogs: FC<Props> = (props) => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();
  const [date, setDate] = useState('');
  const [selected, setSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const onSubmit = (data: any) => {
    let obj = { date: date, type: data.type, severity: data.severity };
    dispatch(postData(obj));
  };

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.colFlexWrapper}>
              <View style={styles.rowFlexWrapper}>
                <Text style={styles.todayText}>Menstrual Flow</Text>
              </View>
              <View style={styles.rowFlexWrapper}>
                <SymptomIcon source={headache} symptomText="No flow" marked={false} />
                <SymptomIcon source={crumps} symptomText="Low" marked={false} />
                <SymptomIcon source={discharges} symptomText="Medium" marked={false} />
                <SymptomIcon source={discharges} symptomText="Heavy" marked={false} />
              </View>
              <View style={styles.rowFlexWrapper}>
                <Text style={styles.todayText}>Mood</Text>
              </View>
              <View style={styles.rowFlexWrapper}>
                <SymptomIcon source={headache} symptomText="" marked={true} />
                <SymptomIcon source={crumps} symptomText="" marked={true} />
                <SymptomIcon source={discharges} symptomText="" marked={true} />
              </View>
              <View style={styles.rowFlexWrapper}>
                <Text style={styles.todayText}>Symptoms</Text>
              </View>
              <View style={styles.rowFlexWrapper}>
                <SymptomIcon source={headache} symptomText="" marked={true} />
                <SymptomIcon source={spotting} symptomText="" marked={true} />
                <SymptomIcon source={crumps} symptomText="" marked={true} />
                <SymptomIcon source={discharges} symptomText="" marked={true} />
                <SymptomIcon source={acne} symptomText="" marked={true} />
                <SymptomIcon source={breastTenderness} symptomText="" marked={true} />
                <SymptomIcon source={hairLoss} symptomText="" marked={true} />
                <SymptomIcon source={moodSwings} symptomText="" marked={true} />
                <SymptomIcon source={painfulSex} symptomText="" marked={true} />
              </View>
            </View>
            <Button
              type="primary"
              title="Hide Modal"
              onPress={() => setModalVisible(!modalVisible)}
            />
            <Button type="primary" title="Submit" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.rowFlexWrapper}>
          <Text style={styles.todayText}>Today</Text>
          <Button
            style={{ alignSelf: 'flex-end', width: 60, height: 60 }}
            imageStyle={{ width: 20, height: 20 }}
            type="flat"
            imageSrc={shevron_primary_30}
            onPress={() => setModalVisible(true)}
          />
        </View>
        <View style={styles.rowFlexWrapper}>
          <SymptomIcon source={headache} symptomText="" marked={true} />
          <SymptomIcon source={spotting} symptomText="" marked={true} />
          <SymptomIcon source={crumps} symptomText="" marked={true} />
        </View>
      </TouchableOpacity>
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
  colFlexWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    textAlign: 'left',
    fontSize: 24,
    alignSelf: 'flex-start',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
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
