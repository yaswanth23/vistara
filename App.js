import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import InitialScreen from './src/screens/InitialScreen';

const navigator = createStackNavigator(
  {
    Initial: InitialScreen
  },
  {
    initialRouteName: 'Initial',
    defaultNavigationOptions: {
      title: 'Vistara'
    }
  }
);

export default createAppContainer(navigator);