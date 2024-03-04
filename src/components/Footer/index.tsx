import {
  Container,
  FooterLogo,
  FooterSection,
  Links,
  Link,
  Copyright
} from './styles'

import logo from '../../assets/images/efood_logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <FooterLogo src={logo} alt="EFOOD" />
    <Links>
      <li>
        <Link src={instagram} alt="Logo Instagram" />
      </li>
      <li>
        <Link src={facebook} alt="Logo Facebook" />
      </li>
      <li>
        <Link src={twitter} alt="Logo Twitter" />
      </li>
    </Links>
    <FooterSection>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Copyright>
    </FooterSection>
  </Container>
)

export default Footer
