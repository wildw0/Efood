import React, { useState, useEffect } from 'react'
import { Cardapio } from '../../pages/Home'
import { useParams } from 'react-router-dom'
import Product from '../Cardapio'
import { List, CardapioContainer } from '../Cardapio/styles'
import { Container } from '../ProductsList/styles'

export interface Props {
  cardapios: Cardapio[]
}

const CardapioList: React.FC<Props> = ({ cardapios }) => {
  const { id } = useParams()
  const [cardapioList, setCardapioList] = useState<Cardapio[]>([])
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setCardapioList(data.cardapio))
  }, [id])

  return (
    <Container>
      <div className="container">
        <List>
          {cardapioList.map((item) => (
            <li key={item.id}>
              <Product
                key={item.id}
                id={item.id}
                foto={item.foto}
                nome={item.nome}
                descricao={item.descricao}
                porcao={`Serve: de ${item.porcao}`}
                preco={`R$ ${item.preco}`}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default CardapioList
