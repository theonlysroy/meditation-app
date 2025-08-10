import { RFValue } from 'react-native-responsive-fontsize';
import { ms, s, vs } from 'react-native-size-matters';

export const rpS = (size: number) => {
  return s(size);
};

export const rpVS = (size: number) => {
  return vs(size);
};

export const rpMS = (size: number) => {
  return ms(size);
};

export const rpRfv = (size: number) => {
  return RFValue(size);
};
