import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import Calendar from '../Calendar';
import COLORS from '../../colors';
type Props = {};

const Home: FC<Props> = (props) => {
  const {} = props;
  const {} = styles;

  return (
    <View style={styles.container}>
      <Calendar></Calendar>
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
