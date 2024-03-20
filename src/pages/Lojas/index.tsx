import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import HeaderLoja from '../../components/HeaderLoja'

import { Cardapio, Lojas } from '../Home'
import HeroLoja from '../../components/HeroLoja'
import CardapioList from '../../components/CardapioList'

const Restaurante = () => {
  const { id } = useParams()
  const [lojas, setLojas] = useState<Lojas[]>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setLojas(res))
  }, [id])

  if (!lojas) return <div>Carregando...</div>

  return (
    <>
      <HeaderLoja />
      <HeroLoja lojas={lojas} />
      <CardapioList cardapio={[]} />
    </>
  )
}

export default Restaurante
