'use strict'
import React, {PropTypes} from 'react'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import styles from './styles'

const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25)
const NAV_BAR_HEIGHT = (Platform.OS === 'ios' ? 44 : 56)
const ABOVE_LOLIPOP = Platform.Version && Platform.Version > 19
export default class extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    backFunc: PropTypes.func,
    actionArray: PropTypes.array.isRequired,
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
    barStyle: PropTypes.number, // add extended style for navigationBar
    searchBox: PropTypes.node,
  };

  static defaultProps = { // 返回默认的一些属性值
    title: 'title',
    backFunc () {},
    actionArray: [],
    tintColor: '#777',
    backColor: '#777',
    titleTextColor: '#333',
    barTintColor: 'white',
    actionFunc () {},
    actionTextColor: '#666',
    backIconHidden: false,
    backHidden: false, // 控制是否出现左侧菜单
    backTextColor: '#666',
    statusbarPadding: Platform.OS === 'ios' || ABOVE_LOLIPOP,
    barBottomColor: '#d4d4d4',
    barBottomThickness: 0.5,
    barOpacity: 1,
    barStyle: 0
  };

  render () {
    const searchBoxFlex = !this.props.searchBox ? 1 : -1;
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
            ? <View
            style={[styles.leftWrapper, {flex: this.props.actionArray.length || -1}, {flex:searchBoxFlex}]}>
            <TouchableOpacity onPress={this.props.backFunc} style={styles.backWrapper}>
              {
                !this.props.backIconHidden
                  ? <View style={[styles.icon, {borderColor: this.props.backColor}]} />
                  : null
              }
              <Text style={[styles.backName, {color: this.props.backColor}]} numberOfLines={1}>{this.props.backName}</Text>
            </TouchableOpacity>
            {
              this.props.actionArray.map((action, index) => <TouchableOpacity key={index} onPress={action.onPress} style={styles.action}>
                <Text style={[styles.backName, {color: action.color}]}>{action.title}</Text>
              </TouchableOpacity>)
            }
          </View> : <View style={[styles.leftWrapper, {flex:searchBoxFlex}]}/>
        }
        <View style={styles.titleWrapper}>
          {
            !this.props.searchBox
              ? <Text style={[styles.title, {color: this.props.titleTextColor}]} numberOfLines={1}>{this.props.title}</Text> :
              React.cloneElement(this.props.searchBox)
          }
        </View>
        {
          this.props.actionName
            ? <TouchableOpacity style={[styles.actionWrapper, {flex:searchBoxFlex}]} onPress={this.props.actionFunc}>
            <Text style={[styles.actionName, { color: this.props.actionTextColor }]} numberOfLines={1}>{this.props.actionName}</Text>
          </TouchableOpacity>
            : (this.props.renderAction
              ? <TouchableOpacity style={[styles.actionWrapper, {flex:searchBoxFlex}]} onPress={this.props.actionFunc}>
              {this.props.renderAction()}
            </TouchableOpacity>
              : <View style={[styles.actionWrapper, {flex:searchBoxFlex}]}/>
          )
        }
      </View>
    )
  }
}
