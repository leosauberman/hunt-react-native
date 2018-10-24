import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import Product from './pages/product';
import Login from './pages/login';

export default createStackNavigator({
    Login,
    Main,
    Product
}, {
    navigationOptions: {
        headerStyle:{
            backgroundColor: "#BF262A"
        },
        headerTintColor: "#FFF"
    }
});
