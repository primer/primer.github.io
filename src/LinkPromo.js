// Extends Link from primer-react to make color primitives available, as well as fontSize and space which should be added in primer-react. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.

import {Link} from 'primer-react'
import {
  color,
  fontSize
} from 'styled-system'
import styled from 'react-emotion'

const LinkPromo = styled(Link)`
  color: ${props => props.theme.colors.orange[3]} !important;
  ${fontSize}
`

export default LinkPromo
