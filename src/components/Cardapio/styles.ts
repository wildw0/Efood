import styled from 'styled-components'
import { cores } from '../../styles'

import { ButtonContainer } from '../../components/Button/styles'

export const ListaCardapio = styled.section``

export const CardapioContainer = styled.div`
  display: flex;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  ${ButtonContainer} {
    background-color: ${cores.beje};
    color: ${cores.salmao};
    display: flex;
    width: 304px;
    height: 24px;
    margin: 8px 8px 8px 8px;
    justify-content: center;
  }
`

export const Card = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.beje};
  height: 344px;
  width: 320px;

  img {
    display: flex;
    object-fit: cover;
    width: 304px;
    height: 167px;
    margin: 8px 8px 8px 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16 px;
  display: block;
  margin: 8px 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 8px 8px;
`
