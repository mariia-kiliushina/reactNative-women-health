import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ControlledInput from 'components/ControlledInput';
import Button from '../Button';
import { Picker } from '@react-native-picker/picker';
import { Control, Controller, FieldValues, useForm } from 'react-hook-form';
import { postData } from 'store/sliceData';
import COLORS from '../../colors';

type Props = {
  date: string;
};
const RoundButton: FC<Props> = (props) => {
  const { date } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const onSubmit = (data: any) => {
    let obj = { date: date, type: data.type, severity: data.severity };
    dispatch(postData(obj));
  };

  return (
    <View>
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
            {/* <Controller
              name="type"
              rules={{}}
              control={control}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => ( */}
            <View style={styles.container}>
              <Picker onBlur={() => {}} onValueChange={() => {}} selectedValue={selected}>
                <Picker.Item label="Choose type" value="choose" />
                <Picker.Item label="Had Flows" value="Had flows" />
                <Picker.Item label="No flows" value="No flows" />
                <Picker.Item label="Meds" value="Meds" />
              </Picker>
              {/* {error && <Text>{error.message || 'Error'}</Text>} */}
            </View>
            {/* )}
            /> */}
            {/* <Controller
              name="severity"
              rules={{}}
              control={control}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => ( */}
            <View style={styles.container}>
              <Picker onBlur={() => {}} onValueChange={() => {}} selectedValue={selected}>
                <Picker.Item label="Choose severity" value="chooseseverity" />
                <Picker.Item label="Low" value="low" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="High" value="high" />
              </Picker>
              {/* {error && <Text>{error.message || 'Error'}</Text>} */}
            </View>
            {/* )}
            /> */}

            <Button type="primary" title="Submit" onPress={handleSubmit(onSubmit)} />
            <TouchableOpacity
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={[styles.button]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 12,
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default RoundButton;
