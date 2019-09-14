import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
export default class Test2 extends React.Component {
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
    this.props.navigation.navigate('Test1');
    // msg.emit('goNext', 'test3');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
