import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CalendarStrip from '../../src/components/CalendarStrip';
import CenterView from './CenterView';

storiesOf('CalendarStrip', module).add('primary', () => {
  return (
    <CenterView>
      <CalendarStrip />
    </CenterView>
  );
});
