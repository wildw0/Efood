import styled from 'styled-components'
import { cores } from '../../styles'
import { Card, Estrela } from '../../components/Product/styles'
import { List } from '../../components/ProductsList/styles'
import { ButtonContainer } from '../../components/Button/styles'

import bannerImg from '../../assets/images/BG_header.png'

export const RestauranteContainer = styled.div`
  ${List} {
    margin-top: 56px;
    margin-bottom: 88px;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
  }

  ${Card} {
    background-color: ${cores.salmao};
    color: ${cores.beje};
    margin-bottom: 32px;
    height: 368px;

    img {
      padding: 8px;
    }

    ${Estrela} {
      display: none;
    }

    ${ButtonContainer} {
      background-color: ${cores.beje};
      color: ${cores.salmao};
      display: flex;
      width: 304px;
      margin: 8px;
      justify-content: center;
    }
  }
`

export const MassasItalianas = styled.div`
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
export const BGMassa = styled.img`
  position: absolute;
  height: 280px;
  object-fit: cover;
  width: 100%;
  filter: brightness(0.4);
`
