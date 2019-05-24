import { Dimensions, PixelRatio } from 'react-native';
import Exception from '../exception';
import { RESPONSIVE_TYPE } from './type';

const appScreen = {width, height} = Dimensions.get('window');

export const getDefaultSize = () => {
  return {
    width: 360,
    height: 640,
  };
};

export const getResponsiveValue = (type, ratio = null) => {
  let screenValue;

  if (type === RESPONSIVE_TYPE['WIDTH']) {
    screenValue = appScreen.width;  
  } else if (type === RESPONSIVE_TYPE['HEIGHT']) {
    screenValue = appScreen.height;
  } else {
    throw new Exception(
      "Responsive Library ERROR",
      "getResponsiveValue() supports only 'WIDTH', 'HEIGHT'."
    );
  }

  if (!ratio || typeof ratio !== 'number') {
    throw new Exception(
      "Responsive Library ERROR",
      "The `ratio` parameter of getResponsive() must be `number` type."
    );
  }

  return PixelRatio.roundToNearestPixel(screenValue * ratio / 100);
};