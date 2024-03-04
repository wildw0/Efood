import Lojas from '../../models/Lojas'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  lojas: Lojas[]
}

const ProductsList = ({ lojas }: Props) => (
  <Container>
    <div className="container">
      <List>
        {lojas.map((loja) => (
          <Product
            key={loja.id}
            description={loja.description}
            image={loja.image}
            infos={loja.infos}
            name={loja.name}
            rating={loja.rating}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
