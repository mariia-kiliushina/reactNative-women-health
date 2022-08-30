import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FC } from 'react';
import COLORS from '../../colors';
import { Calendar } from 'react-native-calendars';
type Props = {};

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green' };

const MyCalendar: FC<Props> = (props) => {
  const {} = props;
  const arrPeriods = ['2022-08-21', '2022-08-22', '2022-08-23', '2022-08-24', '2022-08-25'];
  const arrSymptoms = ['2022-08-10', '2022-08-11', '2022-08-12', '2022-08-13'];
  // '2022-08-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
  let periodsObject = {};
  arrPeriods.forEach((day) => {
    //@ts-ignore
    periodsObject[day] = { color: '#70d7c7', textColor: 'white' };
  });

  let symptomsObject = {};
  arrSymptoms.forEach((day) => {
    //@ts-ignore
    symptomsObject[day] = { marked: true, dotColor: '#70d7c7' };
  });
  return (
    <View>
      <Calendar
        markingType={'period'}
        markedDates={{
          ...periodsObject,
          ...symptomsObject,
        }}
        initialDate={'2022-08-01'}
        minDate={'2022-08-01'}
        maxDate={'2032-08-01'}
        onDayPress={(day: any) => {
          console.log('selected day', day);
        }}
        onDayLongPress={(day: any) => {
          console.log('selected day', day);
        }}
        monthFormat={'MMMM yyyy'}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={true}
        enableSwipeMonths={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyCalendar;
