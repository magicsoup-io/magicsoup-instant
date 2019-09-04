import React from 'react'
import sys from 'native-system-components'
import { Platform } from 'react-primitives'
import { Box } from '../../base/Box'

const shadow = {
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  android: {
    elevation: 2
  },
  web: {
    boxShadow: 2
  }
}[Platform.OS] || {}

class CardHelper extends React.Component {
  render () {
    const { children, ...props } = this.props
    return (
      <Box>
        <Box {...props}>
          {children}
        </Box>
      </Box>
    )
  }
}
CardHelper.displayName = 'Card'

export const Card = sys({
  is: CardHelper,
  p: 2,
  bg: 'white',
  borderRadius: 2,
  ...shadow
}, 'space', 'color')

export default Card
