import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import HeaderLoja from '../../components/HeaderLoja'

import { Lojas } from '../Home'
import HeroLoja from '../../components/HeroLoja'

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
    </>
  )
}

export default Restaurante
