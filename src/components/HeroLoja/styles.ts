import styled from 'styled-components'
import { cores } from '../../styles'
import { Card, Estrela, Titulo, Descricao } from '../Product/styles'
import { List } from '../ProductsList/styles'
import { ButtonContainer } from '../Button/styles'

export const Capa = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    position: relative;
    display: block;
    max-width: 1024px;
    width: 100%;
    height: 280px;
    color: ${cores.branca};

    h2 {
      font-size: 32px;
      font-weight: 100;
      margin-top: 25px;
      margin-bottom: 156px;
    }

    p {
      font-size: 32px;
      font-weight: bold;
      margin-top: 155px;
      margin-bottom: 32px;
    }
  }
`
export const BGCapa = styled.img`
  position: absolute;
  height: 280px;
  object-fit: cover;
  width: 100%;
  filter: brightness(0.4);
`
