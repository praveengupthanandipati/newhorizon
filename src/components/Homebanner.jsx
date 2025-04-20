import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import Banner01 from "../assets/img/banner01.jpg";
import Banner02 from "../assets/img/banner02.jpg";
import Banner03 from "../assets/img/banner03.jpg";
import Banner04 from "../assets/img/banner04.jpg";

//Import SwiperStyles
import 'swiper/css';
import 'swiper/css/pagination';


const Homebanner = () => {

    const homeSliderItems = [
        {
          id: 1,
          imageName: Banner01,         
        },
        {
          id: 2,
          imageName: Banner02,         
        },
        {
          id: 3,
          imageName: Banner03,         
        },
        {
          id: 4,
          imageName: Banner04,         
        },
      ];
    return (
        <>
          <section className="HomeSlider">

          <article className="position-absolute article-slider">
            <div className="row">
                <div className="col-md-8 col-sm-10">
                <h2 className="font-bold font-white">
                    A Reliable source for biologically active phytochemicals & their
                    analogues
                </h2>
                <p className="font-white d-none d-md-block">
                    Embark on a fascinating journey into the heart of phytochemicals
                    with our captivating exploration.
                </p>
                </div>
            </div>
        </article>
                <Swiper            
                    pagination={{
                    clickable: true,
                    }}
                    autoplay={{
                    delay: 4000,
                    disableOnInteraction: false }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {homeSliderItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bannerimage">
                                <img
                                src={item.imageName}
                                alt=""
                                className="img-fluid bannerimg"
                                />
                            </div>             
                        </SwiperSlide>
                    ))}
                
                </Swiper>         
            </section>
        </>
    )
}

export default Homebanner;