import styled from 'styled-components'

import bannerImg from '../../assets/images/BG_header.png'

import { cores } from '../../styles'

export const Topo = styled.div`
  background-image: url(${bannerImg});
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;


  nav {
    max-width: 1024px;
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;

    a {
      color: ${cores.salmao};
      font-size: 18px;
      text-decoration: none;
      font-weight: bold;
    }

    img{
      margin-right: 300px;
      margin-left: 200px;
    }
  }
}
`

export const LinkCart = styled.a`
  display: flex;
  white-space: nowrap;
  align: right;
`
