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
  div {
    display: flex;
    width: 100%;
    height: 280px;

    .imgMassa {
      position: relative;
      object-fit: cover;
      width: 100%;
      filter: brightness(0.4);
    }
    h2 {
      position: absolute;
      color: ${cores.branca};
      font-size: 32px;
      margin-left: 170px;
      margin-top: 25px;
      font-weight: 100;
    }

    p {
      position: absolute;
      color: ${cores.branca};
      font-size: 32px;
      font-weight: bold;
      margin-left: 170px;
      margin-top: 214px;
    }
  }
`

export const Topo = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  background-image: url(${bannerImg});

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: 170px;
  }

  a {
    color: ${cores.salmao};
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
  }
  img {
    margin-left: 430px;
    //margin-right: 190px;
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
`

export const LinkItem = styled.li`
  display: flex;
`

export const LinkCart = styled.a`
  display: flex;
  white-space: nowrap;
  align: right;
  margin-right: 170px;
  margin-left: 190px;
`

// export const Topo = styled.div`
//   width: 100%;
//   height: 180px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background-image: url(${bannerImg});

//   nav {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-left: 170px;
//   }
//   a {
//     color: ${cores.salmao};
//     font-weight: bold;
//     font-size: 18px;
//     text-decoration: none;
//   }
//   img {
//     margin-left: 450px;
//   }
// `

// export const Links = styled.ul`
//   display: flex;
//   align-items: center;
//   margin-right: 400px;
// `

// export const LinkItem = styled.li`
//   display: flex;
// `

// export const LinkCart = styled.a`
//   margin-right: 170px;
// `
