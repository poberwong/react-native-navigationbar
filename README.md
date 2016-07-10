# react-native-navigationbar
一个为 iOS/Android 提供Navigationbar的库

## Install 
`npm install react-native-navigationbar --save`  

## Usage
```
import React, { Component } from 'react'
import { View } from 'react-native';
import NavigationBar from 'react-native-navigationbar'

class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          backName='back'
          title='爱普云'
          ...
        />
      </View>
    );
  }
}
```

## Props:

