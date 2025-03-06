import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation,  Autoplay } from 'swiper/modules';

const testimonialData = [
    {
        imageName:  ThemeImage.TestimonialPic5,
        title : "Cak Dikin"
    },
    {
        imageName:  ThemeImage.TestimonialPic2,
        title : "Devid"
    },
    {
        imageName:  ThemeImage.TestimonialPic3,
        title : "Eity Akhter"
    },
    {
        imageName:  ThemeImage.TestimonialPic1,
        title : "Jisana Get"
    },
];

export default function TestimonialBlog(){    
    return(        
        <Swiper className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-shadow owl-btn-center"                
            loop={true}            
            autoplay={{
                delay: 1500,
            }}
            navigation={{
                prevEl : '.owl-prev',
                nextEl : '.owl-next'
            }}
            speed={3000}
            slidesPerView={1}                
            modules={[ Navigation, Autoplay]} 
        >                
            {testimonialData.map((item, ind)=>(                    
                <SwiperSlide className="item wow fadeInUp" key={ind} data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>Cras porttitor orci vel ex convallis congue. Aliquam et pharetra urna. Quisque auctor purus in nunc posuere, vitae condimentum odio mattis. Nulla hendrerit tellus tellus, sed pharetra dui vulputate sed.</p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <Image src={item.imageName} alt="" />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">{item.title}</strong> 
                                <span className="testimonial-position">CEO & Founder </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>                
            ))} 
            <div className="owl-nav">
                <div className="owl-prev"><i className="fa fa-arrow-left"/></div>
                <div className="owl-next"><i className="fa fa-arrow-right"/></div>
            </div>
        </Swiper>
    )
}