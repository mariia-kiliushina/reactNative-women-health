import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FC } from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import { getFormatedDateFromGMTObject } from '../../helpers';
import COLORS from '../../colors';
type Props = {};

const MyCalendarStrip: FC<Props> = (props) => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDateSelected = (date: any) => {
    setSelectedDate(getFormatedDateFromGMTObject(date._d));
  };

  return (
    <View style={styles.container}>
      <CalendarStrip
        scrollable={true}
        calendarAnimation={{ type: 'sequence', duration: 30 }}
        daySelectionAnimation={{
          type: 'background',
          duration: 100,
          highlightColor: COLORS.colorSecondaryDark,
        }}
        style={{
          minHeight: 1,
          minWidth: 1,
          width: '100%',
          flex: 1,
          justifyContent: 'space-around',
        }}
        calendarHeaderStyle={{ color: 'white' }}
        calendarColor={COLORS.colorSecondaryLight}
        dateNumberStyle={{ color: 'white', fontSize: 24 }}
        dateNameStyle={{ color: 'white', fontSize: 16 }}
        highlightDateNumberStyle={{ color: 'white', fontSize: 30 }}
        highlightDateNameStyle={{ color: 'white', fontSize: 16 }}
        highlightDateContainerStyle={{
          borderRadius: 15,
          // paddingVertical: 10,
          // paddingHorizontal: 5,
        }}
        iconContainer={{ flex: 0.1 }}
        iconStyle={{ flex: 0 }}
        selectedDate={new Date()}
        dayContainerStyle={{
          width: 50,
          marginHorizontal: 5,
          justifyContent: 'center',
          alignItems: 'center',
          // paddingVertical: 10,
          // paddingHorizontal: 5,
        }}
        dayComponentHeight={80}
        onDateSelected={onDateSelected}
      />
    </View>

    // <View style={styles.container}>
    //   <CalendarStrip
    //     scrollable={true}
    //     calendarAnimation={{ type: 'sequence', duration: 30 }}
    //     daySelectionAnimation={{
    //       type: 'background',
    //       duration: 200,
    //       highlightColor: COLORS.colorSecondaryDark,
    //     }}
    //     style={{
    //       minHeight: 1,
    //       minWidth: 1,
    //       width: '100%',
    //       flex: 1,
    //       justifyContent: 'space-around',
    //     }}
    //     calendarHeaderStyle={{ color: 'white' }}
    //     calendarColor={COLORS.colorSecondaryLight}
    //     dateNumberStyle={{ color: 'white', fontSize: 24 }}
    //     dateNameStyle={{ color: 'white', fontSize: 16 }}
    //     highlightDateNumberStyle={{ color: 'white', fontSize: 30 }}
    //     highlightDateNameStyle={{ color: 'white', fontSize: 16 }}
    //     highlightDateContainerStyle={{
    //       flex: 1.4,
    //       borderRadius: 20,
    //       paddingVertical: 10,
    //       paddingHorizontal: 5,
    //     }}
    //     iconContainer={{ flex: 0.1 }}
    //     iconStyle={{ flex: 0 }}
    //     selectedDate={new Date()}
    //     dayContainerStyle={{
    //       height: 90,
    //       flex: 1,
    //       justifyContent: 'space-around',
    //       alignItems: 'center',
    //       paddingVertical: 10,
    //       paddingHorizontal: 5,
    //     }}
    //     dayComponentHeight={90}
    //     onDateSelected={onDateSelected}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 120, width: '130%' },
});

export default MyCalendarStrip;
