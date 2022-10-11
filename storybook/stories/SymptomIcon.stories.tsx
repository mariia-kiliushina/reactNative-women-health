import { storiesOf } from '@storybook/react-native';
import React from 'react';
import RoundIcon from '../../src/components/RoundIcon';
import CenterView from './CenterView';

storiesOf('SymptomIcon', module)
  .add('default', () => {
    return (
      <CenterView>
        <RoundIcon source={require('assets/symptoms/headache.png')} symptomText="Text" />
      </CenterView>
    );
  })
  .add('marked', () => {
    return (
      <CenterView>
        <RoundIcon
          source={require('assets/symptoms/headache.png')}
          symptomText="Text"
          marked={true}
        />
      </CenterView>
    );
  });
