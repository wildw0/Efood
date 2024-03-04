import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled(Link)`
  color: ${cores.beje};
  background-color: ${cores.salmao};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  padding: 4px 6px;
  margin-left: 8px;
`
