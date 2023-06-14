import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import all from '../../../assets/classes/all.jpg';
import yama from '../../../assets/classes/yoga-smiling-girl.jpeg';
import niyama from '../../../assets/classes/niyama.jpeg';
import Asana from '../../../assets/classes/asana.jpeg';
import Pranayama from '../../../assets/classes/pranayama.jpeg';
import Pratyahara from '../../../assets/classes/prathyahara.jpeg';
import Dharana from '../../../assets/classes/dharana.jpeg';
import Dhyana from '../../../assets/classes/dhayana.jpeg';
import Samadhi from '../../../assets/classes/Samadhi.jpg.webp';
import SectionsTitle from "../../../Components/Titles/SectionsTitle";

const ClsCatagory = () => {
    return (

        <section>

            <SectionsTitle
                subHeading={'From 6am to 8am.'}
                Heading={'All Classes Introduction'}


            ></SectionsTitle>
            <div className="container  m-auto mb-5" >
                <Swiper

                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {/* <div ></div> */}
                    <SwiperSlide>
                        <img  src={all} alt="" className="px-20 py-16 object-cover w-full h-[750px]" />
                        


                    </SwiperSlide>

                    <SwiperSlide>
                        <img   src={yama}  alt="" className="px-20 py-16 object-cover w-full h-[750px]" />
                        <div className="absolute   top-3 ">
                            <div className='pl-20 pt-4 space-y-2 w-full'>
                                <h2 className="text-3xl bg-neutral-50  text-lime-800 mb-2 border border-lime-600">--Yama--</h2>

                            </div>


                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={niyama} alt="" className="px-20 py-16 object-cover w-full h-[750px]" />
                        <div className="absolute   top-3 ">
                            <div className='pl-20 pt-4 space-y-2 w-full'>
                                <h2 className="text-3xl bg-neutral-50  text-lime-800 mb-2 border border-lime-600">--Niyama--</h2>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Asana} alt="" className="px-20 py-16 object-cover w-full h-[750px]" />
                        <div className="absolute   top-3 ">
                            <div className='pl-20 pt-4 space-y-2 w-full'>
                                <h2 className="text-3xl bg-neutral-50  text-lime-800 mb-2 border border-lime-600">--Asana--</h2>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Pranayama} alt="" className="px-20 py-16 object-cover w-full h-[750px]" />
                        <div className="absolute   top-3 ">
                            <div className='pl-20 pt-4 space-y-2 w-full'>
                                <h2 className="text-3xl bg-neutral-50  text-lime-800 mb-2 border border-lime-600">--Pranayama--</h2>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Pratyahara} alt="" className="px-20 py-16 object-cover w-full h-[750px]" />
                        <div className="absolute   top-3 ">
                            <div className='pl-20 pt-4 space-y-2 w-full'>
                                <h2 className="text-3xl bg-neutral-50  text-lime-800 mb-2 border border-lime-600">--Pratyahara--</h2>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Dharana} alt="" className="px-20 py-16 object-cover w-full h-[750px]" />
                        <div className="absolute   top-3 ">
                            <div className='pl-20 pt-4 space-y-2 w-full'>
                                <h2 className="text-3xl bg-neutral-50  text-lime-800 mb-2 border border-lime-600">--Dharana--</h2>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Dhyana} alt="" className="px-20 py-16 object-cover w-full h-[750px]" />
                        <div className="absolute   top-3 ">
                            <div className='pl-20 pt-4 space-y-2 w-full'>
                                <h2 className="text-3xl bg-neutral-50  text-lime-800 mb-2 border border-lime-600">--Dhyana--</h2>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Samadhi} alt="" className="px-20 py-16 object-cover w-full h-[750px]" />
                        <div className="absolute   top-3 ">
                            <div className='pl-20 pt-4 space-y-2 w-full'>
                                <h2 className="text-3xl bg-neutral-50  text-lime-800 mb-2 border border-lime-600">--Samadhi--</h2>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>

    );
};

export default ClsCatagory;