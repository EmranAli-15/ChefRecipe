import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefRecipe = () => {
    const data = useLoaderData();
    const { chefPhoto, chefName, yearsOfExperience, numberOfRecipes, numberOfLikes, bio, recipe } = data;
    return (
        <div>
            <div className="md:flex gap-x-20 items-center mt-8 shadow-lg">
                <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] p-2 md:p-10'>
                    <img className='rounded-lg h-full w-full' src={chefPhoto} alt="Album" />
                </div>
                <div className='md:p-10 p-2 md:w-[60%]'>
                    <div className='flex gap-x-24 mb-6 items-center'>
                        <h2 className="text-3xl font-bold">{chefName}</h2>
                        <div className='flex gap-x-2 items-center'>
                            <FaHeart className='text-red-500 h-8 w-6'></FaHeart>
                            <p className='font-semibold text-lg'>{numberOfLikes}</p>
                        </div>
                    </div>
                    <article><u className='font-medium text-lg'><i>MySelf</i> :</u> {bio}</article>
                    <div className='md:flex justify-evenly mt-8 items-center'>
                        <h2 className='text-xl'><span className='font-semibold'>Recipes :</span> {numberOfRecipes} items</h2>
                        <h2 className='text-xl'><span className='font-semibold'>Experience :</span> {yearsOfExperience} years</h2>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-4xl mt-8 px-4' style={{ fontFamily: "Dancing Script" }}>Here are my some popular recipe</h1>
            </div>
            <div className='grid md:grid-cols-2 gap-8 my-8 px-4'>
                {
                    recipe.map((data, index) => <RecipeCard key={index} data={data}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;