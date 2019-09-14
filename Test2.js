import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
export default class Test3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>This is Test2</Text>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={{ fontSize: 50 }}>goto Test3</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _onPressButton = () => {
    __DEV__ && console.log('_onPressButton', this.props.navigation.navigate);
    this.props.navigation.push('Test3');
    // msg.emit('goNext', 'test3');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
