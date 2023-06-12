import React from 'react';
import {ThemeProvider} from 'styled-components';

export const theme = {
  colors: {
    primary: '#475FE0',
    secondary: '#FFFFFF',
    mainText: '#FFFFFF',
  },
  fonts: {
    mainFont: 'Roboto-Light',
    secondFont: 'Roboto-Regular',
    thirdFont: 'Roboto-Medium',
    boldFont: 'Roboto-Bold',
  },
  TabNavigator: {
    height: 60,
    paddingTop: 10,
    paddingBottom: 16,
    backgroundColor: '#F9F9F9',
  },
  zStyleBackward: {
    marginLeft: -132,
    marginTop: -21,
  },
  progressView: {
    width: '100%',
    height: 8,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: 'white',
  },
  splashAnim: {
    z1: {
      initValue: 0,
      toValue: 8,
      backwardValue: 0.085,
      duration: 2250,
    },
    z2: {
      initValue: 0,
      toValue: 8,
      backwardValue: 0.085,
      delay: 450,
      duration: 2250,
    },
    z3: {
      initValue: 0,
      toValue: 8,
      backwardValue: 0.085,
      delay: 900,
      duration: 2250,
    },
    logo: {
      initValue: 0,
      toValue: 20,
      duration: 2500,
    },
    progress: {
      initValue: 0,
      delay: 0,
      duration: 80000,
    },
    general: {
      delay: 5000,
    },
  },
  marginGallery: {
    margin: 22,
  },
};
const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
