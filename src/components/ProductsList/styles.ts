import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'lojas'>>`
  padding: 32px 0;
  background-color: ${cores.bejeClaro};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 80px;
  margin-bottom: 120px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
