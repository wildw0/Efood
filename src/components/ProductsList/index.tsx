import { Lojas } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  lojas: Lojas[]
}

const ProductsList = ({ lojas }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {lojas.map((loja) => (
            <li key={loja.id}>
              <Product
                key={loja.id}
                id={loja.id}
                titulo={loja.titulo}
                capa={loja.capa}
                descricao={loja.descricao}
                tipo={loja.tipo}
                avaliacao={loja.avaliacao}
                destacado={loja.destacado}
                btnText={loja.btnText || ''}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
