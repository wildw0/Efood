import ProductsList from '../../components/ProductsList'
import { Lojas, Menu } from '../../pages/Home'

import {
  RestauranteContainer,
  Capa,
  BGCapa
} from '../../components/HeroLoja/styles'

type Props = {
  lojas: Lojas
}

const HeroLoja = ({ lojas }: Props) => {
  return (
    <>
      <Capa>
        <BGCapa src={lojas.capa} alt={lojas.titulo} />
        <div>
          <h2>{lojas.tipo}</h2>
          <p>{lojas.titulo}</p>
        </div>
      </Capa>

      <RestauranteContainer>
        <ProductsList lojas={[]} />
      </RestauranteContainer>
    </>
  )
}

export default HeroLoja
