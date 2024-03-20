import Tag from '../Tag'
import Button from '../Button'
import { Card, Titulo, Descricao, Infos, Perfil, Avaliacao } from './styles'

type Props = {
  id: number
  nome: string
  preco: string
  descricao: string
  foto: string
  porcao: string
  btnText: string
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
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={foto} alt={nome} />
      <Infos></Infos>
      <Perfil>
        <Titulo>{nome}</Titulo>
        <Avaliacao>
          <Titulo></Titulo>
        </Avaliacao>
      </Perfil>
      <Descricao>{getDrescricao(descricao)}</Descricao>
      {porcao}
      <Button to={`/restaurantes/${id}`}>
        {btnText || 'Saiba mais'}
      </Button> - {preco}
    </Card>
  )
}
export default Product
