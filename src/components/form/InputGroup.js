import sys from 'native-system-components'
import { Box } from '../../base/Box'

export const InputGroup = sys({
  is: Box,
  px: 3,
  mb: 4,
  flex: '1 1 auto'
})

InputGroup.displayName = 'InputGroup'

export default InputGroup
