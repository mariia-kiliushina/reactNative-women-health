import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Input from '../../src/components/Input';
import CenterView from './CenterView';

storiesOf('Input', module)
  .add('default', () => {
    return (
      <CenterView>
        <Input placeholder="Enter your sth" type="default" />
      </CenterView>
    );
  })
  .add('e-mail', () => {
    return (
      <CenterView>
        <Input type="e-mail" placeholder="Enter your sth" />
      </CenterView>
    );
  })
  .add('password', () => {
    return (
      <CenterView>
        <Input type="password" placeholder="Enter your sth" />
      </CenterView>
    );
  });
