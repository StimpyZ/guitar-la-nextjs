export const getGuitars = async () => {

    const response = await fetch(
        `${process.env.API_URL}/guitarras?populate=image`
    )
    const data = await response.json()
    return data.data.map(guitar => ({
        id: guitar.id,
        uuid: guitar.attributes.url,
        name: guitar.attributes.name,
        description: guitar.attributes.description,
        price: guitar.attributes.price,
        image: guitar.attributes.image.data.attributes.formats.medium.url
    }))

}

export const getSingleGuitar = async (uuid) => {

    const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${uuid}&populate=image`)
    const data = await response.json()
    return data.data.map(guitar => ({
        id: guitar.id,
        name: guitar.attributes.name,
        description: guitar.attributes.description,
        price: guitar.attributes.price,
        image: guitar.attributes.image.data.attributes.formats.medium.url
    }))

}

export const getGuitarsPaths = async () => {

    const response = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await response.json()
    const paths = data.map(path => ({
        params: { uuid: path.attributes.url }
    }))

    return paths

}
