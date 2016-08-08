/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import NavigationBar from './react-native-navigationbar'

class Example extends Component {
  render() {
    const searchBox1 = (
        <View style={styles.searchBox}>
          <Image source={require('./images/header/icon_search.png')} style={styles.searchIcon}/>
          <TextInput
            keyboardType='web-search'
            placeholder='搜索京东商品/店铺'
            style={styles.inputText}/>
          <Image source={require('./images/header/icon_voice.png')} style={styles.voiceIcon}/>
        </View>
    );
    return (
      <View style={styles.container}>
        <NavigationBar
          backName='back'
          title='爱普云'
          searchBox={searchBox1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBox: {
    height: 30,
    flexDirection: 'row',
    flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
    borderRadius: 5,  // 设置圆角边
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 12
  },
  scanIcon: {
    height: 26.7,
    width: 26.7,
    resizeMode: 'stretch'
  },
  searchIcon: {
    marginLeft: 6,
    marginRight: 6,
    width: 16.7,
    height: 16.7,
    resizeMode: 'stretch'
  },
  voiceIcon: {
    marginLeft: 5,
    marginRight: 8,
    width: 15,
    height: 20,
    resizeMode: 'stretch'
  },
  inputText: {
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: 14
  }
});

AppRegistry.registerComponent('Example', () => Example);
