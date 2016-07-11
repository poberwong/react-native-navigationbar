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
    titleColor: PropTypes.string,
    barTintColor: PropTypes.string,
    renderAction: PropTypes.func,
    actionName: PropTypes.string,
    actionFunc: PropTypes.func,
    actionTextColor: PropTypes.string,
    backIconHidden: PropTypes.bool,
    statusbarPadding: PropTypes.bool,
    backColor: PropTypes.string,
    backName: PropTypes.string,
    barOpacity: PropTypes.number,
    barBottomColor: PropTypes.string,
    barBottomThickness: PropTypes.number,
    barStyle: View.propTypes.style // add extended style for navigationBar
  };

  static defaultProps = { // 返回默认的一些属性值
    title: 'title',
    actionArray: [],
    backColor: '#777',
    titleColor: '#333',
    barTintColor: 'white',
    actionTextColor: '#666',
    backIconHidden: false,
    statusbarPadding: Platform.OS === 'ios' || ABOVE_LOLIPOP,
    barBottomColor: '#d4d4d4',
    barBottomThickness: 0.5,
    barOpacity: 1
  };

  render () {
    return (
      <View style={
        [styles.navbar,
          {
            backgroundColor: this.props.barTintColor,
            height: this.props.statusbarPadding ? NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT : NAV_BAR_HEIGHT,
            paddingTop: this.props.statusbarPadding ? STATUS_BAR_HEIGHT : 0,
            opacity: this.props.barOpacity,
            borderBottomWidth: this.props.barBottomThickness,
            borderBottomColor: this.props.barBottomColor,
          },
        this.props.barStyle]
      }>
        {
          <View style={[styles.leftWrapper, {flex: this.props.actionArray.length || 1}]}>
            <TouchableOpacity onPress={this.props.backFunc} style={styles.backWrapper}
              hitSlop={{top: 0, left: 0, right: 20, bottom: 0}}>
              {
                !this.props.backIconHidden
                ? <View style={[styles.icon, {borderColor: this.props.backColor}]} />
                : null
              }
              <Text style={[styles.backName, {color: this.props.backColor}]} numberOfLines={1}>{this.props.backName}</Text>
            </TouchableOpacity>
            {
              this.props.actionArray.map((action, index) => <TouchableOpacity key={index} onPress={action.onPress} style={styles.action}>
                <Text style={[styles.backName, {color: action.color || this.props.backColor}]}>{action.title}</Text>
              </TouchableOpacity>)
            }
          </View>
        }
        <View style={styles.titleWrapper}>
          <Text style={[styles.title, {color: this.props.titleColor}]} numberOfLines={1}>{this.props.title}</Text>
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
