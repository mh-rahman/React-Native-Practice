import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CoutnerScreen from "./src/screens/CounterScreen";
import CounterScreen from "./src/screens/CounterScreen";

const navigator = createStackNavigator(
  // createStackNavigator helps us to navigate, decide what content is displayed on screen
  {
    // Add our custom components to be displayed on screen here.
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
  },
  {
    // initialRouteName - configuration option that tells createStackNavigator what route/componet should be displayed first
    // initialRouteName: "Home",
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
