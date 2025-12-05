// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import slide

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../compontents/SectionTitle/SectionTitle';


const Categary = () => {
    return (
      <section>
          <SectionTitle
           subHeading ={'From to 11.00pm to 10.00pm'}
           Heading = {'Order online'}
          ></SectionTitle>
          <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
              <img src={slide1} alt="" />
              <h4 className='text-center -mt-20 text-2xl uppercase text-white'>salads</h4>
          </SwiperSlide>
          <SwiperSlide>
              <img src={slide2} alt="" />
              <h4 className='text-center -mt-20 text-2xl uppercase text-white'>Pizza</h4>
          </SwiperSlide>
          <SwiperSlide>
              <img src={slide3} alt="" />
              <h4 className='text-center -mt-20 text-2xl uppercase text-white'>sopu</h4>
          </SwiperSlide>
          <SwiperSlide>
              <img src={slide4} alt="" />
              <h4 className='text-center -mt-20 text-2xl uppercase text-white'>desate</h4>
          </SwiperSlide>
          <SwiperSlide>
              <img src={slide5} alt="" />
              <h4 className='text-center -mt-20 text-2xl uppercase text-white'>salads</h4>
          </SwiperSlide>
          <SwiperSlide>
              <img src={slide2} alt="" />
              <h4 className='text-center -mt-20 text-2xl uppercase text-white'>Pizza</h4>
          </SwiperSlide>
          <SwiperSlide>
              <img src={slide3} alt="" />
              <h4 className='text-center -mt-20 text-2xl uppercase text-white'>sopu</h4>
          </SwiperSlide>
          <SwiperSlide>
              <img src={slide4} alt="" />
              <h4 className='text-center -mt-20 text-2xl uppercase text-white'>desate</h4>
          </SwiperSlide>
          </Swiper>
      </section>
    );
};

export default Categary;