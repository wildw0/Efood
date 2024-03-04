import Lojas from '../../models/Lojas'
import ProductsList from '../../components/ProductsList'
import {
  RestauranteContainer,
  MassasItalianas,
  Topo,
  LinkCart,
  LinkItem,
  Links
} from './styles'
import pizza from '../../assets/images/pizza.png'

import bannerMassa from '../../assets/images/massa.png'
import bannerImg from '../../assets/images/BG_header.png'
import logo from '../../assets/images/efood_logo.png'
import { Link } from 'react-router-dom'

const itens: Lojas[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    infos: [],
    image: pizza
  }
]

const Restaurante = () => (
  <>
    <Topo>
      <nav>
        <Links>
          <LinkItem>
            <Link className="text" to="/">
              Restaurantes
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/">
              <img src={logo} alt="EFOOD" />
            </Link>
          </LinkItem>
        </Links>
      </nav>
      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </Topo>
    <MassasItalianas>
      <div>
        <img className="imgMassa" src={bannerMassa} alt="Massa" />
        <h2>Italiana</h2>
        <p>La Dolce Vita Trattoria</p>
      </div>
    </MassasItalianas>
    <RestauranteContainer>
      <ProductsList lojas={itens} />
    </RestauranteContainer>
  </>
)

export default Restaurante
