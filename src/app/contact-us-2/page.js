"use client"
import { useRef } from "react";
import Link from "next/link";
import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";

export default  function ContactUs(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();        
        emailjs
        .sendForm(
            "service_gfykn6i",
            "template_iy1pb0b",
            e.target,
            "HccoOtZS6GHw-N-m6"
        )
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();        
        Swal.fire({
            title: "Good job!",
            text: "form successfuly submmited",
            icon: "success"
        });
    };
    return(
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <CommanTitle  bgimg={ThemeImage.BannerBg1} cappageTitle={"GET A QUOTE"} maintitle={"Home"} pagetitle={"Get A Quote"} />
                <div className="content-inner-2">
                    <div className="container">
                        <div className="row m-t30">
                            <div className="col-lg-4 col-md-6">
                                <div className="icon-bx-wraper style-9 m-md-b40">
                                    <div className="icon-bx-sm radius bg-primary"> 
                                        <Link href="#" scroll={false} className="icon-cell">
                                            <i className="las la-phone-volume"/>
                                        </Link> 
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">Call Now</h4>
                                        <p>123 456 7890</p>
                                        <p>987 654 3210</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="icon-bx-wraper style-9 m-md-b40 m-sm-t30">
                                    <div className="icon-bx-sm radius bg-primary"> 
                                        <Link href="#" scroll={false} className="icon-cell">
                                            <i className="las la-map-marker"/>
                                        </Link> 
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">Location</h4>
                                        <p>1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="icon-bx-wraper style-9 m-md-t30">
                                    <div className="icon-bx-sm radius bg-primary"> 
                                        <Link href="#" scroll={false} className="icon-cell">
                                            <i className="las la-envelope-open"/>
                                        </Link> 
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">Email Now</h4>
                                        <p>info@gmail.com</p>
                                        <p>Services@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="content-inner" style={{backgroundImage: `url('${ThemeImage.BackBg1.src}')`}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-7 m-b30">
                                <div className="section-head style-1">
                                    <h6 className="sub-title">CONTACT US</h6>
                                    <h2 className="title">GET IN TOUCH</h2>
                                </div>
                                <form className="dlab-form dzForm" ref={form} onSubmit={sendEmail}>
                                    <div className="dzFormMsg"></div>
                                    <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                    <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="la la-user"></i></span>
                                                </div>
                                                <input name="dzFirstName" type="text" required className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="la la-user"></i></span>
                                                </div>
                                                <input name="dzLastName" type="text" className="form-control" required placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="la la-envelope"></i></span>
                                                </div>
                                                <input name="dzEmail" type="text" required className="form-control" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="la la-phone"></i></span>
                                                </div>
                                                <input name="dzPhoneNumber" type="text" required className="form-control" placeholder="Phone No."/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="la la-file-alt"></i></span>
                                                </div>
                                                <input name="dzOther[project_title]" type="text" className="form-control" required placeholder="Project Title"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="la la-list"></i></span>
                                                </div>
                                                <select name="dzOther[choose_service]" className="form-control">
                                                    <option selected>Choose Service</option>
                                                    <option value="1">Web Development</option>
                                                    <option value="2">Web Design</option>
                                                    <option value="3">Strategy & Research</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 m-b20">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="la la-sms"></i></span>
                                                </div>
                                                <textarea name="dzMessage" required className="form-control" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button name="submit" type="submit" value="Submit" className="btn btn-primary">Submit Now<i className="fa fa-angle-right m-l10"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                            <div className="col-xl-6 col-lg-5 m-b30" >
                                <div className="dlab-media cf-r-img">	
                                    <Image src={ThemeImage.AboutImage2} className="move-4" alt="about" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14448.884443175983!2d75.81853095!3d25.128214449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1615281171136!5m2!1sen!2sin" 
                    height="550" style={{border:"0", width:"100%", verticalAlign: "middle"}} allowFullScreen="" loading="lazy">                        
                </iframe>
            </div>
            <Footer />
        </>
    )
} 