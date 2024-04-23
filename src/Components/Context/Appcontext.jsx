import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

function ContextProvider({ children }){

    const[searchParams, setSearchParams] = useState('')
    const[loading, setLoading] = useState(false)
    const[recipeList, setRecipeList] = useState([])
    const[error, setError] = useState('')
    const[recipeDetailsData, setRecipeDetailsData] = useState(null)
    const[favorites, setFavorites]=useState([])


    const handleFavoriteRecipes = (currentItem) => {
        console.log('current item',currentItem.id)
        let cpyFavorites = [...favorites]
        const index = cpyFavorites.findIndex(item => item.id === currentItem.id)
        // console.log('index', index)
        if(index === -1){
            cpyFavorites.push(currentItem)
        }else{
            cpyFavorites.splice(index)
        }
        setFavorites(cpyFavorites)
    }

    console.log(favorites, 'Favorites')

    //https://forkify-api.herokuapp.com/api/v2/recipes
    const handlesubmit = async(event) => {
        setLoading(true)
        event.preventDefault()
        try {
            // console.log(searchParams)
            const recipes = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`)
            const json = await recipes.json()
            // console.log(json.data.recipes)
            if(json?.data?.recipes){
                setLoading(false)
                setRecipeList(json?.data?.recipes)
                setSearchParams('')
            }
        } catch (error) {
            console.log(error.message)
            setLoading(false)
            setError(error.message)
        }
    }

    return <GlobalContext.Provider value={{recipeDetailsData, favorites, setRecipeDetailsData, loading, recipeList, searchParams, setSearchParams, handlesubmit, handleFavoriteRecipes }}>
        { children }
    </GlobalContext.Provider>
}

export default ContextProvider;
