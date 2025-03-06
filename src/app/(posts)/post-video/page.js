import Link from "next/link";
import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostSidebar from "@/components/PostSidebar";
import { ThemeImage } from "@/data/ThemeImage";
import { CommentData, PostDetailBlog, PostRelatedBlog } from "@/components/PostDetailBlog";

export default function PostVideo(){
    return(
        <>
            <Header headstyle={""}/>
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg1} cappageTitle={"POST VIDEO"} maintitle={"Home"} pagetitle={"Post Video"} />
                <section className="content-inner bg-img-fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b50">                                
                                <div className="dlab-blog blog-single style-1 sidebar">                                    
                                    <div className="dlab-media rounded-md shadow post-video">
                                        <iframe src="https://www.youtube.com/embed/pyRjzvdOSHk" 
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                            allowfullscreen style={{width: "100%", verticalAlign: "middle"}}>                                                
                                        </iframe>
                                    </div>                                    
                                    <div className="dlab-info">
                                        <div className="dlab-meta  border-0 py-0 mb-2">
                                            <ul className="border-0">
                                                <li className="post-date"><i className="flaticon-clock m-r10"/>7 Sep, 2024</li>
                                                <li className="post-author"><i className="flaticon-user m-r10"/>By <Link href="#"> Johne Doe</Link></li>
                                            </ul>
                                        </div>
                                        <h4 className="dlab-title">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis</h4>
                                        <PostDetailBlog />
                                    </div>
                                </div>
                                <PostRelatedBlog />
                                <CommentData />
                            </div>
                            <div className="col-xl-4 col-lg-4 m-b30">
                                <PostSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}