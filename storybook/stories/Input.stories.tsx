import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Input from '../../src/components/Input';
import CenterView from './CenterView';

storiesOf('Input', module).add('primary', () => {
  return (
    <CenterView>
      <Input />
    </CenterView>
  );
});
