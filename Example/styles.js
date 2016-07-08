'use strict'

let React = require('react-native')

module.exports = React.StyleSheet.create({
  navbar: {
    justifyContent: 'center',
    flexDirection: 'row'
  },

  leftWrapper: {
    flexDirection: 'row',
    flex: 1
  },

  icon: {
    width: 14,
    height: 14,
    marginLeft: 12,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    transform: [{rotate: '45deg'}]
  },

  backWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  action: {
    marginLeft: 8,
    justifyContent: 'center'
  },

  titleWrapper: {
    justifyContent: 'center',
    flex: 1
  },

  title: {
    fontSize: 18,
    textAlign: 'center'
  },

  actionWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1
  },

  actionName: {
    marginRight: 12,
    fontSize: 17
  },

  backName: {
    fontSize: 17
  }
})
