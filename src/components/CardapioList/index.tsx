import { Cardapio } from '../../pages/Home'
import Product from '../../components/Cardapio'
import { Container, List } from '../ProductsList/styles'

export type Props = {
  cardapio: Cardapio[]
}

const CardapioList = ({ cardapio }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {cardapio.map((cardapio) => (
            <li key={cardapio.id}>
              <Product
                key={cardapio.id}
                id={cardapio.id}
                nome={cardapio.nome}
                preco={`R$ ${cardapio.preco}`}
                foto={cardapio.foto}
                descricao={cardapio.descricao}
                porcao={cardapio.porcao}
                btnText="Adicionar ao carrinho"
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}
export default CardapioList

// type Props = {
//   id: number
//   loja: Lojas[]
//   cardapio: Cardapio
// }

// const ProductList = ({ id, loja, cardapio }: Props) => (
//   <div className="container">
//     <List>
//       {loja[id].cardapio.map((loja) => (
//         <Product
//           key={loja.id}
//           id={loja.id}
//           cardapio={cardapio}
//           foto={loja.foto}
//           nome={loja.nome}
//           descricao={loja.descricao}
//           porcao={loja.porcao}
//           preco={`R$ ${loja.preco}`}
//         />
//       ))}
//     </List>
//   </div>

// export default Cardapio

// export type Item = {
//   foto: string
//   preco: number
//   id: number
//   nome: string
//   descricao: string
//   porcao: string
// }

// export type Props = {
//   menu: Menu
// }

// const Cardapio = ({ menu }: Props) => {
//   return (
//     <Container>
//       <div className="container">
//         <List>
//           {menu.cardapio.map((item) => (
//             <li key={item.id}>
//               <Product
//                 key={item.id}
//                 id={item.id}
//                 nome={item.nome}
//                 preco={`R$ ${item.preco}`}
//                 foto={item.foto}
//                 descricao={item.descricao}
//                 porcao={item.porcao}
//               />
//             </li>
//           ))}
//         </List>
//       </div>
//     </Container>
//   )
// }

// export default Cardapio
