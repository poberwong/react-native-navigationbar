'use strict'

// Module dependencies
import React, { Text, View, TouchableOpacity, PropTypes, Platform } from 'react-native'
import styles from './styles'

const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25)
const NAV_BAR_HEIGHT = (Platform.OS === 'ios' ? 44 : 56)

export default class extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    backFunc: PropTypes.func,
    tintColor: PropTypes.string,
    titleTextColor: PropTypes.string,
    barTintColor: PropTypes.string,
    renderAction: PropTypes.func,
    actionName: PropTypes.string,
    actionFunc: PropTypes.func,
    actionTextColor: PropTypes.string,
    backHidden: PropTypes.bool,
    backIconHidden: PropTypes.bool,
    statusbarPadding: PropTypes.bool,
    backColor: PropTypes.string,
    barBottomColor: PropTypes.string,
    barBottomThickness: PropTypes.number,
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
    actionFunc () {},
    actionTextColor: '#666',
    backIconHidden: false,
    backHidden: false, // 控制是否出现左侧菜单
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
            borderBottomWidth: this.props.barBottomThickness,
            borderBottomColor: this.props.barBottomColor,
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
                !this.props.backIconHidden
                ? <View style={[styles.icon, {borderColor: this.props.backColor}]} />
                : null
              }
              <Text style={[styles.backName, {color: this.props.backColor}]} numberOfLines={1}>{this.props.backName}</Text>
            </TouchableOpacity> : <View style={styles.backWrapper}/>
        }
        <View style={styles.titleWrapper}>
          <Text style={[styles.title, {color: this.props.titleTextColor}]} numberOfLines={1}>{this.props.title}</Text>
        </View>
        {
          this.props.actionName
          ? <TouchableOpacity style={styles.actionWrapper} onPress={this.props.actionFunc}>
              <Text style={[styles.actionName, { color: this.props.actionTextColor }]} numberOfLines={1}>{this.props.actionName}</Text>
            </TouchableOpacity>
          : (this.props.renderAction
            ? <TouchableOpacity style={styles.actionWrapper} onPress={this.props.actionFunc}>
                {this.props.renderAction()}
              </TouchableOpacity>
            : <View style={styles.actionWrapper}/>
            )
        }
      </View>
    )
  }
}
