import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostSidebar from "@/components/PostSidebar";
import PostSlider from "@/components/PostSlider";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";

export default function LargeRightSidebar(){
    return(
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <CommanTitle  bgimg={ThemeImage.BannerBg1} cappageTitle={"BLOG LARGE"} maintitle={"Home"} pagetitle={"Blog"} />
                <section className="content-inner bg-img-fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b50">
                                <div className="dlab-blog style-1 bg-white m-b50">
                                    <div className="dlab-info">
                                        <h4 className="dlab-title">
                                            <a href="blog-details-2.html">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend </a>
                                        </h4>
                                        <p className="m-b0">Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
                                        <div className="dlab-meta meta-bottom">
                                            <ul>
                                                <li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
                                                <li className="post-author"><i className="flaticon-user m-r10"></i>By <a href="javascript:void(0);"> Johne Doe</a></li>
                                                <li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>										
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="dlab-blog style-1 bg-white m-b50">
                                    <div className="dlab-media dlab-img-effect zoom">                                        
                                        <PostSlider />
                                    </div>
                                    <div className="dlab-info">
                                        <h4 className="dlab-title">
                                            <a href="blog-details-2.html">Quisque egestas iaculis felis eget placerat ut pulvinar mi elitauctor nec.</a>
                                        </h4>
                                        <p className="m-b0">Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
                                        <div className="dlab-meta meta-bottom">
                                            <ul>
                                                <li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
                                                <li className="post-author"><i className="flaticon-user m-r10"></i>By <Link href="#" scroll={false}> Johne Doe</Link></li>
                                                <li className="post-comment"><Link href="#" scroll={false}><i className="flaticon-speech-bubble"></i><span>15</span></Link></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="dlab-blog style-1 bg-white m-b50">
                                    <div className="dlab-media dlab-img-effect zoom post-video">
                                        <Link href="/blog-details-2">
                                            <Image src={ThemeImage.ThumbImg3} alt="" />
                                            <div className="post-video-icon fa fa-play"></div>
                                        </Link>
                                    </div>
                                    <div className="dlab-info">
                                        <h4 className="dlab-title">
                                            <Link href="/blog-details-2">Quisque sem tortor, convallis in arcu eu, accumsan finibus massa donec et sapien risus.</Link>
                                        </h4>
                                        <p className="m-b0">Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
                                        <div className="dlab-meta meta-bottom">
                                            <ul>
                                                <li className="post-date"><i className="flaticon-clock m-r10" />18 Sep, 2024</li>
                                                <li className="post-author"><i className="flaticon-user m-r10"/>By <Link href="#" scroll={false}> Johne Doe</Link></li>
                                                <li className="post-comment"><Link href="#" scroll={false}><i className="flaticon-speech-bubble"></i><span>15</span></Link></li> 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="dlab-blog style-1 post-quote bg-white m-b50">
                                    <div className="post-quote-icon">
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 298.667 298.667" 
                                            style={{enableBackground:"new 0 0 298.667 298.667"}} >
                                                <polygon points="0,170.667 64,170.667 21.333,256 85.333,256 128,170.667 128,42.667 0,42.667"/>
                                                <polygon points="170.667,42.667 170.667,170.667 234.667,170.667 192,256 256,256 298.667,170.667 298.667,42.667"
                                            />
                                        </svg>
                                    </div>
                                    <div className="dlab-info">
                                        <h4 className="dlab-title">
                                            <Link href="/blog-details-2">Quisque sem tortor, convallis in arcu eu, accumsan finibus massa donec et sapien risus.</Link>
                                        </h4>
                                    </div>
                                </div>
                                <nav aria-label="Blog Pagination">
                                    <ul className="pagination text-center p-t20">
                                        <li className="page-item"><Link className="page-link prev" href="#">Prev</Link></li>
                                        <li className="page-item"><Link className="page-link active" href="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link next" href="#">Next</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-xl-4 col-lg-4 m-b30">
                                <PostSidebar />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}