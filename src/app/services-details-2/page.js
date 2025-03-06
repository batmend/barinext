"use client"
import Image from "next/image";
import ModalVideo from 'react-modal-video';
import { useState } from "react";
import Link from "next/link";
import ClientSlider from "@/components/ClientSlider";
import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TestimonialBlog from "@/components/TestimonialBlog";
// import { progressbar, serviceBlog } from "@/data/services";
import { ThemeImage } from "@/data/ThemeImage";
import { awesomeServices  } from "@/data/services";
import AwesomeServiceBlog from "@/components/AwesomeServiceBlog";

export default function ServiceDetail(){
    const [openModal, setOpenModal] = useState(false);
    const selectedServices = awesomeServices.filter(service => [1,2,3,4,5,6].includes(service.id));
    return(
        <>
            <Header headstyle={""}/>
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg1} cappageTitle={"SERVICES DETAILS 2"} maintitle={"Home"} pagetitle={"Services Details"} />
                <section className="content-inner-2" style={{backgroundImage: `url('${ThemeImage.BackBg1.src}')`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="dlab-media m-b30 rounded-md">
                                    <Image src={ThemeImage.ThumbImg1} alt="" />
                                </div>
                                <div className="dlab-content">
                                    <div className="m-b40">
                                        <h3>Web Development</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h3>How You Start Web Development ?</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                            <ul className="list-arrow primary m-b30">
                                                <li>Lorem Ipsum is simply dummy text of the printing.</li>
                                                <li>Lorem Ipsum has been the industry's standard dummy text ever.</li>
                                                <li>when an unknown printer took a galley of type and scrambled.</li>
                                                <li>It has survived not only five centuries, but also the leap.</li>
                                                <li>Recently with desktop publishing software like Aldus PageMaker.</li>
                                                <li>Lorem Ipsum is simply dummy text of the printing industry.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="video-bx style-3">
                                                <Image src={ThemeImage.VideoPic3} alt="video" />
                                                <div className="video-btn">
                                                    <Link href="#"  
                                                        scroll={false}
                                                        onClick={() => setOpenModal(true)} 
                                                        className="popup-youtube"
                                                    >
                                                       <i className="flaticon-play"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
            </div>
            <ModalVideo
				channel="youtube"
				youtube={{ mute: 1, autoplay: 1 }}
				isOpen={openModal}
				videoId="zjzl_z0vX1M"
				onClose={() => setOpenModal(false)} 
			/>
            <Footer />
        </>
    )
}