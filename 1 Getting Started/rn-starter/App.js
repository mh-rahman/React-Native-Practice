import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';

const navigator = createStackNavigator(
  // createStackNavigator decides what content to be shown on screen at any given time
  {
    // Add our custom components to be displayed on screen here.
    Home: HomeScreen,
    Components: ComponentsScreen
  },
  {
    // initialRouteName - configuration option that tells createStackNavigator what route/componet should be displayed first 
    // initialRouteName: "Home",
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
