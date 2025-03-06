import { teamSlider } from "@/data/team";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import Link from "next/link";


export default function TeamSlider(){
    return(
        <div className="row">
            <div className="col-lg-12 owl owl-carousel owl-none owl-theme owl-dots-primary-full">
                <Swiper 
                    className="team-carousel1 "
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 1500,
                    }}
                    pagination={{
                        el : '.owl-dots',
                        clickable : true
                    }}
                    loop={true}
                    speed={3000}
                    modules={[ Autoplay, Pagination]}
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
                    
                    {teamSlider.map((ele, ind)=>(
                        <SwiperSlide className="item wow fadeInUp" key={ind} data-wow-duration="2s" data-wow-delay="0.1s">
                            <div className="dlab-team style-1 m-b20">
                                <div className="dlab-media">
                                    <Link href="#" scroll={false}><Image src={ele.iconImage} alt="icon"/></Link>
                                </div>
                                <div className="dlab-content">
                                    <div className="clearfix">
                                        <h4 className="dlab-name"><Link href="#" scroll={false}>{ele.title}</Link></h4>
                                        <span className="dlab-position">Senior Designer</span>
                                    </div>
                                    <ul className="dlab-social-icon primary-light">
                                        <li><Link href="#" scroll={false} className="fab fa-facebook-f"></Link></li>
                                        <li><Link href="#" scroll={false} className="fab fa-instagram"></Link></li>
                                        <li><Link href="#" scroll={false} className="fab fa-twitter"></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>                                           
                    <div className="owl-dots" style={{zIndex:1}}></div>
            </div>
        </div>
    )
} 