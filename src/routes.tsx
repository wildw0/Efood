import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurante from './pages/Lojas'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Restaurante />} />
  </Routes>
)

export default Rotas
