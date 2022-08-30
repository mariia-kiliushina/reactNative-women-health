import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FC } from 'react';
import COLORS from '../../colors';

type Ttype = 'password' | 'e-mail' | 'primary' | 'error';
type Props = {
  type: Ttype;
  secureTextEntry?: boolean;
  placeholder: string;
};

const MyInput: FC<Props> = (props) => {
  const { placeholder, type } = props;
  const [text, onChangeText] = React.useState('');
  const getKeyboardType = (type: Ttype) => {
    switch (type) {
      case 'e-mail':
        return 'email-address';
        break;
      default:
        return 'default';
    }
  };
  return (
    <View>
      <TextInput
        secureTextEntry={type === 'password'}
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
        placeholder={placeholder}
        keyboardType={getKeyboardType(type) || undefined}
      />
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
