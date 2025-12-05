import SectionTitle from "../../../compontents/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

// Review star Rating

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


import { FaQuoteLeft } from "react-icons/fa";




const Testimonials = () => {
    const [review , setReview] = useState([])

    useEffect(() => {
        fetch('https://bistro-boss-server-wine-nine.vercel.app/review')
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    },[])
    return (
        <div>
            <SectionTitle
                Heading= 'TESTIMONIALS'
                subHeading= 'What Our Clients Say'
            ></SectionTitle>
            <>
            <Swiper navigation={true}
                slidesPerView={1}
                spaceBetween={30}
                loop={true} modules={[Navigation]}
                className="mySwiper cursor-move">
                {
                    review.map(reviews => <SwiperSlide key={reviews._id}
                    reviews={reviews}>
                        <div className="m-24 flex flex-col items-center mx-24 text-center">
                            
                            <Rating 
                            style={{ maxWidth: 180 }}
                            value={reviews.rating}
                            readOnly
                            />
                            <FaQuoteLeft className="text-7xl my-7" />
                            <p className="my-6">{reviews.details}</p>
                            <h1 className="text-2xl text-orange-400">{reviews.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            </>

        </div>
    );
};

export default Testimonials;