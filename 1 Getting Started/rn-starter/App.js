import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  // createStackNavigator decides what content to be shown on screen at any given time
  {
    // Add our custom components to be displayed on screen here.
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
  },
  {
    // initialRouteName - configuration option that tells createStackNavigator what route/componet should be displayed first
    // initialRouteName: "Home",
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
