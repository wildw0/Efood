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
  name: string
  description: string
  rating?: number
  infos: string[]
  image: string
  btnText: string
}

const Product = ({
  name,
  rating,
  description,
  infos,
  image,
  btnText = 'Saiba mais'
}: Props) => (
  <Card>
    <img src={image} alt={name} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Perfil>
      <Titulo>{name}</Titulo>
      <Avaliacao>
        <Titulo>{rating}</Titulo>
        <Estrela src={estrela} alt="estrela" />
      </Avaliacao>
    </Perfil>
    <Descricao>{description}</Descricao>
    <Button to="/loja">{btnText || 'Saiba mais'}</Button>
  </Card>
)

export default Product
