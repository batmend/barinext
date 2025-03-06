"use client"
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const sliderData = [
    { image:ThemeImage.ThumbImg1},
    { image:ThemeImage.ThumbImg2},
    { image:ThemeImage.ThumbImg3},
];



export default function PostSlider(){   
    return(
        <>
            <div className="dlab-media rounded-md shadow">
                <Swiper className="post-carousel  owl-theme owl owl-btn-center-lr owl-btn-2"
                    slidesPerView={1}
                    autoplay={{
                        delay:1500
                    }}
                    loop={true}
                    speed={2000}
                    pagination={{
                        el : '.owl-dots',
                        clickable : true
                    }}
                    navigation={{
                        prevEl : '.owl-prev',
                        nextEl:'.owl-next'
                    }}
                    
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {sliderData.map((item, ind)=>(
                        <SwiperSlide key={ind}>
                            <Image className="rounded-sm" src={item.image} alt="" />
                        </SwiperSlide>                    
                    ))}
                    <div className="owl-nav" >
                        <div className="owl-prev" style={{zIndex:1}}><i className="las la-arrow-left"/></div>
                        <div className="owl-next" style={{zIndex:1}}><i className="las la-arrow-right"/></div>
                    </div>
                    <div className="owl-dots" style={{zIndex:1}}></div>
                </Swiper>
            </div>
        </>
    )
}