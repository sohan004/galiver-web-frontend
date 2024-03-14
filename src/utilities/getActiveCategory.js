const getActiveCategory = (type, id) => {
    const search = window.location.search
    const params = new URLSearchParams(search).get(type)
    return params?.toString() === id?.toString() ? true : false
}

export default getActiveCategory;