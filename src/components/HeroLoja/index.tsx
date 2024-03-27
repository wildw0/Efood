import ProductsList from '../../components/ProductsList'
import { Lojas } from '../../pages/Home'

import { Capa, BGCapa } from '../../components/HeroLoja/styles'

interface Props {
  loja: Lojas
}

const HeroLoja: React.FC<Props> = ({ loja }) => {
  const { id, titulo, capa, descricao, destacado, avaliacao } = loja

  return (
    <>
      <Capa>
        <BGCapa src={loja.capa} alt={loja.titulo} />
        <div>
          <h2>{loja.tipo}</h2>
          <p>{loja.titulo}</p>
        </div>
      </Capa>
    </>
  )
}

export default HeroLoja
