import sys from 'native-system-components'
import { Box } from '../../base/Box'

export const FormContainer = sys({
  is: Box,
  px: 3,
  mx: 'auto',
  maxWidth: 1024
},
'maxWidth'
)

FormContainer.displayName = 'FormContainer'

export default FormContainer
