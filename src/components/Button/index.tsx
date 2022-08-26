import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { FC } from 'react';

type Props = {
  type: 'primary' | 'secondary' | 'disabled' | 'danger' | 'outlined' | 'flat';
  // size?: 'small' | 'medium' | 'large';
  // text: string;
  // onClick: () => void;
  // inputType?: 'submit' | 'button';
  title: string;
  onPress: () => void;
};

const MyButton: FC<Props> = (props) => {
  const { title, onPress } = props;
  const className = cx({
    [styles.defaultButton]: true,
    [styles[type]]: type,
    [styles[size]]: size,
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.defaultButton} onPress={onPress}>
        <View style={styles.defaultButton}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  defaultButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    cursor: 'pointer',
    fontWeight: 500,
    width: 100,
    height: 40,
    backgroundColor: 'yellow',
  },
  primary: {
    backgroundColor: 'blue',
    color: 'white',
  },
  secondary: {
    backgroundColor: 'white',
    color: 'white',
  },
});

export default MyButton;
