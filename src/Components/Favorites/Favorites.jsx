import { useContext } from 'react';
import { GlobalContext } from '../Context/Appcontext';
import RecipeItem from '../Home/RecipeItem';


function Favorites(){

    const { loading, favorites } = useContext(GlobalContext)


    if(loading) return<div className='lg:text-4xl text-xl text-center text-black font-extrabold'>Loading... please wait!</div>

    return(
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
            {
                favorites && favorites.length ?(
                    favorites.map((item) => <RecipeItem item={item} key={item.id}/>))
                  : <div className='lg:text-4xl text-xl text-center text-black font-extrabold'>
                        Nothing added in Favorites.
                    </div>
            }
        </div>
    )
}

export default Favorites;