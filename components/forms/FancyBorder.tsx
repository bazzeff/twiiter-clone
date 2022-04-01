import { View, Text } from 'react-native'
import React from 'react'

const FancyBorder = ({props}) => {
  return (
    <View>
      <Text className={'FancyBorder FancyBorder-' + props.color}>{props.children}</Text>
    </View>
  )
}

export default FancyBorder