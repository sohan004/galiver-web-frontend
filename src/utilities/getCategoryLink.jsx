import { NavLink } from "react-router-dom"

const getProductTopCategoryLink = (category, sub, subSub) => {
    return <>
        <NavLink to='/'>Home</NavLink>

        {category && <span>/</span>}
        <NavLink to={`/search?category=${category?._id}`}>{category?.name}</NavLink>

        {sub && <span>/</span>}
        <NavLink to={`/search?sub=${sub?._id}`}>{sub?.name}</NavLink>

        {subSub && <span>/</span>}
        <NavLink to={`/search?subsub=${subSub?._id}`}>{subSub?.name}</NavLink>

    </>
}

export default getProductTopCategoryLink