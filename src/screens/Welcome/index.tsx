import { StyleSheet, View, Text, Image, useWindowDimensions } from 'react-native';
import { FC } from 'react';
import Button from 'components/Button';
import COLORS from 'src/constants/colors';
import { useNavigation } from '@react-navigation/native';
import girlWithFlowers from 'assets/girl-flowers-removebg.png';

import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

type Props = {};

SplashScreen.preventAutoHideAsync();

const Welcome: FC<Props> = (props) => {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignIn = () => {
    //@ts-ignore
    navigation.navigate('Sign In');
  };
  const onSignUp = () => {
    //@ts-ignore
    navigation.navigate('Sign Up');
  };
  const onForgotPassword = () => {
    //@ts-ignore
    navigation.navigate('Forgot Password');
  };

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View>
        <Text>App is not ready </Text>
      </View>
    );
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image
        source={girlWithFlowers}
        style={[styles.image, { height: height * 0.5, width: width }]}
      />
      <Text style={styles.welcomeText}>Welcome to Femme</Text>
      <View style={styles.buttonsContainer}>
        <Button type="primary" title="Sign In" onPress={onSignIn} />
        <Text style={styles.text}>or</Text>
        <Button type="primary" title="Sign Up" onPress={onSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    position: 'relative',
    top: 0,
    left: 0,
  },
  image: {
    position: 'relative',
    top: -80,
    left: 0,
  },
  imageContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  welcomeText: {
    color: COLORS.colorSupportingDarkBlue,
    fontSize: 40,
    position: 'relative',
    top: -40,
    left: 0,
  },
  text: {
    color: COLORS.colorSupportingDarkBlue,
    fontSize: 20,
  },
});

export default Welcome;
