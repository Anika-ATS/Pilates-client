import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import all from '../../../assets/classes/all.jpg';
import yama from '../../../assets/classes/yoga-smiling-girl.jpeg';
import niyama from '../../../assets/classes/niyama.jpeg';
import Asana from '../../../assets/classes/asana.jpeg';
import  Pranayama from '../../../assets/classes/pranayama.jpeg';
import Pratyahara from '../../../assets/classes/prathyahara.jpeg';
import Dharana from '../../../assets/classes/dharana.jpeg';
import Dhyana from '../../../assets/classes/dhayana.jpeg';
import Samadhi from '../../../assets/classes/Samadhi.jpg.webp';

const ClsCatagory = () => {
    return (
     
        <div className="container  m-auto" >
            <Swiper
       
        spaceBetween={30} 
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <div ></div> */}
        <SwiperSlide>
            <img src={all} alt="" className="px-5 py-5 w-full h-[750px]" />
        </SwiperSlide>
        
        <SwiperSlide>
             <img src={yama} alt="" className="px-5 py-5 w-full h-[750px]" /></SwiperSlide>
        <SwiperSlide>
             <img src={niyama} alt="" className="px-5 py-5 w-full h-[750px]" /></SwiperSlide>
        <SwiperSlide>
             <img src={Asana} alt="" className="px-5 py-5 w-full h-[750px]" /></SwiperSlide>
        <SwiperSlide>
             <img src={ Pranayama} alt="" className="px-5 py-5 w-full h-[750px]" /></SwiperSlide>
        <SwiperSlide>
             <img src={ Pratyahara} alt="" className="px-5 py-5 w-full h-[750px]" /></SwiperSlide>
        <SwiperSlide> 
            <img src={Dharana} alt="" className="px-5 py-5 w-full h-[750px]" /></SwiperSlide>
        <SwiperSlide>
             <img src={Dhyana} alt="" className="px-5 py-5 w-full h-[750px]"/></SwiperSlide>
        <SwiperSlide>
             <img src={Samadhi} alt="" className="px-5 py-5 w-full h-[750px]" /></SwiperSlide>
        </Swiper>
            
        </div>
        
    );
};

export default ClsCatagory;