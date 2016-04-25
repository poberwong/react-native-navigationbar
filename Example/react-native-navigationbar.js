'use strict'

// Module dependencies
import React, { Text, View, Image, TouchableOpacity, PropTypes } from 'react-native'
import styles from './styles'

const STATUS_BAR_HEIGHT = 20
const NAV_BAR_HEIGHT = 44

export default class extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    backFunc: PropTypes.func,
    tintColor: PropTypes.string,
    titleTextColor: PropTypes.string,
    barTintColor: PropTypes.string,
    actionName: PropTypes.string,
    actionFunc: PropTypes.func,
    actionTextColor: PropTypes.string,
    backHidden: PropTypes.bool,
    statusbarPadding: PropTypes.bool,
    backColor: PropTypes.string,
    barBottomColor: PropTypes.string,
    barBottomThickness: PropTypes.number,
    backIcon: PropTypes.bool,
    backName: PropTypes.string,
    barOpacity: PropTypes.number,
    barStyle: PropTypes.number // add extended style for navigationBar
  };

  static defaultProps = { // 返回默认的一些属性值
    title: 'title',
    backFunc () {},
    tintColor: '#777',
    backColor: '#777',
    titleTextColor: '#333',
    barTintColor: 'white',
    actionName: '',
    actionFunc () {},
    actionTextColor: '#666',
    backHidden: false, // 控制是否出现左侧菜单
    backIcon: true, // 控制是选择icon还是text
    backName: 'back',
    backTextColor: '#666',
    statusbarPadding: true,
    barBottomColor: '#d4d4d4',
    barBottomThickness: 0.5,
    barOpacity: 1,
    barStyle: 0
  };

  render () {
    return (
      <View style={
        [styles.navbar,
          {
            backgroundColor: this.props.barTintColor,
            height: this.props.statusbarPadding ? NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT : NAV_BAR_HEIGHT,
            paddingTop: this.props.statusbarPadding ? STATUS_BAR_HEIGHT : 0,
            opacity: this.props.barOpacity
          },
        this.props.barStyle]
      }>
        {
          !this.props.backHidden
          ? <TouchableOpacity
              style={styles.backWrapper}
              onPress={this.props.backFunc}>
              {
                this.props.backIcon
                ? <View style={[styles.icon, {borderColor: this.props.backColor}]} />
                : <Text style={[styles.backName, {color: this.props.backColor}]}>{this.props.backName}</Text>
              }
            </TouchableOpacity> : null
        }
        <View style={styles.titleWrapper}>
          <Text style={[styles.title, {color: this.props.titleTextColor}]} numberOfLines={1}>{this.props.title}</Text>
        </View>
        {
          this.props.actionName
          ? <TouchableOpacity style={styles.actionWrapper} onPress={this.props.actionFunc.bind(this)}>
              <Text style={[styles.actionName, { color: this.props.actionTextColor }]}>{this.props.actionName}</Text>
            </TouchableOpacity>
          : null
        }
      </View>
    )
  }
}
