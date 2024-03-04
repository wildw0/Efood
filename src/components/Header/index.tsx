import { Link } from 'react-router-dom'
import { Cabecalho, LogoDiv, Title } from './styles'

import logo from '../../assets/images/efood_logo.png'
import bannerImg from '../../assets/images/BG_header.png'

const Header = () => (
  <Cabecalho style={{ backgroundImage: `url(${bannerImg})` }}>
    <LogoDiv>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
    </LogoDiv>
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </Cabecalho>
)

export default Header
