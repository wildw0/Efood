import Tag from '../Tag'
import Button from '../Button'
import {
  Card,
  Titulo,
  Descricao,
  Infos,
  Perfil,
  Avaliacao,
  Estrela
} from './styles'

import estrela from '../../assets/images/estrela.png'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  btnText: string
}

const Product = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
  btnText = 'Saiba mais'
}: Props) => {
  const getDrescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Infos>
        {destacado && <Tag>Destaque da Semana</Tag>}
        <Tag>{tipo}</Tag>
      </Infos>
      <Perfil>
        <Titulo>{titulo}</Titulo>
        <Avaliacao>
          <Titulo>{avaliacao}</Titulo>
          <Estrela src={estrela} alt="estrela" />
        </Avaliacao>
      </Perfil>
      <Descricao>{getDrescricao(descricao)}</Descricao>
      <Button to={`/restaurantes/${id}`}>{btnText || 'Saiba mais'}</Button>
    </Card>
  )
}
export default Product
