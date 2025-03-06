"use client"
import { useState } from "react";
import CommanTitle from "@/components/CommanTitle";
import Header from "@/components/Header";
import { ThemeImage } from "@/data/ThemeImage";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import ModalVideo from 'react-modal-video';

export default function CompanyHistory(){
    const [openModal, setOpenModal] = useState(false);
    return(
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg4} cappageTitle={"HISTORY"} maintitle={"Home"} pagetitle={"Company History"} />
                <section className="content-inner-2"> 
                    <div className="container">
                        <div className="text-center time-line-start">
                            <Image src={ThemeImage.StartUpImg} alt="" className="fa faa-horizontal animated"/>
                        </div>
                        <div className="time-line clearfix">
                            <div className="line-left clearfix">
                                <div className="line-left-box">
                                    <div className="line-content-box" >
                                        <h4 className="title">Project Analysis</h4>
                                        <p>We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                                        <ul className="list-check primary m-b0">
                                            <li>We support programs that create.</li>
                                            <li>Get a view of events and trends.</li>
                                            <li>Finally, it all comes down to people.</li>
                                        </ul>
                                    </div>	
                                    <div className="line-num gradient">1</div>
                                </div>
                            </div>
                            <div className="line-right clearfix">
                                <div className="line-right-box">
                                    <div className="line-content-box wow fadeInRight" data-wow-duration="1.80s" data-wow-delay="0.50s">
                                        <h4 className="title">Project Kick Off Meetings</h4>
                                        <p>Proin laoreet leo vel enim gravida, at porttitor metus ultricies. Cras eu velit enim. Vivamus blandit, dolor ut aliquet rutrum, ex elit mattis sapien, non molestie felis neque et nulla.</p>
                                        <p className="m-b0">Sed euismod turpis id nibh suscipit semper. Pellentesque dapibus risus arcu.</p>
                                    </div>	
                                    <div className="line-num gradient">2</div>
                                </div>
                            </div>
                            <div className="line-left clearfix">
                                <div className="line-left-box">
                                    <div className="line-content-box" >
                                        <h4 className="title">Clear, Correct & Concise Information</h4>
                                        <p>We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                                        <Image className="rounded-sm" src={ThemeImage.ThumbImg1} alt="thumb1" />
                                    </div>		
                                    <div className="line-num gradient">3</div>
                                </div>
                            </div>
                            <div className="line-right clearfix">
                                <div className="line-right-box">
                                    <div className="line-content-box" >
                                        <h4 className="title">Single Point of Contact</h4>
                                        <p>We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                                        <div className="video-bx style-3">
                                            <Image src={ThemeImage.ThumbImg2} alt="thumb2" />
                                            <div className="video-btn">
                                                <Link href="#" scroll={false} className="popup-youtube"
                                                    onClick={() => setOpenModal(true)}
                                                >
                                                    <i className="flaticon-play" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>		
                                    <div className="line-num gradient">4</div>
                                </div>
                            </div>
                            <div className="line-left clearfix">
                                <div className="line-left-box">
                                    <div className="line-content-box" >
                                        <h4 className="title">Project Workflow Accessibility</h4>
                                        <p className="m-b30">We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-6">
                                                <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                                    <div className="icon-bx-sm bg-white"> 
                                                        <Link href={"#"} className="icon-cell text-primary">
                                                            <i className="flaticon-chat"/>
                                                        </Link>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dlab-title m-b10">Online Support</h5>
                                                        <p>Quisque efficitur consequat turpis, eget consequat risus ligula.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="icon-bx-wraper style-6 left p-0 m-b0 icon-up">
                                                    <div className="icon-bx-sm bg-white"> 
                                                        <Link href={"#"} className="icon-cell text-primary">
                                                            <i className="flaticon-bullhorn"/>
                                                        </Link> 
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dlab-title m-b10">Worldwide Marketing</h5>
                                                        <p>Quisque efficitur consequat turpis, eget consequat risus ligula.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                    <div className="line-num gradient">5</div>
                                </div>
                            </div>
                            <div className="line-right clearfix">
                                <div className="line-right-box">
                                    <div className="line-content-box wow fadeInRight" data-wow-duration="1.80s" data-wow-delay="0.75s">
                                        <h4 className="title">Privacy & Security</h4>
                                        <p className="m-b30">We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                                        <div className="progress-bx overflow-hidden mb-2">
                                            <div className="progress-info">
                                                <span className="title">SEO</span>
                                                <span className="progress-value">80%</span>
                                            </div>
                                            <div className="progress mb-3">
                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{width: "80%"}}></div>
                                            </div>
                                        </div>
                                        <div className="progress-bx overflow-hidden mb-0">
                                            <div className="progress-info">
                                                <span className="title">Designing</span>
                                                <span className="progress-value">90%</span>
                                            </div>
                                            <div className="progress mb-3">
                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{width: "90%"}}></div>
                                            </div>
                                        </div>
                                    </div>		
                                    <div className="line-num gradient">6</div>
                                </div>
                            </div>
                            <div className="line-left clearfix">
                                <div className="line-left-box">
                                    <div className="line-content-box wow fadeInLeft" data-wow-duration="1.80s" data-wow-delay="0.25s">
                                        <h4 className="title">Proactive & Upfront</h4>
                                        <p className="m-b0">We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                                    </div>	
                                    <div className="line-num gradient">7</div>
                                </div>
                            </div>
                            <div className="line-right clearfix">
                                <div className="line-right-box">
                                    <div className="line-content-box wow fadeInRight" data-wow-duration="1.80s" data-wow-delay="0.75s">
                                        <h4 className="title">Complete Documentation</h4>
                                        <p className="m-b0">We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                                    </div>		
                                    <div className="line-num gradient">8</div>
                                </div>
                            </div>
                            <div className="line-left clearfix">
                                <div className="line-left-box">
                                    <div className="line-content-box wow fadeInLeft" data-wow-duration="1.80s" data-wow-delay="1s">
                                        <h4 className="title">Status Reports</h4>
                                        <p className="m-b0">We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                                    </div>		
                                    <div className="line-num gradient">9</div>
                                </div>
                            </div>
                            <div className="line-right clearfix">
                                <div className="line-right-box">
                                    <div className="line-content-box wow fadeInRight" data-wow-duration="1.80s" data-wow-delay="0.75s">
                                        <h4 className="title">Respect & Flexibility</h4>
                                        <p className="m-b0">We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                                    </div>		
                                    <div className="line-num gradient">10</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center time-line-end">
                            <Image src={ThemeImage.TheEnd} alt="end" />
                        </div>
                    </div>
                </section>
                <div className="content-inner-3"></div>
            </div>
            <Footer />
            <ModalVideo
				channel="youtube"
				youtube={{ mute: 1, autoplay: 1 }}
				isOpen={openModal}
				videoId="zjzl_z0vX1M"
				onClose={() => setOpenModal(false)} 
			/>
        </>
    )
}