import { Link } from 'react-router-dom'

import { Topo, LinkCart } from './styles'

import logo from '../../assets/images/efood_logo.png'

const HeaderLoja = () => (
  <>
    <Topo>
      <nav>
        <div className="container">
          <Link className="text" to="/">
            Restaurantes
          </Link>
        </div>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
      </nav>
    </Topo>
  </>
)

export default HeaderLoja
