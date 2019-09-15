import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class Test2 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>This is Test2</Text>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={{ fontSize: 50 }}>goto Test1</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _onPressButton = () => {
    __DEV__ && console.log('_onPressButton', this.props.componentId);
    Navigation.pop(this.props.componentId);
    // Navigation.push(this.props.componentId, {
    //   component: {
    //     name: 'Test1',
    //     passProps: {
    //       text: 'Pushed screen'
    //     },
    //     options: {
    //       topBar: {
    //         title: {
    //           text: 'Pushed screen title'
    //         }
    //       }
    //     }
    //   }
    // });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
