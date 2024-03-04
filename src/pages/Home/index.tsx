import ProductsList from '../../components/ProductsList'
import Lojas from '../../models/Lojas'

import sushi from '../../assets/images/sushi.png'
import massas from '../../assets/images/massa.png'
import Header from '../../components/Header'

const principal: Lojas[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    name: 'Hioki Sushi',
    rating: 4.9,
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    infos: ['Italiana'],
    image: massas
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    infos: ['Italiana'],
    image: massas
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    infos: ['Italiana'],
    image: massas
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    infos: ['Italiana'],
    image: massas
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    infos: ['Italiana'],
    image: massas
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList lojas={principal} />
  </>
)

export default Home
