import Lojas from '../../models/Lojas'
import ProductsList from '../../components/ProductsList'
import { RestauranteContainer, MassasItalianas, BGMassa } from './styles'
import pizza from '../../assets/images/pizza.png'

import bannerMassa from '../../assets/images/massa.png'

import HeaderLoja from '../../components/HeaderLoja'

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
    <HeaderLoja />

    <MassasItalianas>
      <BGMassa src={bannerMassa} alt="Massa" />
      <div>
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
