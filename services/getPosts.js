export const getPosts = async () => {

    const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
    const data = await response.json()
    return data.data.map(post => ({
        id: post.id,
        url: post.attributes.url,
        title: post.attributes.title,
        content: post.attributes.content,
        image: post.attributes.image.data.attributes.formats.medium.url,
        publishedAt: post.attributes.publishedAt
    }))

}

export const getSinglePost = async (url) => {

    const response = await fetch(
        `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
    )
    const data = await response.json()
    return data.data.map(post => ({
        title: post.attributes.title,
        content: post.attributes.content,
        image: post.attributes.image.data.attributes.formats.medium.url,
        publishedAt: post.attributes.publishedAt
    }))

}

export const getPostPaths = async () => {

    const response = await fetch(`${process.env.API_URL}/posts`)
    const { data } = await response.json()
    const paths = data.map((path) => ({
        params: { url: path.attributes.url }
    }))

    return paths

}
