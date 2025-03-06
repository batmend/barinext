"use client"
import Image from "next/image";
// import Link from "next/link";

import Header from "../../components/Header";
import { ThemeImage } from "@/data/ThemeImage";

// component
import ClientSlider from "../../components/ClientSlider";
import AwesomeServiceBlog from "../../components/AwesomeServiceBlog";
import AboutusBlog from "../../components/AboutusBlog";
import CounterBlog from "../../components/CounterBlog";
import FeatureBlog from "../../components/FeatureBlog";
import PortfolioBlog from "../../components/PortfolioBlog";
import Newslatter from "../../components/Newslatter";
import TeamSlider from "../../components/TeamSlider";
import PricningBlog from "../../components/PricingBlog";
import TestimonialBlog from "../../components/TestimonialBlog";
import BlogSlider from "../../components/BlogSlider";
import Footer from "../../components/Footer";
import GetInTouch from "@/components/GetInTouch";
import { awesomeServices } from "@/data/services";



export default function HomePage() {    
    const selectedServices = awesomeServices.filter(service => [1,2,3].includes(service.id));
    return(
        <>
            <Header  headstyle={"header-transparent text-black"}/>
            <div className="page-content bg-white">		
                <div className="banner-one" 
                    style={{backgroundImage: `url('${ThemeImage.SliderBnr2.src}')`}}
                >
                    <div className="container">
                        <div className="banner-inner">
                            <div className="img1"><Image src={ThemeImage.SliderBnr3} alt=""/></div>
                            <div className="img2"><Image src={ThemeImage.SliderBnr4} alt=""/></div>
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <div className="banner-content">
                                        <h6 data-wow-duration="1s" data-wow-delay="0.5s" className="wow fadeInUp sub-title">WE CREATE IDEAS</h6>
                                        <h1 data-wow-duration="1.2s" data-wow-delay="1s" className="wow fadeInUp">HOW WE CAN HELP YOUR <span className="text-primary">BUSINESS</span></h1>
                                        <p  data-wow-duration="1.4s" data-wow-delay="1.5s" className="wow fadeInUp m-b30">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus.</p>
                                        <a  data-wow-duration="1.6s" data-wow-delay="2s" className="wow fadeInUp btn btn-primary" href="about-us-2.html" >Learn More<i className="fa fa-angle-right m-l10"></i></a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
                                        <Image className="move-1" src={ThemeImage.SliderBnr5} alt="slider_5"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section style={{backgroundImage: `url('${ThemeImage.BackBg1.src}')`, backgroundSize:"100%"}}>
                    <div className="content-inner-2">
                        <ClientSlider />
                    </div>
                    <div className="content-inner-2">
                        <div className="container">
                            <div className="section-head style-1 text-center">
                                <h6 className="sub-title">SERVICES</h6>
                                <h2 className="title">PROVIDE AWESOME SERVICE</h2>
                            </div>
                            <div className="row">                                
                                {selectedServices.map((service, i)=>(
                                    <div className="col-lg-4 col-md-6" key={i}>
                                        <AwesomeServiceBlog cardStyle= {service.cardStyle} iconName={service.iconName}  title={service.title} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>  
                </section>
                <section className="content-inner" 
                    style={{backgroundImage: `url('${ThemeImage.BackBg19.src}')`, backgroundSize: "100%"}}
                >
                    <div className="container">
                        <AboutusBlog  btnBlog={true}/>
                    </div>                   
                </section> 
                <section className="counter-wraper bg-white half-bg" > 
                    <div className="container">
                        <CounterBlog />
                    </div>
                </section>
                 <section className="content-inner-2">
                    <div className="container">
                        <FeatureBlog />
                    </div>
                </section>
                
                <section className="content-inner-1">
                    <div className="container-fluid">
                        <div className="section-head style-1 text-center mb-3">
                            <h6 className="sub-title">PROJECTS</h6>
                            <h2 className="title">OUR PORTFOLIO</h2>
                        </div>
                        <PortfolioBlog />
                    </div>
                </section>
                <section className="content-inner-3 bg-primary" 
                    style={{backgroundImage: `url('${ThemeImage.BackBg13.src}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
                >
                   <Newslatter />
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
                {/* <!-- Our Pricing --> */}
                <section className="content-inner"
                    style={{backgroundImage: `url('${ThemeImage.BackBg20.src}')`, backgroundSize: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
                >
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title">PRICING</h6>
                            <h2 className="title">CHOOSE PLAN</h2>
                        </div>                       			
                        <div className="row pricingtable-wraper-1">
                            <PricningBlog />
                        </div>
                    </div>
                </section>                
                <section className="content-inner bgl-primary" >
                    <div className="container">                       
                        <div className="row testimonials-wraper-1 align-items-center">
                            <div className="col-lg-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.8s">
	        					<div className="section-head style-1">
                                    <h6 className="sub-title">TESTMONIAL</h6>
                                    <h2 className="title m-b10">WHAT OUR CLIENTS SAY’S</h2>
                                    <p>Nunc vel ligula ut erat scelerisque vehicula sit amet porttitor magna. Donec malesuada quis diam quis pellentesque.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <TestimonialBlog />
                            </div>
                        </div>
                    </div>
                </section>	
                {/* <!-- Blog --> */}
                <section className="content-inner-2" 
                    style={{backgroundImage: `url('${ThemeImage.BackBg1.src}')`, backgroundSize: "100%", 
                        backgroundPosition: "center", backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title">BLOG</h6>
                            <h2 className="title">LATEST BLOG & NEWS</h2>
                        </div>
                        <BlogSlider />
                    </div>
                </section>
                <section className="content-inner" 
                    style={{backgroundImage: `url('${ThemeImage.BackBg19.src}')`, 
                    backgroundSize:"100%", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}
                >
                    <div className="container">
                        <div className="row align-items-center" >
                            <div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                                <div className="section-head style-1">
                                    <h6 className="sub-title">CONTACT US</h6>
                                    <h2 className="title">GET IN TOUCH</h2>
                                </div>
                                <GetInTouch />
                            </div>
                            <div className="col-xl-6 col-lg-5 m-b30  wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                                <div className="dlab-media cf-r-img">	
                                    <Image src={ThemeImage.AboutPic2} className="move-1" alt="about"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
            </div>
            <Footer />                          
        </>
    )
}