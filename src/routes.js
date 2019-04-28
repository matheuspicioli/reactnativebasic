import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const navigator = createStackNavigator(
    {
        Main: { screen: Main },
        Product: { screen: Product }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#DA552F'
            },
            headerTintColor: '#FFF'
        }
    }
);

export default createAppContainer(navigator);
