import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '../../../src/components/Button';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .add('primary', () => {
    return (
      <CenterView>
        <Button type="primary" title="Click" onPress={action('clicked-text')}></Button>
      </CenterView>
    );
  })
  .add('secondary', () => {
    return (
      <CenterView>
        <Button type="secondary" title="Click" onPress={action('clicked-text')}></Button>
      </CenterView>
    );
  });
