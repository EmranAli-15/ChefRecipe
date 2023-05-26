import React, { useEffect, useState, useRef } from 'react';
import FoodCart from '../FoodCart/FoodCart';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const Home = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://chef-recipes-emranali-15.vercel.app/chef')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <div className='h-[200px] md:h-[calc(100vh-200px)]'>
                <div className='flex ps-10' style={{ backgroundImage: 'url(https://i.ibb.co/0nrV7yZ/banner.jpg)', width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className='flex flex-col gap-y-10 justify-center' style={{ fontFamily: 'Dancing Script' }}>
                        <h1 className='text-white text-2xl md:text-5xl font-bold text-yellow-400'>Food Zone</h1>
                        <h1 className='text-white text-2xl md:text-5xl'>Good Food, <br />Good Health</h1>
                    </div>
                </div>
            </div>
            <h1 className='my-8 text-3xl font-medium text-center'>
                You may like these popular recipe
            </h1>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='rounded-md' src="https://i.ibb.co/5WQBrT7/noodless.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-md' src="https://i.ibb.co/HDKMWBH/chicken.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-md' src="https://i.ibb.co/fnqYWmb/fried-rice.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-md' src="https://i.ibb.co/5WQBrT7/noodless.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-md' src="https://i.ibb.co/HDKMWBH/chicken.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-md' src="https://i.ibb.co/fnqYWmb/fried-rice.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-md' src="https://i.ibb.co/5WQBrT7/noodless.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-md' src="https://i.ibb.co/HDKMWBH/chicken.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-md' src="https://i.ibb.co/fnqYWmb/fried-rice.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <h1 className='text-center mt-16 text-3xl' style={{ fontFamily: 'Dancing Script' }}>
                Your Favorite Chefs
            </h1>
            <div className='grid md:grid-cols-3 gap-6 p-10'>
                {
                    foods.map(food => <FoodCart key={food.id} food={food}></FoodCart>)
                }
            </div>
            <div className='mt-4'>
                <h1 className='text-4xl font-bold text-center'>Our Team</h1>
                <p className='text-lg text-center'>Hello user, our team have world class chefs. Here we <br /> show some top most popular chefs.</p>
                <div className='md:flex items-center justify-evenly my-6'>
                    <div className='flex items-center flex-col my-4'>
                        <img className='w-32 h-32 rounded-full' src="https://i.ibb.co/Lr95pVf/chef-1.jpg" alt="" />
                        <h3 className='text-lg font-bold'>Danoe Gitsa</h3>
                        <p>Executive Chef</p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <img className='w-32 h-32 rounded-full' src="https://i.ibb.co/qjtVXbH/chef-5.jpg" alt="" />
                        <h3 className='text-lg font-bold'>Mols Isunsa</h3>
                        <p>Restaurant Manager</p>
                    </div>
                    <div className='flex items-center flex-col my-4'>
                        <img className='w-32 h-32 rounded-full' src="https://i.ibb.co/zs5gqMs/chef-6.webp" alt="" />
                        <h3 className='text-lg font-bold'>Gresa Yuoll</h3>
                        <p>Co. Chief</p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <img className='w-32 h-32 rounded-full' src="https://i.ibb.co/GM5Dqvg/chef-3.jpg" alt="" />
                        <h3 className='text-lg font-bold'>Chaku lili</h3>
                        <p>Co. Chief</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;