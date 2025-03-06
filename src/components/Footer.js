import { ThemeImage } from "@/data/ThemeImage";
import Link from "next/link";
import Image from "next/image";
import { footerlist } from "@/data/menulist";

export default function Footer(){
    let year = new Date().getFullYear();
    return(
        <>
            <section className="overlay-secondary-middle bg-img-fix" style={{backgroundImage: `url('${ThemeImage.SiteImageBg5.src}')`, backgroundSize: "cover"}}>
                <div className="container">
                    <div className="row action-box style-1  align-items-center">
                        <div className="col-xl-9 col-lg-8 col-md-8" >
                            <h2 className="title text-white my-2">YOU WANT TO SHOWCASE YOUR WEBSITE</h2>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 text-end">
                            <Link href="/contact-us-2" className="btn btn-primary">Join Now <i className="fa fa-angle-right m-l10" /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="site-footer style-1" id="footer" style={{backgroundImage: `url('${ThemeImage.SiteImageBg10.src}')`}}>                
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-md-4">
                                    <div className="footer-logo">
                                        <Link href="/"><Image src={ThemeImage.logowhitePng} alt="foter_logo"/></Link> 
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="icon-bx-wraper left m-b10">
                                        <div className="icon-lg"> 
                                            <Link href="#" scroll={false} className="icon-cell">
                                                <i className="flaticon-email"/>
                                            </Link> 
                                        </div>
                                        <div className="icon-content">
                                        <p><strong>+91 987-654-3210</strong><br/>info@example.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 col-sm-6">
                                    <div className="icon-bx-wraper left m-b10">
                                        <div className="icon-lg"> 
                                            <Link href="#" scroll={false} className="icon-cell">
                                                <i className="flaticon-location"/>
                                            </Link> 
                                        </div>
                                        <div className="icon-content">
                                            <p>1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-sm-6  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                <div className="widget widget_about">
                                    <h5 className="footer-title">ABOUT US</h5>
                                    <p>Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.</p>
                                    <div className="dlab-social-icon">
                                        <ul>
                                            <li><Link className="fab fa-facebook-f" href="https://www.facebook.com/"></Link></li>{" "}
                                            <li><Link className="fab fa-instagram" href="https://www.instagram.com/"></Link></li>{" "}
                                            <li><Link className="fab fa-twitter" href="https://www.twitter.com/"></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {footerlist.map((item, ind)=>(
                                <div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" key={ind} data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div className="widget widget_services">
                                        <h5 className="footer-title">{item.title}</h5>
                                        <ul>
                                            {item.subtitle && item.subtitle.map((elem, index)=>(
                                                <li key={index}><Link href={elem.url} scroll={false}>{elem.name}</Link></li>
                                            ))}                                        
                                        </ul>
                                    </div>
                                </div>
                            ))}                        
                        </div>
                    </div>
                </div>            
                <div className="footer-bottom wow fadeIn"  data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center"> 
                                <span className="copyright-text">Copyright © {year} <a href="https://dexignzone.com/" target="_blank">DexignZone</a>. All rights reserved.</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}