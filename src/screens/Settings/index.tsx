import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, FlatList } from 'react-native';
import { FC } from 'react';
type Props = {};

const Settings: FC<Props> = (props) => {
  const {} = props;
  const {} = styles;

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
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
