"use client"
import Link from "next/link";
import { useState } from "react";
import AboutusBlog from "@/components/AboutusBlog";
import CommanTitle from "@/components/CommanTitle";
import CounterBlog from "@/components/CounterBlog";
import Header from "@/components/Header";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import ModalVideo from 'react-modal-video';

import TestimonialBlog from "@/components/TestimonialBlog";
import BlogSlider from "@/components/BlogSlider";
import Footer from "@/components/Footer";
import TeamSlider from "@/components/TeamSlider";
import GetInTouch from "@/components/GetInTouch";

export default function AboutUs() {
    const [openModal, setOpenModal] = useState(false);
    return(
        <>
            <Header headstyle="" />
            <div className="page-content bg-white">		
                <CommanTitle  bgimg={ThemeImage.BannerBg1} pagetitle="About Us 2" cappageTitle="ABOUT US 2" maintitle="Home" />                
                <section className="content-inner">
                    <div className="container">
                        <AboutusBlog  btnBlog={false}/>
                    </div>
                </section>    
                <section className="counter-wraper bg-white half-bg"> 
                    <div className="container">
                        <CounterBlog />
                    </div>
                </section>
                {/* <!-- Video --> */}
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                                <div className="section-head style-1">
                                    <h6 className="sub-title">WATCH US</h6>
                                    <h2 className="title m-b15">WATCH HOW OUR TEAM HELP</h2>
                                    <p>Suspendisse euismod eget lacus quis mattis. Nunc ut auctor justo, et pulvinar lorem nteger tempor nisi venenatis</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                            <div className="icon-bx-sm bg-white"> 
                                                <Link href="#"  scroll={false} className="icon-cell text-primary">
                                                    <i className="flaticon-chat"></i>
                                                </Link> 
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Online Support</h4>
                                                <p>Quisque efficitur consequat turpis, eget consequat risus vulputate eunc ligula.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                            <div className="icon-bx-sm bg-white"> 
                                                <Link href="#" scroll={false} className="icon-cell text-primary">
                                                    <i className="flaticon-bullhorn"></i>
                                                </Link> 
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b10">Worldwide Marketing</h4>
                                                <p>Quisque efficitur consequat turpis, eget consequat risus vulputate eunc ligula.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                                <div className="video-bx style-3">
                                    <Image src={ThemeImage.VideoPic3} alt="video"/>                                    
                                    <div className="video-btn">
                                        <Link href="#" scroll={false} className="popup-youtube"
                                            onClick={() => setOpenModal(true)}
                                        >
                                            <i className="flaticon-play" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 bgl-primary">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title">TEAM</h6>
                            <h2 className="title">OUR BEST EXPERTISE</h2>
                        </div>
                        <TeamSlider />
                    </div>
                </section>
                
                
                <section className="content-inner bg-white"  style={{backgroundImage:`url('${ThemeImage.BackBg7.src}')`, backgroundSize:"cover", backgroundPosition:"center"}}>
                    <div className="container">                       
                        <div className="row testimonials-wraper-1 align-items-center">
                            <div className="col-lg-6" >
	        					<div className="section-head style-1">
                                    <h6 className="sub-title">TESTMONIAL</h6>
                                    <h2 className="title m-b10">WHAT OUR CLIENTS SAY’S</h2>
                                    <p>Nunc vel ligula ut erat scelerisque vehicula sit amet porttitor magna. Donec malesuada quis diam quis pellentesque. Mauris mollis ligula magna.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <TestimonialBlog />
                            </div>
                        </div>
                    </div>
                </section>	            
                <section className="content-inner bgl-primary">
                    <div className="container">                        
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title">BLOG</h6>
                            <h2 className="title">LATEST BLOG & NEWS</h2>
                        </div>
                        <BlogSlider />
                    </div>
                </section>   
                <section className="content-inner" 
                    style={{backgroundImage: `url('${ThemeImage.BackBg19.src}')`, backgroundSize:"100%", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}
                >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-7 m-b30" >
                                <div className="section-head style-1">
                                    <h6 className="sub-title">CONTACT US</h6>
                                    <h2 className="title">GET IN TOUCH</h2>
                                </div>
                                <GetInTouch />
                            </div>
                            <div className="col-xl-6 col-lg-5 m-b30">
                                <div className="dlab-media cf-r-img">	
                                    <Image src={ThemeImage.AboutPic2} className="move-1" alt="about"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
                                
            </div> 

            <ModalVideo
				channel="youtube"
				youtube={{ mute: 1, autoplay: 1 }}
				isOpen={openModal}
				videoId="zjzl_z0vX1M"
				onClose={() => setOpenModal(false)} 
			/>
            {/* Footer */}
            <Footer />
        </>
    )
}