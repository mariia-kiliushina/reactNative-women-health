import { storiesOf } from '@storybook/react-native';
import React from 'react';
import SymptomIcon from '../../src/components/SymptomIcon';
import CenterView from './CenterView';

storiesOf('SymptomIcon', module)
  .add('default', () => {
    return (
      <CenterView>
        <SymptomIcon source={require('assets/symptoms/headache.png')} symptomText="Text" />
      </CenterView>
    );
  })
  .add('marked', () => {
    return (
      <CenterView>
        <SymptomIcon
          source={require('assets/symptoms/headache.png')}
          symptomText="Text"
          marked={true}
        />
      </CenterView>
    );
  });
