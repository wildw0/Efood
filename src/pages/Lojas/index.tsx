import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import HeaderLoja from '../../components/HeaderLoja'

import { Cardapio, Lojas } from '../Home'
import HeroLoja from '../../components/HeroLoja'
import CardapioList from '../../components/CardapioList'

const Restaurante = () => {
  const { id } = useParams()
  const [loja, setLoja] = useState<Lojas | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setLoja(res))
  }, [id])

  if (!loja) return <div>Carregando...</div>

  return (
    <>
      <HeaderLoja />
      <HeroLoja loja={loja} />
      <CardapioList cardapios={loja.cardapio} />
    </>
  )
}

export default Restaurante
