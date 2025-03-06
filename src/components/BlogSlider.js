import { blog } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

export default function BlogSlider (){
    return(
        <div className="position-relative owl-carousel owl-theme owl-btn-1 owl-btn-center-lr owl-dots-none owl-btn-primary">
        
            <Swiper className="blog-carousel1 "
                slidesPerView={3}
                autoplay={{
                    delay: 1500,
                }}
                navigation={{
                    prevEl : '.owl-prev',
                    nextEl : '.owl-next'
                }}
                loop={true}
                speed={3000}
                modules={[ Autoplay, Navigation]}
                breakpoints={{
                    320: {
                    slidesPerView: 1, 
                    },
                    768: {
                    slidesPerView: 2,                      
                    },
                    1200: {
                    slidesPerView: 3, 
                    },
                }}
            >
                {blog.map((elem, ind)=>(
                    <SwiperSlide className="item wow fadeInUp" key={ind} data-wow-duration="2s" data-wow-delay="0.2s">                    
                        <div className="dlab-blog style-1 bg-white">
                            <div className="dlab-media">
                                <Link href="/blog-details-2"><Image src={elem.imageName} alt=""/></Link>
                            </div>
                            <div className="dlab-info">
                                <h5 className="dlab-title">
                                    <Link href="/blog-details-2">{elem.title}</Link>
                                </h5>
                                <p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
                                <div className="dlab-meta meta-bottom">
                                    <ul>
                                        <li className="post-date"><i className="flaticon-clock m-r10"/>02 Sep, 2024</li>
                                        <li className="post-comment"><Link href="#" scroll={false}><i className="flaticon-speech-bubble"/><span>15</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}           
            </Swiper>
            <div className="owl-nav">
                <div className="owl-prev">
                    <i className="fa fa-arrow-left"/>
                </div>
                <div className="owl-next">
                    <i className="fa fa-arrow-right"/>
                </div>
            </div>
        </div>

    )
}