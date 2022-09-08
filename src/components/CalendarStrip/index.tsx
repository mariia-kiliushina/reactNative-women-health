import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FC } from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import { getFormatedDateFromGMTObject } from '../../helpers';
import COLORS from '../../colors';
import { useDispatch } from 'react-redux';
import { IState, setSelectedCalendarDate } from '../../store/sliceData';
import { useAppSelector } from 'hooks';
import { IUsersState } from 'store/sliceUser';
type Props = {};

const MyCalendarStrip: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const onDateSelected = (date: any) => {
    const selectedDateStringFormatted = getFormatedDateFromGMTObject(date._d);
    dispatch(setSelectedCalendarDate(selectedDateStringFormatted));
  };

  // const selectedCalendarDate = useAppSelector(
  //   (state: { dataSliceReducer: IState; userSliceReducer: IUsersState }) =>
  //     state.dataSliceReducer.selectedCalendarDate
  // );

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
        }}
        iconContainer={{ flex: 0.1 }}
        iconStyle={{ flex: 0 }}
        selectedDate={new Date()}
        dayContainerStyle={{
          width: 50,
          marginHorizontal: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        dayComponentHeight={80}
        onDateSelected={onDateSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 120, width: '130%' },
});

export default MyCalendarStrip;
