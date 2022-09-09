import React, { useEffect, useState } from 'react';
import { StyleSheet, Modal, View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { FC } from 'react';
import Button from '../Button';
import COLORS from '../../colors';
import { getFormatedDateFromGMTObject } from '../../helpers';
import images from '../../images';
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
import light from '../../assets/light.png';
import normal from '../../assets/normal.png';
import heavy from '../../assets/heavy.png';
import SymptomIcon from '../SymptomIcon';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'hooks';
import { postData } from 'store/sliceData';
import { Control, Controller, FieldValues } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IState, setSelectedCalendarDate } from '../../store/sliceData';
import { useAppSelector } from 'hooks';
import { IUsersState } from 'store/sliceUser';
import { createIconSetFromFontello } from 'react-native-vector-icons';

type Props = {};

const TodaysLogs: FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const { ...tracks } = useAppSelector(
    (state: { dataSliceReducer: IState; userSliceReducer: IUsersState }) =>
      state.dataSliceReducer.tracks
  );
  const periods = Object.values(tracks);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const selectedCalendarDate = useAppSelector(
    (state: { dataSliceReducer: IState; userSliceReducer: IUsersState }) =>
      state.dataSliceReducer.selectedCalendarDate
  );

  const date =
    selectedCalendarDate === getFormatedDateFromGMTObject(new Date())
      ? 'Today'
      : selectedCalendarDate;

  const [modalVisible, setModalVisible] = useState(false);

  const onSubmit = (data: any) => {
    let obj = { flows: data.flows, symptoms: data.symptoms, mood: data.mood };
    if (Object.values(obj).some((value) => value !== undefined)) {
      dispatch(postData({ date: selectedCalendarDate, ...obj }));
      setModalVisible(!modalVisible);
    } else {
      setModalVisible(!modalVisible);
    }
  };

  const optionsFlows = [
    { source: light, symptomText: 'No Flow', optionValue: 'no-flow' },
    { source: light, symptomText: 'Light', optionValue: 'light' },
    { source: normal, symptomText: 'Normal', optionValue: 'normal' },
    { source: heavy, symptomText: 'Heavy', optionValue: 'heavy' },
  ];

  const optionsSymptoms = {
    headache: { source: headache, symptomText: 'Headache', optionValue: 'headache' },
    acne: { source: acne, symptomText: 'Acne', optionValue: 'acne' },
    spotting: { source: spotting, symptomText: 'Spotting', optionValue: 'spotting' },
    painfulSex: { source: painfulSex, symptomText: 'Painful sex', optionValue: 'painfulSex' },
    hairLoss: { source: hairLoss, symptomText: 'Hair loss', optionValue: 'hairLoss' },
    crumps: { source: crumps, symptomText: 'Crumps', optionValue: 'crumps' },
    discharges: { source: discharges, symptomText: 'Discharges', optionValue: 'discharges' },
    breastTenderness: {
      source: breastTenderness,
      symptomText: 'BreastT tenderness',
      optionValue: 'breastTenderness',
    },
    moodSwings: { source: moodSwings, symptomText: 'Mood swings', optionValue: 'moodSwings' },
  };

  const optionsSymptomsArray = Object.values(optionsSymptoms);

  const optionsMood = [
    { source: light, symptomText: 'Good', optionValue: 'good' },
    { source: normal, symptomText: 'Sad', optionValue: 'sad' },
    { source: heavy, symptomText: 'Frisky', optionValue: 'frisky' },
  ];

  const getTodaysInfo = () => {
    let todaysInfo: any[] = [];
    if (!periods) return;
    periods.forEach((period) => {
      if (!period.symptoms) return;

      if (period.date === selectedCalendarDate) {
        todaysInfo.push({
          //@ts-ignore
          source: optionsSymptoms[period.symptoms].source,
          //@ts-ignore
          symptomText: optionsSymptoms[period.symptoms].symptomText,
        });
      }
    });
    return todaysInfo;
  };

  let todaysInfo = getTodaysInfo();

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
                <Text style={styles.todayText}>{date}</Text>
              </View>
              <View style={styles.rowFlexWrapper}>
                <Text style={styles.todayText}>Menstrual Flow</Text>
              </View>
              <View style={styles.rowFlexWrapper}>
                {optionsFlows.map(({ source, symptomText, optionValue }) => (
                  <Controller
                    key={optionValue}
                    name="flows"
                    rules={{}}
                    control={control}
                    render={({ field }) => (
                      <View style={styles.rowFlexWrapper}>
                        <SymptomIcon
                          source={source}
                          symptomText={symptomText}
                          marked={false}
                          value={field.value}
                          onChange={field.onChange}
                          optionValue={optionValue}
                        />
                      </View>
                    )}
                  />
                ))}
              </View>
              <View style={styles.rowFlexWrapper}>
                <Text style={styles.todayText}>Mood</Text>
              </View>
              <View style={styles.rowFlexWrapper}>
                {optionsMood.map(({ source, symptomText, optionValue }) => (
                  <Controller
                    key={optionValue}
                    name="mood"
                    rules={{}}
                    control={control}
                    render={({ field }) => (
                      <View style={styles.rowFlexWrapper}>
                        <SymptomIcon
                          source={source}
                          symptomText={symptomText}
                          marked={false}
                          value={field.value}
                          onChange={field.onChange}
                          optionValue={optionValue}
                        />
                      </View>
                    )}
                  />
                ))}
              </View>
              <View style={styles.rowFlexWrapper}>
                <Text style={styles.todayText}>Symptoms</Text>
              </View>
              <View style={styles.rowFlexWrapper}>
                {optionsSymptomsArray.map(({ source, symptomText, optionValue }) => (
                  <Controller
                    key={optionValue}
                    name="symptoms"
                    rules={{}}
                    control={control}
                    render={({ field }) => (
                      <View style={styles.rowFlexWrapper}>
                        <SymptomIcon
                          source={source}
                          symptomText={symptomText}
                          marked={false}
                          value={field.value}
                          onChange={field.onChange}
                          optionValue={optionValue}
                        />
                      </View>
                    )}
                  />
                ))}
              </View>
            </View>

            <Pressable onPress={handleSubmit(onSubmit)} style={styles.closePressable}>
              <Ionicons name={'close'} size={40} color={'grey'} />
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.rowFlexWrapper}>
          <Text style={styles.todayText}>{date}</Text>
          <Button
            style={{ alignSelf: 'flex-end', width: 60, height: 60 }}
            imageStyle={{ width: 20, height: 20 }}
            type="flat"
            imageSrc={shevron_primary_30}
            onPress={() => setModalVisible(true)}
          />
        </View>
        <View style={styles.rowFlexWrapper}>
          {/* @ts-ignore */}
          {todaysInfo.map(({ source, symptomText }) => (
            <SymptomIcon
              key={symptomText}
              source={source}
              symptomText={symptomText}
              marked={true}
            />
          ))}
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
  closePressable: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    left: 180,
    height: 90,
    width: 90,
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
