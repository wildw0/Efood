import { useState } from 'react'
import Button from '../Button'
import {
  CardapioContainer,
  Card,
  Descricao,
  Titulo,
  ListaCardapio,
  List
} from '../Cardapio/styles'

type Props = {
  id: number
  nome: string
  preco: string
  descricao: string
  foto: string
  porcao: string
  btnText?: string
}

const Product = ({
  id,
  nome,
  preco,
  foto,
  descricao,
  porcao,
  btnText = 'Adicionar ao carrinho'
}: Props) => {
  const getDrescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
    }
    return descricao
  }

  return (
    // <ListaCardapio>
    <CardapioContainer>
      {/* <List> */}
      <Card>
        <img src={foto} alt={nome} />
        <Titulo>{nome}</Titulo>
        <Descricao> {getDrescricao(descricao)}</Descricao>
        {/* {porcao} */}
        <Button to={`/restaurantes/${id}`}>{btnText}</Button>
        {/* - {preco} */}
      </Card>

      {/* </List> */}
    </CardapioContainer>
    // </ListaCardapio>
  )
}
export default Product
