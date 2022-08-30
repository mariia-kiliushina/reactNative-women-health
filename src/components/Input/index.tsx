import React from 'react';
import { SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import { FC } from 'react';
import COLORS from '../../colors';
type Props = {};

const MyInput: FC<Props> = (props) => {
  const {} = props;
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View>
      <TextInput onChangeText={onChangeText} value={text} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

export default MyInput;
