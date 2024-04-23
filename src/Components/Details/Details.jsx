import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../Context/Appcontext"

function Details({ item }){
    const params = useParams()
    console.log('params', params)
    const{recipeDetailsData, setRecipeDetailsData, handleFavoriteRecipes, favorites} = useContext(GlobalContext)
    
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`)
            const result = await res.json()
            // console.log(result.data)
            if(result?.data){
                setRecipeDetailsData(result.data) 
            }
            // console.log(recipeDetailsData?.recipe?.id)
        }
        fetchData()
    }, [])

    return(
        <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='row-start-2 lg:row-start-auto'>
                <div className='h-96 overflow-hidden rounded-xl group'>
                    <img src={recipeDetailsData?.recipe?.image_url} 
                    className='w-full h-full object-sover block group-hover:scale-105 duration-300'/>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <span className='text-sm text-cyan-700 font-medium'>{recipeDetailsData?.recipe?.publisher}</span>
                <h3 className='font-bold text-2xl truncate text-black'>
                    {recipeDetailsData?.recipe?.title}
                </h3>
                {/* {console.log('recipe details', recipeDetailsData?.recipe)} */}
                <div>
                    <button 
                    onClick={()=>handleFavoriteRecipes(recipeDetailsData?.recipe)} 
                    className='p-3 px-8 rounded-lg bg-black text-white uppercase font-medium tracking-wider mt-3 inline-block shadow-md '>
                        {
                            favorites.findIndex(item=> item.id === recipeDetailsData?.recipe?.id) !== -1 ? 'Remove from favorites' : 'Add to Favorites'
                        }
                    </button>
                </div>
                <div>
                    <span className='text-2xl font-semibold text-black'>Ingredients:</span>
                    <ul className='flex flex-col gap-3'>
                        {
                            recipeDetailsData?.recipe?.ingredients.map((ingredient)=>
                            <li key={ingredient.id}>
                                <span key={ingredient.id}>{ingredient.quantity} {ingredient.unit}</span>
                                <span key={ingredient.id}>{ingredient.description}</span>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Details