import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Appointment extends React.PureComponent {
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
    if (this.props.onChange) {
      this.props.onChange('test2');
    } else {
      // msg.emit('goNext', 'test2');
      Actions.Test2();
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
