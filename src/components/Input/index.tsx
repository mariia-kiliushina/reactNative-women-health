import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FC } from 'react';
import COLORS from '../../colors';

export type Ttype = 'password' | 'e-mail' | 'default';
type Props = {
  value?: string;
  onChangeText?: () => void;
  onBlur?: () => void;
  type?: Ttype;
  placeholder: string;
  isError?: boolean | undefined;
};

const MyInput: FC<Props> = (props) => {
  const { placeholder, value, type = 'default', onChangeText, onBlur, isError = false } = props;
  // const [text, onChangeText] = React.useState('');
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
        onBlur={onBlur}
        value={value}
        style={[styles.input, isError ? styles.error : null]}
        placeholder={placeholder}
        keyboardType={getKeyboardType(type) || undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 0,
    height: 40,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  error: {
    borderColor: COLORS.colorSupportingErrorred,
  },
});

export default MyInput;
