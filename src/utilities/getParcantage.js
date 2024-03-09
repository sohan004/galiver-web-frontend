
const getParentage = (value, total) => {
    const result = (value / total) * 100
    return  result.toFixed(2)
}

export default getParentage