import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './src/screens/SplashScreen';
import InitialScreen from './src/screens/InitialScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Initial: InitialScreen,
    Register: RegistrationScreen,
    BottomTab: BottomTabNavigator
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default createAppContainer(navigator);
