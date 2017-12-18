import { NativeModules } from 'react-native';

NativeModules.RNI18n = {
  languages: ['en-US'],
  getLanguages: jest.fn(() => Promise.resolve({}))
};
