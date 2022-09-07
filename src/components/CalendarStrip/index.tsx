import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FC } from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import COLORS from '../../colors';
type Props = {};

const MyCalendarStrip: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <CalendarStrip
        scrollable={true}
        calendarAnimation={{ type: 'sequence', duration: 30 }}
        daySelectionAnimation={{
          type: 'background',
          duration: 200,
          highlightColor: COLORS.colorSecondaryDark,
        }}
        style={{
          minHeight: 1,
          minWidth: 1,
          width: '100%',
          flex: 1,
          paddingBottom: 5,
          paddingTop: 10,
        }}
        calendarHeaderStyle={{ color: 'white' }}
        calendarColor={COLORS.colorSecondaryLight}
        dateNumberStyle={{ color: 'white', fontSize: 16 }}
        dateNameStyle={{ color: 'white', fontSize: 12 }}
        highlightDateNumberStyle={{ color: 'white', fontSize: 18 }}
        highlightDateNameStyle={{ color: 'white' }}
        iconContainer={{ flex: 0.1 }}
        selectedDate={new Date()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 100, width: '100%' },
});

export default MyCalendarStrip;
