/**
 * @format
 */
// import { AppRegistry } from 'react-native';
import {Navigation} from "react-native-navigation";
import Test1 from './Test1';
import Test2 from './Test2';


Navigation.registerComponent('Test1', () => Test1);
Navigation.registerComponent('Test2', () => Test2);

Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: "Test1"
        }
      }]
    }
  }
});