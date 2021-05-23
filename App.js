import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Asset } from 'expo';
import SplashScreen from './src/screens/SplashScreen';
import InitialScreen from './src/screens/InitialScreen';
import BookingInitialScreen from './src/screens/BookingInitialScreen';

const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Initial: InitialScreen,
    Booking: BookingInitialScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default createAppContainer(navigator);
