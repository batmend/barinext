import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CommentData, PostDetailBlog, PostRelatedBlog } from "@/components/PostDetailBlog";
import PostSidebar from "@/components/PostSidebar";
import PostSlider from "@/components/PostSlider";
import { ThemeImage } from "@/data/ThemeImage";
import Link from "next/link";

export default function PostGallery(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg1} cappageTitle={"GALLERY"} maintitle={"Home"} pagetitle={"Post Gallery"}/>
                <section className="content-inner bg-img-fix">
                    <div className="container">	
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b50">
                                <div className="dlab-blog blog-single style-1 sidebar">
                                    <PostSlider />
                                    <div className="dlab-info">
                                        <div className="dlab-meta  border-0 py-0 mb-2">
                                            <ul className="border-0">
                                                <li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
                                                <li className="post-author"><i className="flaticon-user m-r10"></i>By <Link href="#"> Johne Doe</Link></li>
                                            </ul>
                                        </div>
                                        <h4 className="dlab-title">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis</h4>
                                        <PostDetailBlog />
                                    </div>
                                </div>
                                <PostRelatedBlog />
                                <div className="clear" id="comment-list">
                                    <CommentData />
                                </div>
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