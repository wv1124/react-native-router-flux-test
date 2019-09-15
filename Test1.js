import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class Test1 extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>This is Test1</Text>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={{ fontSize: 50 }}>go Test2</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _onPressButton = () => {
    __DEV__ && console.log('_onPressButton', this.props.componentId);
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Test2',
        passProps: {
          text: 'Pushed screen'
        },
        options: {
          topBar: {
            title: {
              text: 'Test2'
            }
          }
        }
      }
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
