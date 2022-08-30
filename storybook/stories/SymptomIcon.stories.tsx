//@ts-nocheck

import { storiesOf } from '@storybook/react-native';
import React from 'react';
import SymptomIcon from '../../src/components/SymptomIcon';
import CenterView from './CenterView';
import imageSources from '../../src/images';

storiesOf('SymptomIcon', module)
  .add('default', () => {
    return (
      <CenterView>
        <SymptomIcon source={imageSources.headache} symptomText="Text" onPress={() => {}} />
      </CenterView>
    );
  })
  .add('marked', () => {
    return (
      <CenterView>
        <SymptomIcon
          source={imageSources.headache}
          symptomText="Text"
          onPress={() => {}}
          marked={true}
        />
      </CenterView>
    );
  });
