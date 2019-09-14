import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Test1 extends React.Component {
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
    // __DEV__ && console.log('_onPressButton', this.props.navigation);
    this.props.navigation.navigate('Test2');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
