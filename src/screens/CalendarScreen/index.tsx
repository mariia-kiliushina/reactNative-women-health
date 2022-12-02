import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { FC } from 'react';
import Calendar from 'components/Calendar';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { IState, getData } from 'src/store/sliceData';
import { IUsersState } from 'src/store/sliceUser';
import RoundButton from 'components/RoundButton';
import GoBackButton from 'components/GoBackButton';

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
      state.dataSliceReducer.periods
  );
  const periods = Object.values(tracks);

  let [date, setDate] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Calendar setDate={setDate} periods={periods}></Calendar>
        <RoundButton date={date} />
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
    paddingTop: 80,
  },
  contentWrapper: {
    height: '100%',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.8,
  },
});

export default Home;
