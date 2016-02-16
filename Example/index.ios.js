import React from 'react-native'
import NavigationBar from 'react-native-navigationbar'
const {
  AppRegistry,
  View,
  StyleSheet
} = React

class Example extends React.Component {

  render () {
    // headerImage support string and number
    return (
      <View style={styles.container}>
        <NavigationBar/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('Example', () => Example)
