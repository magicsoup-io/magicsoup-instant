import React from 'react'
import sys from 'native-system-components'
import { TextInput } from 'react-native'
import { InputContainer } from './InputContainer'
import { Box } from '../../base/Box'

import deviceLog from 'react-native-device-log'

class InputHelper extends React.Component {
  render () {
    const { children, inputStyles, containerStyles, ...props } = this.props
    deviceLog.log("this.props ~~ ms.io/instant ~~ Input", this.props)
    return (
      <InputContainer {...containerStyles} width={props.width}>
        <Box {...inputStyles}>
          <TextInput
            value={props.value}
            onChangeText={() => props.setFieldValue(props.value)}
            placeholder={props.placeholder}
            name={props.name}
          />
        </Box>
      </InputContainer>
    )
  }
}
InputHelper.displayName = 'Input'

export const Input = sys({
  is: InputHelper,
  px: '8px',
  py: '4px',
  width: 1,
  textProps: {},
})

Input.displayName = 'Input'

export default Input
