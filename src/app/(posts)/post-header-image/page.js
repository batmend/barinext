import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CommentData, PostDetailBlog, PostRelatedBlog } from "@/components/PostDetailBlog";
import PostSidebar from "@/components/PostSidebar";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";

export default function PostHeaderImage(){
    return(
        <>
            <Header  headstyle={""}/>
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg1} cappageTitle={"HEADER IMAGE"} maintitle={"Home"} pagetitle={"Post Header Image"} />
                <section className="content-inner bg-img-fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="dlab-blog blog-single post-header rounded-md shadow">
                                    <div className="dlab-media ">
                                        <Image src={ThemeImage.ThumbImg1} alt="" />
                                    </div>
                                    <div className="dlab-info">
                                        <div className="dlab-meta  border-0 py-0 mb-2">
                                            <ul className="border-0">
                                                <li className="post-date"><i className="flaticon-clock m-r10"></i>11 Sep, 2024</li>
                                                <li className="post-author"><i className="flaticon-user m-r10"></i>By <Link href="#" scroll={false}> Johne Doe</Link></li>
                                            </ul>
                                        </div>
                                        <h4 className="dlab-title mb-0">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
					        <div className="col-xl-8 col-lg-8 m-b50">
                                <div className="dlab-blog blog-single style-1 sidebar">
                                    <div className="dlab-info">
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
            <Footer />
        </>
    )
}