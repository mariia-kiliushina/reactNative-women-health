import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, FlatList } from 'react-native';
import { FC } from 'react';
import Calendar from '../Calendar';
import { getData, IState } from 'src/store/sliceData';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { IUsersState } from 'src/store/sliceUser';

type Props = {};

const Settings: FC<Props> = (props) => {
  const {} = props;
  const {} = styles;
  const dispatch = useAppDispatch();

  const { ...tracks } = useAppSelector(
    (state: { dataSliceReducer: IState; userSliceReducer: IUsersState }) =>
      state.dataSliceReducer.tracks
  );
  const periods = Object.values(tracks);
  return (
    <View style={styles.container}>
      <Calendar periods={periods} setDate={() => {}} />
      <Calendar periods={periods} setDate={() => {}} />
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
});

export default Settings;
