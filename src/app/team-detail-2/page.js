"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { progressbar } from "@/data/services";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from "next/link";

const TeamDetail = () => {
    return (
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr dlab-bnr-inr-md dlab-white-bottom overlay-primary-dark"
                    style={{ backgroundImage: `url('${ThemeImage.BannerBg4.src}')` }}
                >
                    <div className="container d-flex justify-content-center">
                        <div className="dlab-bnr-inr-entry d-flex justify-content-center">
                            <div className="team-mamber-info">
                                <div className="dz-media">
                                    <Image src={ThemeImage.TeamdetailPic1} alt="team" />
                                </div>
                                <div className="dz-info">
                                    <h3 className="title text-nowrap">PAMELA KEY</h3>
                                    <span>info@example.com</span>
                                    <ul className="dlab-social-icon">
                                        <li><a className="fab fa-facebook-f" href="https://www.facebook.com/" target="_blank"></a></li>
                                        <li><a className="fab fa-instagram" href="https://www.instagram.com/" target="_blank"></a></li>
                                        <li><a className="fab fa-twitter" href="https://www.twitter.com/" target="_blank"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-md-12">
                                <h4 className="title m-b20">OUR PORTFOLIO</h4>
                                <LightGallery                                    
                                    speed={500}
                                    selector={'.lightimg'}                                    
                                    plugins={[lgThumbnail, lgZoom]}
                                >
                                    <ul className="row lightgallery">
                                        <li className="card-container col-lg-8 col-md-8 web_development seo mobile_app">
                                            <div className="dlab-box blurr rotate dlab-overlay-box style-3 m-b30">
                                                <div className="dlab-media dlab-img-overlay1">
                                                    <Image src={ThemeImage.PorjectPic1} alt="pic1" />
                                                </div>
                                                <div className="dlab-info">
                                                    <h5 className="title">
                                                        <Link href="/services-details-2">Web Development </Link>
                                                    </h5>
                                                    <p className="post-author mb-3">Web, Design, Development</p>
                                                    <span className="btn btn-primary gradient rounded-btn lightimg" 
                                                        data-exthumbimage="https://www.youtube.com/watch?v=z4nO6NuEM3A" 
                                                        data-src="https://www.youtube.com/watch?v=z4nO6NuEM3A" 
                                                        title="Design"
                                                    >
                                                        <i className="la la-play"/>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="card-container col-lg-4 col-md-4 web_development seo">
                                            <div className="dlab-box blurr rotate dlab-overlay-box style-3 m-b30">
                                                <div className="dlab-media dlab-img-overlay1">
                                                    <Image src={ThemeImage.PorjectPic2} alt="pic2" />
                                                </div>
                                                <div className="dlab-info">
                                                    <h5 className="title"><Link href="/services-details-2">Software</Link></h5>
                                                    <p className="post-author mb-3">Web, Design, Development</p>
                                                    <span className="btn btn-primary gradient rounded-btn lightimg" 
                                                        data-exthumbimage="https://www.youtube.com/watch?v=XzK7984oUbc" 
                                                        data-src="https://www.youtube.com/watch?v=XzK7984oUbc" title="Design"
                                                    >
                                                        <i className="la la-play"/>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="card-container col-lg-4 col-md-4 web_design branding mobile_app">
                                            <div className="dlab-box blurr rotate dlab-overlay-box style-3 m-b30">
                                                <div className="dlab-media dlab-img-overlay1">
                                                    <Image src={ThemeImage.PorjectPic3} alt="pic3" />
                                                </div>
                                                <div className="dlab-info">
                                                    <h5 className="title"><Link href="/services-details-2">Software Landing Page Design</Link></h5>
                                                    <p className="post-author mb-3">Web, Design, Development</p>
                                                    <span className="btn btn-primary gradient rounded-btn lightimg" 
                                                        data-exthumbimage="https://www.youtube.com/watch?v=q0lQNsc56r8" 
                                                        data-src="https://www.youtube.com/watch?v=q0lQNsc56r8" title="Design"
                                                    >
                                                        <i className="la la-play"/>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="card-container col-lg-8 col-md-8 web_development web_design">
                                            <div className="dlab-box blurr rotate dlab-overlay-box style-3 m-b30">
                                                <div className="dlab-media dlab-img-overlay1">
                                                    <Image src={ThemeImage.PorjectPic4} alt="pic4" />
                                                </div>
                                                <div className="dlab-info">
                                                    <h5 className="title"><Link href="/services-details-2">Software Landing Page Design</Link></h5>
                                                    <p className="post-author mb-3">Web, Design, Development</p>
                                                    <span className="btn btn-primary gradient rounded-btn lightimg" 
                                                        data-exthumbimage="https://www.youtube.com/watch?v=zwUsFN__jtE" 
                                                        data-src="https://www.youtube.com/watch?v=zwUsFN__jtE" 
                                                        title="Design"
                                                    >
                                                        <i className="la la-play"/>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </LightGallery>
                            </div>
                            <div className="col-xl-4 col-md-12">
                                <div className="mb-5">
                                    <h4 className="title m-b20">ABOUT ME</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden..</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="title m-b20">OUR SKILLS</h4>
                                    {progressbar.map((item, ind)=>(
                                        <div className="progress-bx overflow-hidden mb-3" key={ind}>
                                            <div className="progress-info">
                                                <span className="title">{item.title}</span>
                                                <span className="progress-value">{item.value}</span>
                                            </div>
                                            <div className="progress mb-3">
                                                <div className="progress-bar"  style={{width: item.value }}></div>
                                            </div>
                                        </div>
                                    ))}                                   
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
export default TeamDetail;