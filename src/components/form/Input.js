import React from 'react'
import sys from 'native-system-components'
import { TextInput } from 'react-native'
import { InputContainer } from './InputContainer'
import { Box } from '../../base/Box'

import deviceLog from 'react-native-device-log'

class InputHelper extends React.Component {
  render () {
    const { inputStyles, containerStyles, debug, ...props } = this.props
    
    if(debug){
      deviceLog.log("this.props ~~ ms.io/instant ~~ Input")
      deviceLog.l
    }

    return (
      <InputContainer
        {...containerStyles} 
        width={props.width}
        onLayout={(event) => props.onInputLayout(event)}
      >
        <Box {...inputStyles}>
          <TextInput
            // ref={ ref => this.view = ref}
            value={props.value}
            onChangeText={() => props.setFieldValue(props.value)}
            placeholder={props.placeholder}
            name={props.name}
            autoCapitalize={props.autoCapitalize}
            autoCorrect={props.autoCorrect}
            returnKeyType={props.returnKeyType}
            secureTextEntry={props.secureTextEntry}
            textContentType={props.textContentType}
            keyboardType={props.keyboardType}
            {...props}
          />
        </Box>
      </InputContainer>
    )
  }
}

InputHelper.displayName = 'Input'

InputHelper.defaultProps = {
  onInputLayout: () => false,
  debug: undefined,
  autoCapitalize: 'none',
  autoCorrect: true,
  returnKeyType: 'done',
  textContentType: 'none',
  keyboardType: 'default',
}

export const Input = sys({
  is: InputHelper,
  px: '8px',
  py: '4px',
  width: 1,
  textProps: {}
})

Input.displayName = 'Input'

export default Input
