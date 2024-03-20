import { Menu } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from '../ProductsList/styles'

export type Props = {
  menu: Menu[]
}

const Cardapio = ({ menu }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {menu.map((menu) => (
            <li key={menu.cardapio.id}>
              <Product
                key={menu.cardapio.id}
                id={menu.cardapio.id}
                nome={menu.cardapio.nome}
                preco={`R$ ${menu.cardapio.preco}`}
                foto={menu.cardapio.foto}
                descricao={menu.cardapio.descricao}
                porcao={menu.cardapio.porcao}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default Cardapio
