import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Input from '../../src/components/Input';
import CenterView from './CenterView';

storiesOf('Input', module)
  .add('primary', () => {
    return (
      <CenterView>
        <Input placeholder="Enter your sth" type={'primary'} />
      </CenterView>
    );
  })
  .add('error', () => {
    return (
      <CenterView>
        <Input type="error" placeholder="Enter your sth" />
      </CenterView>
    );
  })
  .add('password', () => {
    return (
      <CenterView>
        <Input type="password" placeholder="Enter your sth" />
      </CenterView>
    );
  })
  .add('e-mail', () => {
    return (
      <CenterView>
        <Input type="e-mail" placeholder="Enter your e-mail" secureTextEntry={true} />
      </CenterView>
    );
  });
