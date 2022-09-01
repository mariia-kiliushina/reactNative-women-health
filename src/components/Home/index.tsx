import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import Calendar from '../Calendar';
import COLORS from '../../colors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IState, Track, getData } from '../../store/sliceData';
import { IUsersState } from '../../store/sliceUser';
type Props = {};

const Home: FC<Props> = (props) => {
  const {} = props;
  const {} = styles;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const { ...tracks }: Record<number, Track> = useAppSelector(
    (state: { dataSliceReducer: IState; userSliceReducer: IUsersState }) =>
      state.dataSliceReducer.tracks
  );

  console.log('TRACKS');
  console.log(JSON.stringify(tracks));

  return (
    <View style={styles.container}>
      <View>
        <Calendar></Calendar>
        {/* <FlatList
        data={tracks}
        renderItem={({number, track}) => <Text>{track}</Text>}
      />
        {Object.entries(tracks).forEach((element) => {
          <>{element}</View>;
        })} */}
      </View>
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
