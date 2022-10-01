import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from '../../src/components/Button';
import CenterView from './CenterView';

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
  })
  .add('disabled', () => {
    return (
      <CenterView>
        <Button type="disabled" title="Click" onPress={action('clicked-text')}></Button>
      </CenterView>
    );
  })
  .add('flat', () => {
    return (
      <CenterView>
        <Button type="flat" title="Click" onPress={action('clicked-text')}></Button>
      </CenterView>
    );
  })
  .add('danger', () => {
    return (
      <CenterView>
        <Button type="danger" title="Click" onPress={action('clicked-text')}></Button>
      </CenterView>
    );
  })
  .add('outlined', () => {
    return (
      <CenterView>
        <Button type="outlined" title="Click" onPress={action('clicked-text')}></Button>
      </CenterView>
    );
  })
  .add('small', () => {
    return (
      <CenterView>
        <Button size="small" title="Click" onPress={action('clicked-text')}></Button>
      </CenterView>
    );
  })
  .add('medium', () => {
    return (
      <CenterView>
        <Button size="medium" title="Click" onPress={action('clicked-text')}></Button>
      </CenterView>
    );
  })
  .add('large', () => {
    return (
      <CenterView>
        <Button size="large" title="Click" onPress={action('clicked-text')}></Button>
      </CenterView>
    );
  });
