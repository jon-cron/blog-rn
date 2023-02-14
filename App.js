// NOTE before starting to type run the following commands in powershell: 1. "yarn add react-navigation" 2. "npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view -- --legacy-peer-deps" 3. "yarn add react-navigation-stack @react-native-community/masked-view" 4. go to Babel.config.js
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from "./src/Screens/IndexScreen.js";
import { BlogProvider } from "./src/Context/BlogContext.js";

const navigator = createStackNavigator({
  Index: IndexScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: "Blogs"
  }
});

const App = createAppContainer(navigator)

export default () => {
  return <BlogProvider>
    <App />
    </BlogProvider>
}
