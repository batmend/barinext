import Link from "next/link";
import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostSidebar from "@/components/PostSidebar";
import { ThemeImage } from "@/data/ThemeImage";
import { CommentData, PostRelatedBlog } from "@/components/PostDetailBlog";
import Image from "next/image";

export default function PostPagination(){
    return(
        <>
            <Header headstyle={""}/>
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg1} cappageTitle={"PAGINATION"} maintitle={"Home"} pagetitle={"Post Pagination"} />
                <section className="content-inner bg-img-fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b50">                                
                                <div className="dlab-blog blog-single style-1 sidebar">                                    
                                    <div className="dlab-media rounded-md shadow">
                                        <Image src={ThemeImage.ThumbImg4} alt="" />
                                    </div>
                                    <div className="dlab-info">
                                        <div className="dlab-meta  border-0 py-0 mb-2">
                                            <ul className="border-0">
                                                <li className="post-date"><i className="flaticon-clock m-r10"/>10 Sep, 2024</li>
                                                <li className="post-author"><i className="flaticon-user m-r10"/>By <Link href="#"> Johne Doe</Link></li>
                                            </ul>
                                        </div>
                                        <h4 className="dlab-title">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis</h4>
                                        <div className="dlab-post-text text">
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus  orci ac condi mentum efficitur. Suspendi potenti. Fusce diam felis,  ullamcor aca felis sed, volutpat varius tortor. Ut eleifend justo sed  quam blandit, vehicula ante hendrerit. Sed condimentum libero vel eros  porta, eu malesuada nulla bibendum. Proin varius sollicitudin nulla quis  fermentum. Nunc vitae arcu eget diam gravida ultrices finibus nec mi.  Maecenas egestas libero. </p>
                                            <p>Donec ultricies convallis urna. Morbi consequat vestibulum nunc sed  semper. Proin iaculis risus eleifend, efficitur eros et, tristique  tortor. Integer nec lacinia augue. Curabitur mattis vel orci id mattis.  Aliquam eu dignissim sem. Interdum et malesuada fames ac ante ipsum  primis in faucibus. Mauris vitae fermentum quam. </p>
                                            <ul>
                                                <li>
                                                    <Link href="#" scroll={false}>Duis auctor sed elit quis consequat.</Link>
                                                    Fusce est quam, sodales vel eros vitae, dictum consectetur dolor. Fusce convallis mauris tellus, eu aliquet magna aliquet eget. 
                                                </li>
                                                <li>Nam iaculis,
                                                    <Link href="#" scroll={false}>enim ut elementum maximus, quam lectus convallis metus, </Link>
                                                    id suscipit risus lectus id urna. Cras viverra consectetur diam. Morbi sed consequat tellus, in vehicula urna. 
                                                </li>
                                                <li>
                                                    <Link href="#" scroll={false}>Morbi sit amet diam sodales, sodales purus quis, </Link>
                                                    feugiat turpis. Maecenas elementum mauris quis plac erat maximus. 
                                                    <Link href="#" scroll={false}>Curabitur elementum lobortis malesuada.</Link> 
                                                </li>
                                            </ul>
                                            <p>Aliquam laoreet fringilla velit, quis pulvinar ex bibendum vestibulum.  Aenean vel dapibus ex. Curabitur sodales dui ut hendrerit volutpat.  Phasellus fringilla semper urna, eu dapibus lacus porttitor at. Sed eget  pellentes orci. Aliquam pulvinar augue sed molestie semper. Integer  ullamcorper magna fringilla arcu rutrum, sed porttitor ex viverra. </p>
                                            <ul className="wp-block-gallery columns-3">
                                                <li className="blocks-gallery-item"><Image alt="blog2" src={ThemeImage.OurBlogPic2}/></li>
                                                <li className="blocks-gallery-item"><Image alt="blog1" src={ThemeImage.OurBlogPic1}/></li>
                                            </ul>
                                            <h4>Curabitur elementum lobortis malesuada. </h4>
                                            <p>Aliquam laoreet fringilla velit, quis pulvinar ex bibendum vestibulum.  Aenean vel dapibus ex. Curabitur sodales dui ut hendrerit volutpat.  Phasellus fringilla semper urna, eu dapibus lacus porttitor at. Sed eget  pellentes orci. Aliquam pulvinar augue sed molestie semper. Integer  ullamcorper magna fringilla arcu rutrum, sed porttitor ex viverra.  </p>
                                            <blockquote className="wp-block-quote is-style-default"><p>Use this static Page to test the Theme’s handling of the Blog Posts  Index page. If the site is set to display a static Page on the Front  Page, and this Page is. </p><cite>WordPress Community</cite></blockquote>
                                            <p>Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci  felis tincidunt tellus, at bibendum ex velit ac dolor. Aenean auctor,  lectus laoreet efficitur dapibus, orci nulla ultrices risus, sed  volutpat nisl nulla at felis. Integer ligula risus, ultricies eu velit  non, rutrum consectetur neque. Sed ullamcorper sed massa quis hendrerit.   </p>
                                            <p>Nulla ultrices diam at odio malesuada lacinia. Fusce eget posuere purus.  Donec accumsan vehicula mi, id imperdiet nulla ornare eu. Orci varius  natoque penatibus et magnis dis parturient montes, nascetur ridiculus  mus. </p>
                                            <p>Praesent vehicula neque et augue consectetur placerat. Ut pellentesque  euismod sapien eget venenatis. Proin massa lacus, dapibus a scelerisque  a, molestie sit amet mauris. Cras maximus lectus quis orci feugiat, at  tristique velit bibendum. Etiam augue arcu, cursus id egestas ut,  viverra at urna. Quisque ipsum sit amet aliquet tempus.  </p>
                                            <div className="clearfix"></div>
                                        </div>
                                        <nav aria-label="Blog Pagination">
                                            <ul className="pagination text-center p-t10 mb-5">
                                                <li className="page-item"><Link className="page-link prev" href="#" scroll={false}>Prev</Link></li>
                                                <li className="page-item"><Link className="page-link active" href="#" scroll={false}>1</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#" scroll={false}>2</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#" scroll={false}>3</Link></li>
                                                <li className="page-item"><Link className="page-link next" href="#" scroll={false}>Next</Link></li>
                                            </ul>
                                        </nav>
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
                                                    <li><Link className="fab fa-twitter" href="#" scroll={false}></Link></li>
                                                    <li><Link className="fab fa-linkedin-in" href="#" scroll={false}></Link></li>
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
            <Footer/>
        </>
    )
}