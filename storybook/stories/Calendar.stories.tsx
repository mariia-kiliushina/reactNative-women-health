import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Calendar from '../../src/components/Calendar';
import CenterView from './CenterView';

storiesOf('Calendar', module).add('primary', () => {
  return (
    <CenterView>
      <Calendar />
    </CenterView>
  );
});
