import Exception from './exception';
import { RESPONSIVE_TYPE } from './type';
import { getDefaultSize, getResponsiveValue } from './util';


const setOptions = (options) => {
  if (!options) {
    throw new Exception(
      "Responsive.setOptions() ERROR", 
      "`options` is neccessary parameter, Not to be null or undefined."
    );
  } 
  if (typeof options.width !== 'number') {
    throw new Exception(
      "Responsive.setOptions() ERROR", 
      "`width` property in `options` object is not number."
    );
  } 
  if (typeof options.height !== 'number') {
    throw new Exception(
      "Responsive.setOptions() ERROR", 
      "`height` property in `options` object is not number."
    );
  }
  if (typeof options.enableOnlySmallSize !== 'boolean') {
    throw new Exception(
      "Responsive.setOptions() ERROR", 
      "`enableOnlySmallSize` property in `options` object is not boolean."
    );
  }

  if (!this.defaultSize) {
    this.defaultSize = {};
  }

  this.defaultSize.width = options.width;
  this.defaultSize.height = options.height;
  this.enableOnlySmallSize = options.enableOnlySmallSize;
};

const width = (width) => {
  if (!this.defaultSize) {
    this.defaultSize = getDefaultSize();
  }

  const ratio = (width / this.defaultSize.width) * 100;
  const responsiveWidth = getResponsiveValue(RESPONSIVE_TYPE['WIDTH'], ratio);

  if (this.enableOnlySmallSize && responsiveWidth > width) {
    return width;
  }

  return responsiveWidth;
};

const height = (height) => {
  if (!this.defaultSize) {
    this.defaultSize = getDefaultSize();
  }

  const ratio = (height / this.defaultSize.height) * 100;
  const responsiveHeight = getResponsiveValue(RESPONSIVE_TYPE['HEIGHT'], ratio);

  if (this.enableOnlySmallSize && responsiveHeight > height) {
    return height;
  }

  return responsiveHeight;
};

const font = (font) => {
  if (!this.defaultSize) {
    this.defaultSize = getDefaultSize();
  }

  const ratio = ((font / this.defaultSize.width) * 100);
  const responsiveFont = getResponsiveValue(RESPONSIVE_TYPE['FONT'], ratio);

  if (this.enableOnlySmallSize && responsiveFont > font) {
    return font;
  }

  return responsiveFont;
};

export default Responsive = {
  defaultSize: getDefaultSize(),
  enableOnlySmallSize: false,
  setOptions: setOptions,
  width: width,
  height: height,
  font: font,
};
