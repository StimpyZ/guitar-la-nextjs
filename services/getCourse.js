export const getCourse = async () => {

    try {

        const response = await fetch(`${process.env.API_URL}/course?populate=image`)
        const data = await response.json()
        return data.data.attributes

    } catch (error) {

        throw new Error('Error en la llamada a la API')

    }

}
