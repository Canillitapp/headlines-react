import { StatusBar } from 'react-native';

export default function showStatusBarFactory(show) {
  function showStatusBar() {
    if (show) {
      StatusBar.setHidden(false, 'slide');
    } else {
      StatusBar.setHidden(true, 'none');
    }
  }

  return showStatusBar;
}
