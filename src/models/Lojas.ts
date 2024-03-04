class Lojas {
  name: string
  rating?: number
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    name: string,
    rating: number,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.name = name
    this.rating = rating
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default Lojas
