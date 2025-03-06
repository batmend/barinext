import Link from "next/link";
import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CommentData, PostDetailBlog, 
PostRelatedBlog } from "@/components/PostDetailBlog";
import PostSlider from "@/components/PostSlider";
import { ThemeImage } from "@/data/ThemeImage";

export default function PostSideShow(){
    return(
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg1} cappageTitle={"SLIDE SHOW"} maintitle={"Home"} pagetitle={"Post Side Show"} />
                <section className="content-inner bg-img-fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="dlab-blog blog-single post-header rounded-md shadow">                                   
                                    <PostSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-container">	
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 m-b50">                                
                                <div className="dlab-blog blog-single style-1">
                                    <div className="dlab-info">
                                        <div className="dlab-meta  border-0 py-0 mb-2">
                                            <ul className="border-0">
                                                <li className="post-date"><i className="flaticon-clock m-r10"/>30 Aug, 2024</li>
                                                <li className="post-author"><i className="flaticon-user m-r10"/>By <Link href="#" scroll={false}> Johne Doe</Link></li>
                                            </ul>
                                        </div>
                                        <h4 className="dlab-title mb-0">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis</h4>
                                        <PostDetailBlog />
                                    </div>
                                </div>
                                <PostRelatedBlog />
                                <CommentData />                                       
                            </div>
                        </div>
                    </div>
                </section>                   
            </div>
            <Footer />
        </>
    )
}