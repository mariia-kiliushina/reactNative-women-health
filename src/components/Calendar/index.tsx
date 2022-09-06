import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FC } from 'react';
import { Calendar } from 'react-native-calendars';
import { Track } from '../../store/sliceData';

type Props = {
  periods: Track[];
  setDate: (day: string) => void;
};
type TperiodsObject = Record<string, { color: string; textColor: string }>;
type TpsymptomsObject = Record<string, { marked: boolean; dotColor: string }>;

const MyCalendar: FC<Props> = (props) => {
  const { periods, setDate } = props;

  let periodsObject: TperiodsObject = {};
  periods
    .filter((element) => element.type === 'Had flows')
    .forEach((element) => {
      periodsObject[element.date] = { color: '#70d7c7', textColor: 'white' };
    });

  let symptomsObject: TpsymptomsObject = {};
  periods
    .filter((element) => element.type !== 'Had flows')
    .forEach((element) => {
      symptomsObject[element.date] = { marked: true, dotColor: '#70d7c7' };
    });

  return (
    <View style={styles.container}>
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
          setDate(day.dateString);
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

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 300,
    backgroundColor: 'blue',
  },
});

export default MyCalendar;
