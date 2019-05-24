import Exception from './exception';
import { RESPONSIVE_TYPE } from './type';
import { getDefaultSize, appScreen, getResponsiveValue } from './util';


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
  if (typeof options.onlySmallerThanDefaultSize !== 'boolean') {
    throw new Exception(
      "Responsive.setOptions() ERROR", 
      "`onlySmallerThanDefaultSize` property in `options` object is not boolean."
    );
  }

  if (!this.defaultSize) {
    this.defaultSize = {};
  }

  this.defaultSize.width = options.width;
  this.defaultSize.height = options.height;
  this.onlySmallerThanDefaultSize = options.onlySmallerThanDefaultSize;
};

const width = (width) => {
  if (!this.defaultSize) {
    this.defaultSize = getDefaultSize();
  }

  const ratio = (width / this.defaultSize.width) * 100;
  const responsiveWidth = getResponsiveValue(RESPONSIVE_TYPE['WIDTH'], ratio);

  if (this.onlySmallerThanDefaultSize && responsiveWidth > width) {
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

  if (this.onlySmallerThanDefaultSize && responsiveHeight > height) {
    return height;
  }

  return responsiveHeight;
};

export default Responsive = {
  defaultSize: getDefaultSize(),
  onlySmallerThanDefaultSize: false,
  setOptions: setOptions,
  width: width,
  height: height,
};
