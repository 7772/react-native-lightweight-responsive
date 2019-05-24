import React from 'react';
import {View} from 'react-native';
import Responsive from 'react-native-lightweight-responsive';

/**
 * YourComponentFirstExample
 * 
 * If you are using default viewport size (360 X 640)
 * and applying Responsive Design to all Smartphone size
 * 
 * Use like this.
 */
const YourComponentFirstExample = () => {
  return (
    <View style={{
      width: Responsive.width(300), 
      height: Responsive.height(200), 
      backgroundColor: 'yellow',
    }} />
  );
};


/**
 * YourComponentSecondExample
 * 
 * If you want to use customized options
 * 
 * Use like this.
 */
Responsive.setOptions({width: 375, height: 812, enableOnlySmallSize: true});
const YourComponentSecondExample = () => {
  return (
    <View style={{
      width: Responsive.width(300),
      height: Responsive.height(200),
      backgroundColor: 'yellow',
    }} />
  );
};

export {
  YourComponentFirstExample,
  YourComponentSecondExample,
}