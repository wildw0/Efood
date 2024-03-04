import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.beje};
  height: 304px;
  font-size: 10px;
  text-align: center;
`

export const FooterLogo = styled.img`
  margin-top: 40px;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 80px;
`

export const Link = styled.img`
  margin-right: 8px;
`

export const FooterSection = styled.div`
  display: flex;
  justify-content: center;
`

export const Copyright = styled.p`
  width: 480px;
  margin-bottom: 40px;
`
