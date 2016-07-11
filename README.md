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

 Name | Description | Default | Type
------|-------------|----------|-----------
title | title of bar  | `title` | string
titleColor  | color of title | `#333`| string
backFunc | called when back-part is pressed | | func
actionArray | buttons located in left-part of bar | [ ] | array
barTintColor | backgroundColor of bar | `white` | string
renderAction | return right-part view of bar | `64` | func
actionName | right-part's name | `null` | string
actionFunc | called when right-part is pressed | `false`| func
actionTextColor | color of actionName | `#666` | string
backIconHidden | whether show backIcon | `false` | bool
statusbarPadding | whether render height of statusbar |  | bool
backColor | color of back-part | `#777` | string
backName | text of back-part |  | string
barOpacity | opacity of bar | `1` | number
barStyle | you can add external for bar |  | View.propTypes.style
## License  
*MIT*