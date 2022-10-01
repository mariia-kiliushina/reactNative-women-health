import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import RoundButton from '../../src/components/RoundButton';
import CenterView from './CenterView';

storiesOf('RoundButton', module).add('primary', () => {
  return (
    <CenterView>
      <RoundButton date={new Date().toDateString()} />
    </CenterView>
  );
});
