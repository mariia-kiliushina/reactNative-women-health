import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FC } from 'react';
import Calendar from '../Calendar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IState, getData, postData } from '../../store/sliceData';
import { IUsersState } from '../../store/sliceUser';
import RoundButton from '../RoundButton';
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const Home: FC<Props> = (props) => {
  const {} = props;
  const {} = styles;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const { ...tracks } = useAppSelector(
    (state: { dataSliceReducer: IState; userSliceReducer: IUsersState }) =>
      state.dataSliceReducer.tracks
  );
  const periods = Object.values(tracks);

  let [date, setDate] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Calendar setDate={setDate} periods={periods}></Calendar>
        <RoundButton date={date} />
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});

export default Home;
