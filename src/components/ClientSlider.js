"use client"
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const SliderData =[
    { image1 : ThemeImage.Clientlogo1, image2:ThemeImage.Clientlogolight1},
    { image1 : ThemeImage.Clientlogo2, image2:ThemeImage.Clientlogolight2},
    { image1 : ThemeImage.Clientlogo3, image2:ThemeImage.Clientlogolight3},
    { image1 : ThemeImage.Clientlogo4, image2:ThemeImage.Clientlogolight4},
    { image1 : ThemeImage.Clientlogo5, image2:ThemeImage.Clientlogolight5},
    { image1 : ThemeImage.Clientlogo6, image2:ThemeImage.Clientlogolight6},
    { image1 : ThemeImage.Clientlogo5, image2:ThemeImage.Clientlogolight4},
];

export default function ClientSlider(){
    return(
        <div className="container">
            <Swiper className="clients-carousel owl-none owl-carousel style-2"
                slidesPerView={6}
                spaceBetween={30}                
                speed={2000}
                modules={[ Autoplay]}
                breakpoints={{
                    320: {
                      slidesPerView: 2,                      
                    },
                    600: {
                      slidesPerView: 3, 
                    },
                    1024: {
                      slidesPerView: 5,                      
                    },
                }}
            >
                {SliderData.map((data, ind)=>(
                    <SwiperSlide className="item" key={ind}>
                        <div className="clients-logo">
                            <Image className="logo-main" src={data.image1} alt=""/>
                            <Image className="logo-hover" src={data.image2} alt=""/>
                        </div>
                    </SwiperSlide>
                ))}                
            </Swiper>
        </div>
    )
}