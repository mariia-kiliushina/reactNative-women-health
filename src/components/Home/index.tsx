import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, FlatList } from 'react-native';
import { FC } from 'react';
import CalendarStrip from '../CalendarStrip';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IState, getData, postData } from '../../store/sliceData';
import { IUsersState } from '../../store/sliceUser';
import RoundButton from '../RoundButton';
import { useNavigation } from '@react-navigation/native';
import GoBackButton from 'components/GoBackButton';
import TodaysLogs from 'components/TodaysLogs';
import Menu from 'components/Menu';
import Test from 'components/Test';
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
      <View style={styles.contentWrapper}>
        <CalendarStrip />
        <RoundButton date={date} />
        <TodaysLogs />
        <Menu />
      </View>
      <View style={{ position: 'absolute', top: 100, left: 20 }}>
        <GoBackButton type="flat" onPress={() => navigation.goBack()} />
      </View>
      <Test />
      {/* @ts-ignore */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 20,
  },
  contentWrapper: {
    height: '100%',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
});

export default Home;
