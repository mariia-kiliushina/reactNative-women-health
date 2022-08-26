import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '../../../src/components/Button';
import CenterView from '../CenterView';

storiesOf('Button', module).add('with text', () => (
  <Button title="Hello Button" onPress={action('clicked-text')}></Button>
));
