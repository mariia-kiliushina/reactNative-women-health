import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  ImageSourcePropType,
} from 'react-native';
import { FC } from 'react';
import COLORS from '../../colors';
type Props = {
  marked?: boolean;
  source: ImageSourcePropType;
  symptomText: string;
};

const SymptomIcon: FC<Props> = (props) => {
  const { marked = false, symptomText, source } = props;
  const { symptomImage, markedImg, standard } = styles;
  const [markedFromComponents, setMarkedFromComponents] = useState(marked);
  const combinedStyles = StyleSheet.flatten([
    symptomImage,
    markedFromComponents ? markedImg : standard,
  ]);
  return (
    <TouchableWithoutFeedback onPress={() => setMarkedFromComponents((prevState) => !prevState)}>
      <View style={styles.container}>
        <Image source={source} style={combinedStyles} />
        {markedFromComponents && (
          <Image source={require('../../assets/marked.png')} style={styles.mark} />
        )}
        <Text style={styles.symptomText}>{symptomText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 80,
    width: 80,
  },
  symptomImage: {
    borderRadius: 50,
    height: 62,
    width: 62,
  },
  standard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  markedImg: {
    borderRadius: 50,
    border: `2px solid ${COLORS.colorSecondary}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mark: {
    position: 'absolute',
    width: 12,
    height: 12,
    border: '1px solid white',
    borderRadius: 50,
    top: 40,
    left: 58,
    backgroundColor: COLORS.colorSecondary,
  },
  symptomText: {
    position: 'absolute',
    top: 65,
    height: 16,
    fontSize: 12,
  },
});

export default SymptomIcon;
