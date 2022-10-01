import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Calendar from '../../src/components/Calendar';
import CenterView from './CenterView';
import { Track } from '../../src/store/sliceData';

const periods: Track[] = [
  {
    id: 5,
    flows: 'heavy',
    date: '2022-08-10',
    symptoms: '',
    mood: 'good',
  },
  {
    id: 6,
    flows: 'light',
    date: '2022-08-10',
    symptoms: '',
    mood: 'good',
  },
  {
    id: 7,
    flows: 'no-flow',
    date: '2022-08-10',
    symptoms: '',
    mood: 'sad',
  },
  {
    id: 8,
    flows: 'normal',
    date: '2022-08-13',
    symptoms: '',
    mood: 'frisky',
  },
  {
    id: 9,
    flows: 'normal',
    date: '2022-09-01',
    symptoms: '',
    mood: 'good',
  },
];

storiesOf('Calendar', module).add('primary', () => {
  return (
    <CenterView>
      <Calendar periods={periods} setDate={() => {}} />
    </CenterView>
  );
});
