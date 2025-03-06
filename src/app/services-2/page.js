"use client"
import AwesomeServiceBlog from "@/components/AwesomeServiceBlog";
import ClientSlider from "@/components/ClientSlider";
import CommanTitle from "@/components/CommanTitle";
import FeatureBlog from "@/components/FeatureBlog";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Newslatter from "@/components/Newslatter";
import TeamSlider from "@/components/TeamSlider";
import TestimonialBlog from "@/components/TestimonialBlog";
import { awesomeServices} from "@/data/services";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";

export default function Services(){
    const selectedServices = awesomeServices.filter(service => [1,2,3,4,5,6].includes(service.id));
    return(
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg1} cappageTitle={"OUR SERVICES"} maintitle={"Home"} pagetitle={"Services"} />
                <section className="content-inner" style={{backgroundImage: `url('${ThemeImage.BackBg1.src}')`}}>
                    <div className="container">
                        <div className="row">                            
                            {selectedServices.map((service)=>(
                                <div className="col-lg-4 col-md-6">
                                    <AwesomeServiceBlog cardStyle= {service.cardStyle} iconName={service.iconName}  title={service.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="content-inner-3 bg-primary" 
                    style={{backgroundImage: `url('${ThemeImage.BackBg13.src}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
                >
                   <Newslatter />
                </section>
                <section className="content-inner">
                    <div className="container">
                        <FeatureBlog />
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
                <section className="content-inner-2 bg-white" 
                    style={{backgroundImage: `url('${ThemeImage.BackBg19.src}')`, backgroundSize:"100%", 
                    backgroundPosition:"center", backgroundRepeat:"no-repeat"}}
                >
                    <div className="container">                       
                        <div className="row testimonials-wraper-1 align-items-center">
                            <div className="col-lg-6" >
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
            <Footer />
        </>
    )
}