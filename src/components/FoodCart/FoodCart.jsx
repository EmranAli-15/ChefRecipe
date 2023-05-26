import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const FoodCart = ({ food }) => {
    const { id, chefName, chefPhoto, yearsOfExperience, numberOfRecipes, numberOfLikes } = food;
    return (
        <div className='border-2 rounded-md p-4'>
            <div className='flex shadow-sm justify-evenly items-center py-4 mb-6'>
                <LazyLoad height={168}>
                    <img className='h-32 w-32 rounded-full opacity-75' src={chefPhoto} alt="" />
                </LazyLoad>
                <h1 className='text-2xl font-bold'>{chefName}</h1>
            </div>
            <h1 className='text-xl font-medium'>Recipes: {numberOfRecipes} items</h1>
            <h1 className='text-xl font-semibold'>Experience: {yearsOfExperience} years</h1>
            <div className='flex justify-between place-items-center px-4 mt-6'>
                <div className='flex items-center gap-x-2'>
                    <FaHeart className='text-red-500 h-6 w-6'></FaHeart>
                    <h1 className='text-lg'>
                        {numberOfLikes}
                    </h1>
                </div>
                <button className="btn btn-sm btn-success">
                    <Link to={`/chefRecipe/${id}`}>view recipes</Link>
                </button>
            </div>
        </div>
    );
};

export default FoodCart;