class Lojas {
  name: string
  rating?: number
  description: string
  infos: string[]
  image: string
  id: number
  btnText?: string

  constructor(
    id: number,
    name: string,
    rating: number,
    description: string,
    infos: string[],
    image: string,
    btnText: string
  ) {
    this.id = id
    this.name = name
    this.rating = rating
    this.description = description
    this.infos = infos
    this.image = image
    this.btnText = btnText || 'Saiba mais'
  }
}

export default Lojas
