import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CommentData,   PostRelatedBlog } from "@/components/PostDetailBlog";
import PostSidebar from "@/components/PostSidebar";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails(){
    return(
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg2}cappageTitle={"BLOG DETAILS"}  maintitle={"Home"} pagetitle={"Blog Detail 2"} />
                <section className="content-inner bg-img-fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b50">
                                <div className="dlab-blog blog-single style-1">
                                    <div className="dlab-media rounded-md shadow">
                                        <Image src={ThemeImage.ThumbImg1} alt="thumb" />
                                    </div>
                                    <div className="dlab-info">
                                        <div className="dlab-meta  border-0 py-0 mb-2">
                                            <ul className="border-0 pt-0">
                                                <li className="post-date"><i className="flaticon-clock m-r10" />07 Sep, 2024</li>
                                                <li className="post-author"><i className="flaticon-user m-r10" />By <Link href="#" scroll={false}> Johne Doe</Link></li>
                                            </ul>
                                        </div>
                                        <h4 className="dlab-title">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis</h4>
                                        <div className="dlab-post-text">
                                            <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
                                            <p>Ut non nisl et magna molestie tincidunt. Aliquam erat volutpat. Vivamus eget feugiat odio. Vivamus faucibus lorem nec mollis placerat. Nulla et dapibus est. Fusce porttitor arcu ac velit commodo hendrerit. Vestibulum tempor dapibus sapien. Maecenas accumsan rhoncus massa, nec ornare libero faucibus tincidunt. Cras metus tortor, pretium vitae scelerisque id, sollicitudin at est.</p>
                                            <blockquote className="wp-block-quote is-style-default"><p>Use this static Page to test the Theme’s handling of the Blog Posts  Index page. If the site is set to display a static Page on the Front  Page, and this Page is. </p><cite>WordPress Community</cite></blockquote>
                                            <p>Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Morbi ac hendrerit nisl. Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. </p>
                                            <h4 className="m-b30">Donec sit amet semper massa ellentesque habitant morbi</h4>
                                            <Image className="alignleft rounded-md w-50" src={ThemeImage.BlogPicJpg} alt="" />
                                            <p>Pellentesque quis molestie lacus. Sed et pellentesque nibh. Pellentesque pretium pretium neque, vel fermentum nisl ornare non. Aliquam interdum rutrum magna quis.</p>
                                            <p>Donec pretium, quam a aliquet pretium, dolor magna malesuada libero, non rhoncus quam lectus at lectus. Mauris id consequat est, ut aliquet lorem. Maecenas mi sem, aliquam et semper et, sagittis non magna. Vivamus et maximus nulla. Morbi tincidunt ex ac diam imperdiet, ut pretium justo porttitor. Class aptent taciti sociosqu ad litora</p>
                                            <p>Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada. Curabitur venenatis venenatis elementum.</p>
                                        </div>
                                        <div className="dlab-meta meta-bottom border-top">
                                            <div className="post-tags">
                                                    <strong>Tags:</strong>
                                                    <Link href="#" scroll={false}>Child</Link>,
                                                    <Link href="#" scroll={false}>Eduction</Link>,
                                                    <Link href="#" scroll={false}>Money</Link>,
                                                    <Link href="#" scroll={false}>Resturent</Link>
                                                </div>
                                            <div className="dlab-social-icon primary-light">
                                                <ul>
                                                    <li><Link className="fab fa-facebook-f" href="https://www.facebook.com/"  target="_blank"></Link></li>
                                                    <li><Link className="fab fa-instagram" href="https://www.instagram.com/"  target="_blank"></Link></li>
                                                    <li><Link className="fab fa-twitter" href="https://www.twitter.com/"  target="_blank"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
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