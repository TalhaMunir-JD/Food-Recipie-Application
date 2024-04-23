import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import { GlobalContext } from '../Context/Appcontext';

function Navbar(){

    const{searchParams, setSearchParams, handlesubmit} = useContext(GlobalContext)

    // console.log(searchParams)

    return(
        <nav className='flex justify-between items-centerpy-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap:0'>
            <h2 className='text-2xl font-semibold'>
                <NavLink to={'/'} className='text-black hover:text-gray-700 duration'>
                    Food Recipes
                </NavLink>
            </h2>
            <form onSubmit={handlesubmit}>
                <input className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200' 
                type='text' 
                value={searchParams} 
                onChange={(event) => setSearchParams(event.target.value)} 
                placeholder="Type to search something" />
            </form>
            <ul className='flex gap-5'>
                <NavLink to={'/'} className='text-black hover:text-gray-700 duration'>Home</NavLink>
            
                <NavLink to={'/favorites'} className='text-black hover:text-gray-700 duration'>Favorites</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar