import styled from 'styled-components'
import { cores } from '../../styles'
import { Card, Estrela, Titulo, Descricao } from '../Product/styles'
import { List } from '../ProductsList/styles'
import { ButtonContainer } from '../Button/styles'

export const RestauranteContainer = styled.div`
  ${List} {
    margin-top: 56px;
    margin-bottom: 88px;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
  }
  ${Titulo} {
  }

  ${Descricao} {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  ${Card} {
    background-color: ${cores.salmao};
    color: ${cores.beje};
    margin-bottom: 32px;
    height: 344px;
    width: 320px;

    img {
      display: flex;
      width: 304px;
      height: 167px;
      margin: 8px 8px 8px 8px;
    }

    ${Estrela} {
      display: none;
    }

    ${ButtonContainer} {
      background-color: ${cores.beje};
      color: ${cores.salmao};
      display: flex;
      width: 304px;
      height: 24px;
      margin: 0px 8px 8px 8px;
      justify-content: center;
    }
  }
`

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
