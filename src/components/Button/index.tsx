import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import COLORS from '../../colors';
type Props = {
  type: 'primary' | 'secondary' | 'disabled' | 'danger' | 'outlined' | 'flat';
  size?: 'small' | 'medium' | 'large';
  title: string;
  onPress: () => void;
};

const MyButton: FC<Props> = (props) => {
  const { title, onPress, type } = props;

  const { defaultButton, primary, secondary, disabled, danger, outlined, flat } = styles;
  const customViewStyle = (type: string) => {
    switch (type) {
      case 'primary':
        return primary;
        break;
      case 'secondary':
        return secondary;
        break;
      case 'disabled':
        return disabled;
        break;
      case 'danger':
        return danger;
        break;
      case 'outlined':
        return outlined;
        break;
      case 'flat':
        return flat;
        break;
      default:
        return primary;
    }
  };
  const customTextStyle = (type: string) => {
    const whiteColorList = ['primary', 'secondary', 'danger'];
    if (whiteColorList.includes(type)) return 'white';
    if (type === 'disabled') return COLORS.colorGreyscaleSecondaryGrey;
    return COLORS.colorPrimary;
  };
  const combinedViewStyles = StyleSheet.flatten([defaultButton, customViewStyle(type)]);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={combinedViewStyles}>
          <Text style={{ color: customTextStyle(type) }}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  defaultButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    cursor: 'pointer',
    fontWeight: 500,
    width: 100,
    height: 40,
  },
  primary: {
    backgroundColor: COLORS.colorPrimary,
  },
  secondary: {
    backgroundColor: COLORS.colorSecondary,
  },
  disabled: {
    backgroundColor: COLORS.colorGreyscaleBackgroundGrey,
  },
  danger: {
    backgroundColor: COLORS.colorSupportingErrorred,
  },
  outlined: {
    backgroundColor: COLORS.colorGreyscaleWhite,
    border: `2px solid ${COLORS.colorPrimary}`,
  },
  flat: {
    backgroundColor: COLORS.colorGreyscaleWhite,
  },
});

export default MyButton;
