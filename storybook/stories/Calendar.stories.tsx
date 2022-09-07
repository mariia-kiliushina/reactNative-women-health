import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Calendar from '../../src/components/Calendar';
import CenterView from './CenterView';
import { Track } from '../../src/store/sliceData';

const periods: Track[] = [
  {
    id: 5,
    type: 'Had flows',
    date: '2022-08-10',
    severity: 'Medium',
  },
  {
    id: 6,
    type: 'Had flows',
    date: '2022-08-11',
    severity: 'Medium',
  },
  {
    id: 7,
    type: 'Had flows',
    date: '2022-08-12',
    severity: 'Medium',
  },
  {
    id: 8,
    type: 'Had flows',
    date: '2022-08-13',
    severity: 'Medium',
  },
  {
    id: 9,
    type: 'No flows',
    date: '2022-09-01',
    severity: 'Medium',
  },
  {
    id: 10,
    type: 'No flows',
    date: '2022-09-02',
    severity: 'Medium',
  },
  {
    id: 11,
    type: 'Had flows',
    date: '2022-09-16',
    severity: 'Medium',
  },
  {
    id: 12,
    type: 'Had flows',
    date: '2022-09-18',
    severity: 'Medium',
  },
  {
    id: 13,
    type: 'Had flows',
    date: '2022-09-17',
    severity: 'Medium',
  },
  {
    id: 15,
    type: 'flows',
    date: '2022-08-01',
    severity: 'low',
  },
  {
    id: 16,
    type: 'Had Flows',
    date: '2022-08-01',
    severity: 'medium',
  },
  {
    id: 17,
    type: 'Had Flows',
    date: '{"year":2022,"month":8,"day":5,"timestamp":1659657600000,"dateString":"2022-08-05"}',
    severity: 'high',
  },
  {
    id: 18,
    type: 'Had Flows',
    date: '2022-08-25',
    severity: 'medium',
  },
  {
    id: 19,
    type: 'Had flows',
    date: '2022-08-14',
    severity: 'medium',
  },
  {
    id: 20,
    type: 'Had flows',
    date: '2022-08-15',
    severity: 'medium',
  },
];

storiesOf('Calendar', module).add('primary', () => {
  return (
    <CenterView>
      <Calendar periods={periods} setDate={() => {}} />
    </CenterView>
  );
});
