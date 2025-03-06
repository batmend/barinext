"use client"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ClientSlider from "@/components/ClientSlider";
import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostSlider from "@/components/PostSlider";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";

const CardDataBlog=({title})=>{
    return(
        <>            
            <div className="dlab-info">
                <h4 className="dlab-title"><Link href="/blog-details-2">{title}</Link></h4>
                <p className="m-b20">Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac aliquam. Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit.</p>
                <div className="dlab-meta mb-0">
                    <ul>
                        <li className="post-date">14 Sep 2024</li>
                        <li className="post-author"><i className="las la-user-circle"></i> By <Link href="#" scroll={false}>Johne Doe</Link></li>
                        <li className="post-comment"><i className="las la-comment"></i> <Link href="#" scroll={false}>Comments<span>15</span></Link></li>
                    </ul>
                </div>
            </div>                
        </>
    )
}

export default function BlogGrid(){
    return(
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <CommanTitle  bgimg={ThemeImage.BannerBg1} cappageTitle={"BLOG GRID"} maintitle={"Home"} pagetitle={"Blog"} />
                <section className="content-inner-2"   style={{backgroundImage: `url('${ThemeImage.BackBg2.src}')`, backgroundPosition: "center"}}>
                    <div className="container">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{360: 1, 767:2}}
                        >
                            <Masonry gutter="30px">
                                <div className="card-container">
                                    <div className="dlab-blog style-2 m-b50">
                                        <CardDataBlog title="Maecenas maximus augue eget libero dictum, vitae tempus erat pretium." /> 
                                    </div>
                                </div>
                                <div className="card-container">
                                    <div className="dlab-blog style-2 m-b50">
                                        <div className="dlab-media rounded-md">                                            
                                            <PostSlider />
                                        </div>
                                        <CardDataBlog title="How Construction Is Go To Change Your Business Strategies." />                                         
                                    </div>
                                </div>
                                <div className="card-container">
                                    <div className="dlab-blog style-2 m-b50">
                                        <div className="dlab-media rounded-md post-video">
                                            <Link href="/blog-details-2">
                                                <Image src={ThemeImage.BlogGrid3} alt=""/>
                                                <div className="post-video-icon fa fa-play"></div>
                                            </Link>
                                        </div>
                                        <CardDataBlog title="Now Is The Time About Construction For You To Know." />   
                                    </div>
                                </div>
                                <div className="card-container">
                                    <div className="dlab-blog style-2 post-quote m-b50">
                                        <div className="post-quote-icon">
                                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" 
                                                viewBox="0 0 298.667 298.667" style={{enableBackground:"new 0 0 298.667 298.667"}}>
                                                <polygon points="0,170.667 64,170.667 21.333,256 85.333,256 128,170.667 128,42.667 0,42.667"/>
                                                <polygon points="170.667,42.667 170.667,170.667 234.667,170.667 192,256 256,256 298.667,170.667 298.667,42.667"/>
                                            </svg>
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="dlab-title"><Link href="/blog-details-2">Maecenas maximus augue eget libero dictum, vitae tempus erat pretium.</Link></h4>
                                        </div>
                                    </div>
                                </div>   
                                <div className="card-container">
                                    <div className="dlab-blog style-2 m-b50">
                                        <div className="dlab-media rounded-md">
                                            <Link href="/blog-details-2"><Image src={ThemeImage.BlogGrid5} alt="card"/></Link>
                                        </div>
                                        <CardDataBlog title="Here's What People Are Saying About Our Business."/>
                                    </div>
                                </div>
                                <div className="card-container">
                                    <div className="dlab-blog style-2 m-b50">
                                        <div className="dlab-media rounded-md">
                                            <Link href="/blog-details-2"><Image src={ThemeImage.BlogGrid6} alt="card"/></Link>
                                        </div>
                                        <CardDataBlog title="Reasons Why You Shouldn’t Rely On Business Anymore." />                                        
                                    </div>
                                </div>                                    
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </section>
                <div className="content-inner-3 pt-3 pt-lg-5">
                    <ClientSlider />
                </div>
            </div>
            <Footer />
        </>
    )
}