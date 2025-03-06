import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CommentData, PostRelatedBlog } from "@/components/PostDetailBlog";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";

export default function PostOpenGutenberg(){
    return(
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg1} cappageTitle={"OPEN GUTENBERG"} maintitle={"Home"} pagetitle={"Post Open Gutenberg"}/>
                <section className="content-inner bg-img-fix overflow-hidden">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="dlab-blog blog-single post-header rounded-md shadow">
                                    <div className="dlab-media ">
                                        <Image className="rounded-sm" src={ThemeImage.BackJpg8} alt="" />
                                    </div>
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
                                                <li className="post-date"><i className="flaticon-clock m-r10"></i>12 Sep, 2024</li>
                                                <li className="post-author"><i className="flaticon-user m-r10"></i>By <Link href="#" scroll={false}> Johne Doe</Link></li>
                                            </ul>
                                        </div>
                                        <h4 className="dlab-title mb-0">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis</h4>
                                        <div className="dlab-post-text text pt-0">
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus  orci ac condi mentum efficitur. Suspendi potenti. Fusce diam felis,  ullamcor aca felis sed, volutpat varius tortor. Ut eleifend justo sed  quam blandit, vehicula ante hendrerit. Sed condimentum libero vel eros  porta, eu malesuada nulla bibendum. Proin varius sollicitudin nulla quis  fermentum. Nunc vitae arcu eget diam gravida ultrices finibus nec mi.  Maecenas egestas libero. </p>
                                            <p>Donec ultricies convallis urna. Morbi consequat vestibulum nunc sed  semper. Proin iaculis risus eleifend, efficitur eros et, tristique  tortor. Integer nec lacinia augue. Curabitur mattis vel orci id mattis.  Aliquam eu dignissim sem. Interdum et malesuada fames ac ante ipsum  primis in faucibus. Mauris vitae fermentum quam. </p>
                                            <p>Aliquam eu dignissim sem. Interdum et malesuada fames ac ante ipsum   primis in faucibus. Mauris vitae fermentum quam. Aliquam laoreet   fringilla velit, quis pulvinar ex bibendum vestibulum. Aenean vel   dapibus ex. Curabitur sodales dui ut hendrerit volutpat. Phasellus   fringilla semper urnator at.   </p>
                                            <ul className="wp-block-gallery columns-3">
                                                <li className="blocks-gallery-item"><Image alt="blog" src={ThemeImage.OurBlogPic2}/></li>
                                                <li className="blocks-gallery-item"><Image alt="our-blog" src={ThemeImage.OurBlogPic1}/></li>
                                            </ul>
                                            <p>Aliquam laoreet fringilla velit, quis pulvinar ex bibendum vestibulum.  Aenean dapibus ex. Curabitur sodales dui ut hendrerit volutpat.  Phasellus fringilla semper rneu dapibus lacus porttitor at. Sed eget  pellentes orci. Aliquam pulvinar augue sed molestie semper. Integer  ullamcorper magna viverra.  </p>
                                            <h4>Curabitur elementum lobortis malesuada. </h4>
                                            <p>Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci  felis tincidunt tellus, bibendum ex velit ac dolor. Aenean auctor,  lectus laoreet efficitur dapibus, orci nulla ultrices risus, sed  volutpat nisl nulla at felis. Integer ligula risus, ultricies eu velit  non, rutrum conse ctetur neque. </p>
                                            <ul>
                                                <li> import images, multimedia and approved files from the media library or add HTML shortcodes;</li><li> copy and paste links for embeds;</li>
                                                <li> write shortcodes for specialized assets of different plugins;</li><li> create featured images to be added at the top of a post or page; </li>
                                            </ul>
                                            <p>Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci  felis tincidunt tellus, bibendum ex velit ac dolor. Aenean auctor,  lectus laoreet efficitur dapibus, orci nulla ultrices risus, sed  volutpat nisl nulla at felis. Integer ligula risus, ultricies eu velit  non, rutrum conse ctetur neque. </p>
                                            <p>Nulla ultrices diam at odio malesuada lacinia. Fusce eget posuere purus.  Donec accumsan vehicula id imperdiet nulla ornare eu. Orci varius  natoque penatibus et magnis dis parturient montes ulus mus. </p>
                                            <blockquote className="wp-block-quote"><p>Use this static Page to test the Theme’s handling of the Blog Posts Index page. If the site is set to display a static Page on the Front Page, and this Page is. </p><cite>WordPress Community</cite></blockquote>
                                            <p>Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci  felis tincidunt tellus, bibendum ex velit ac dolor. Aenean auctor,  lectus laoreet efficitur dapibus, orci nulla ultrices risus, sed  volutpat nisl nulla at felis. Integer ligula risus, ultricies eu velit  non, rutrum conse ctetur neque. augue arcu, cursus id egestas ut,  viverra at urna. </p>
                                            <figure className="wp-block-image size-full is-style-default alignfullwide">
                                                <Image src={ThemeImage.SiteImageBg5} alt="" />
                                            </figure>
                                            <p>Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci  felis tincidunt tellus, bibendum ex velit ac dolor. Aenean auctor,  lectus laoreet efficitur dapibus, orci nulla ultrices risus, sed  volutpat nisl nulla at felis. Integer ligula risus, ultricies eu velit  non, rutrum conse ctetur neque. augue arcu, cursus id egestas ut,  viverra at urna.  </p>                              
<pre className="wp-block-code"><code>wp_nav_menu( array
( 'theme_location' =&gt; 
    'footer_menu', 
    'container_id' =&gt; 
    'navbar-collapse-1',
    'container_class'=&gt;
    'navbar-collapse collapse navbar-right',
    'menu_class'=&gt;'nav navbar-nav',
    'fallback_cb'=&gt;false, 
    'items_wrap' =&gt; '%3$s', 
    'container'=&gt;false,
    'depth' =&gt; 1,
    'walker'=&gt; ''  
) 
);</code></pre>
                                            <p>Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci  felis tincidunt tellus, bibendum ex velit ac dolor. Aenean auctor,  lectus laoreet efficitur dapibus, orci nulla ultrices risus, sed  volutpat nisl nulla at felis. Integer ligula risus, ultricies eu velit  non, rutrum conse ctetur neque. augue arcu, cursus id egestas ut,  viverra at urna. </p>
                                            <ul className="wp-block-gallery columns-4 is-cropped">
                                                <li className="blocks-gallery-item"><Image alt="project" src={ThemeImage.PorjectImage1} /></li>
                                                <li className="blocks-gallery-item"><Image alt="project" src={ThemeImage.PorjectImage2} /></li>
                                                <li className="blocks-gallery-item"><Image alt="project" src={ThemeImage.PorjectImage3} /></li>
                                                <li className="blocks-gallery-item"><Image alt="project" src={ThemeImage.PorjectImage4} /></li>
                                                <li className="blocks-gallery-item"><Image alt="project" src={ThemeImage.PorjectImage5} /></li>
                                                <li className="blocks-gallery-item"><Image alt="project" src={ThemeImage.PorjectImage6} /></li>
                                                <li className="blocks-gallery-item"><Image alt="project" src={ThemeImage.PorjectImage7} /></li>
                                            </ul>
                                            <p>Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci  felis tincidunt tellus, bibendum ex velit ac dolor. Aenean auctor,  lectus laoreet efficitur dapibus, orci nulla ultrices risus, sed  volutpat nisl nulla at felis. Integer ligula risus, ultricies eu velit  non, rutrum conse ctetur neque. </p>
                                            <p>Nulla ultrices diam at odio malesuada lacinia. Fusce eget posuere purus.  Donec accumsan vehicula id imperdiet nulla ornare eu. Orci varius  natoque penatibus et magnis dis parturient montes ulus mus. </p>
                                            <p>Praesent vehicula neque et augue consectetur placerat. Ut pellentesque   euismod sapien eget venena tis. Proin massa lacus, dapibus a scelerisque   a, molestie sit amet mauris. Cras maximus lectus quis orci feugiat, at   tristique velit bibendum. Etiam augue arcu, cursus id egestas ut,   viverra at urna.  </p>
                                            <div className="alignleft w-50 rounded-md overflow-hidden ">
                                                <Image src={ThemeImage.OurBlogPic1} alt="pic1"/>
                                            </div>
                                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor 
                                            auctor. Integer posuere erat a ante venenatis dapibus posuere velit 
                                            aliquet. Donec ullamcorper nulla non metus auctor fringilla. Maecenas 
                                            sed diam eget risus varius.</p>
                                            <p>Praesent vehicula neque et augue consectetur placerat. Ut 
                                            pellentesque euismod sapien eget venena tis. Proin massa lacus, dapibus a
                                            scelerisque a, molestie sit amet mauris. Cras maximus lectus quis orci 
                                            feugiat, at tristique velit bibendum. Etiam augue arcu, cursus id 
                                            egestas ut, viverra at urna. </p>
                                            <p>Molestie sit amet mauris. Cras maximus lectus quis orci 
                                            feugiat, at tristique velit bibendum. Etiam augue arcu, cursus id 
                                            egestas ut, viverra at urna. </p>
                                            <h4> Image Block </h4>
                                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget  lacinia odio sem nec elit. Maecenas faucibus mollis interdum. </p>
                                            <figure className="wp-block-image size-large is-style-default">
                                                <Image src={ThemeImage.ThumbImg2} alt="thumb"/>
                                            </figure>
                                            <figure className="wp-block-image size-large is-style-default aligncenter">
                                                <Image src={ThemeImage.ThumbImg1} alt="thumbimg"/>
                                                <figcaption> an image with caption</figcaption>
                                            </figure>
                                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget  lacinia odio sem nec elit. Maecenas faucibus mollis interdum. </p>
                                            <h4> Cover Image Block </h4>
                                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget  lacinia odio sem nec elit. Maecenas faucibus mollis interdum. </p>
                                            <p>There are many variations of passages of Lorem Ipsum available, but 
                                            the majority have suffered alteration in some form, by injected humour, 
                                            or randomised words which don’t look even slightly believable. </p>
                                            <p>If you are going to use a passage of Lorem Ipsum, you need 
                                            to be sure there isn’t anything embarrassing hidden in the middle of 
                                            text. All the Lorem Ipsum generators on the Internet tend to repeat 
                                            predefined chunks as necessary, making this the first true generator on 
                                            the Internet. </p>
                                            <p>It uses a dictionary of over 200 Latin words, combined with a
                                            handful of model sentence structures, to generate Lorem Ipsum which 
                                            looks reasonable. The generated Lorem Ipsum is therefore always free 
                                            from repetition, injected humour, or non-characteristic words etc.</p>
                                            <div className="clearfix"></div>
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
                                                    <li><Link className="fab fa-twitter" href="#" scroll={false}></Link></li>
                                                    <li><Link className="fab fa-linkedin-in" href="#" scroll={false}></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <PostRelatedBlog />
                                <CommentData />
                                {/* <!-- blog END --> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}