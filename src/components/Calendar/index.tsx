//@ts-nocheck
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FC } from 'react';
import { Calendar } from 'react-native-calendars';
import { Track } from '../../store/sliceData';

type Props = {
  periods: Track[];
  setDate: (day: string) => void;
};
// type TperiodsObject = Record<string, { color: string; textColor: string }>;
// type TpsymptomsObject = Record<string, { marked: boolean; dotColor: string }>;

const MyCalendar: FC<Props> = (props) => {
  const { periods, setDate } = props;

  let markedDatesObject = {};

  periods.forEach((element) => {
    if (element.flows !== 'no-flow' && element.symptoms) {
      markedDatesObject[element.date] = {
        color: 'black',
        textColor: 'white',
        marked: true,
        dotColor: '#70d7c7',
      };
      return;
    }
    if (element.flows !== 'no-flow') {
      markedDatesObject[element.date] = { color: 'black', textColor: 'white' };
      return;
    }
    if (element.symptoms) {
      markedDatesObject[element.date] = { marked: true, dotColor: '#70d7c7' };
    }
  });

  return (
    <View style={styles.container}>
      <Calendar
        markingType={'period'}
        markedDates={{ ...markedDatesObject }}
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
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    flex: 0.5,
  },
});

export default MyCalendar;
