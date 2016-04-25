/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NavigationBar from 'react-native-navigationbar'

class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          backName='back'
          backHidden={true}
          title='爱普云'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('Example', () => Example);
