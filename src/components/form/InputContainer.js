
import React from 'react'
import sys from 'native-system-components'
import { Platform } from 'react-primitives'

import { Box } from '../../base/Box'
import deviceLog from 'react-native-device-log'

const shadow = {
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1
  },
  android: {
    elevation: 2
  },
  web: {
    boxShadow: 2
  }
}[Platform.OS] || {}

class InputContainerHelper extends React.Component {
  render () {
    const { children } = this.props
    return (
      <Box {...this.props}>
        {children}
      </Box>
    )
  }
}
InputContainerHelper.displayName = 'InputContainer'

export const InputContainer = sys({
  is: InputContainerHelper,
  bg: 'white',
  mx: '5px',
  my: '5px',
  height: 60,
  ...shadow
})

InputContainer.displayName = 'InputContainer'

export default InputContainer
