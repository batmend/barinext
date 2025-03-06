import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";

const CommentBlog = ({imagename,name}) =>{
    return(
        <div className="comment-body">
            <div className="comment-author vcard"> 
                <Image  className="avatar photo" src={imagename} alt=""/> 
                <cite className="fn">{name}</cite>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="reply"> 
                <Link href="#" scroll={false} className="comment-reply-link">
                    <i className="fa fa-reply"/>Reply
                </Link> 
            </div>
        </div>
    )
}

export const  PostDetailBlog =()=>{
    return(
        <>
            
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
                    <li className="blocks-gallery-item"><Image alt="blog" src={ThemeImage.OurBlogPic1}/></li>
                    <li className="blocks-gallery-item"><Image alt="blog2" src={ThemeImage.OurBlogPic2}/></li>
                </ul>
                <h4>Curabitur elementum lobortis malesuada. </h4>
                <p>Aliquam laoreet fringilla velit, quis pulvinar ex bibendum vestibulum.  Aenean vel dapibus ex. Curabitur sodales dui ut hendrerit volutpat.  Phasellus fringilla semper urna, eu dapibus lacus porttitor at. Sed eget  pellentes orci. Aliquam pulvinar augue sed molestie semper. Integer  ullamcorper magna fringilla arcu rutrum, sed porttitor ex viverra.  </p>
                <blockquote className="wp-block-quote is-style-default"><p>Use this static Page to test the Theme’s handling of the Blog Posts  Index page. If the site is set to display a static Page on the Front  Page, and this Page is. </p><cite>WordPress Community</cite></blockquote>
                <p>Cras ac erat sapien. Etiam porta, arcu sed scelerisque dapibus, orci  felis tincidunt tellus, at bibendum ex velit ac dolor. Aenean auctor,  lectus laoreet efficitur dapibus, orci nulla ultrices risus, sed  volutpat nisl nulla at felis. Integer ligula risus, ultricies eu velit  non, rutrum consectetur neque. Sed ullamcorper sed massa quis hendrerit.   </p>
                <p>Nulla ultrices diam at odio malesuada lacinia. Fusce eget posuere purus.  Donec accumsan vehicula mi, id imperdiet nulla ornare eu. Orci varius  natoque penatibus et magnis dis parturient montes, nascetur ridiculus  mus. </p>
                <p>Praesent vehicula neque et augue consectetur placerat. Ut pellentesque  euismod sapien eget venenatis. Proin massa lacus, dapibus a scelerisque  a, molestie sit amet mauris. Cras maximus lectus quis orci feugiat, at  tristique velit bibendum. Etiam augue arcu, cursus id egestas ut,  viverra at urna. Quisque ipsum sit amet aliquet tempus.  </p>
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
        </>
    )
} 

export const PostRelatedBlog = ()=>{
    return(
        <div className="row extra-blog style-1">
            <div className="col-lg-12">
                <h4 className="blog-title">RELATED BLOGS</h4>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="dlab-blog style-1 bg-white m-b30">
                    <div className="dlab-media">
                        <Link href="/blog-details-2"><Image src={ThemeImage.ThumbImg3} alt=""/></Link>
                    </div>
                    <div className="dlab-info">
                        <h5 className="dlab-title">
                            <Link href="/blog-details-2">Praesent ut lobortis purus hasellus libero orci.</Link>
                        </h5>
                        <p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
                        <div className="dlab-meta meta-bottom">
                            <ul>
                                <li className="post-date"><i className="flaticon-clock m-r10"></i>7 Sep, 2024</li>
                                <li className="post-comment"><Link href="#" scroll={false}><i className="flaticon-speech-bubble"></i><span>15</span></Link></li>
                                <li className="post-share"><i className="flaticon-share"></i>
                                    <ul>
                                        <li><Link className="fab fa-facebook-f" href="https://www.facebook.com/"  target="_blank"></Link></li>
                                        <li><Link className="fab fa-twitter" href="#" scroll={false}></Link></li>
                                        <li><Link className="fab fa-linkedin-in" href="#" scroll={false}></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="dlab-blog style-1 bg-white m-b30">
                    <div className="dlab-media">
                        <Link href="/blog-details-2"><Image src={ThemeImage.ThumbImg2} alt=""/></Link>
                    </div>
                    <div className="dlab-info">
                        <h5 className="dlab-title">
                            <Link href="/blog-details-2">Donec feugiat mollis nisi in dignissim.</Link>
                        </h5>
                        <p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
                        <div className="dlab-meta meta-bottom">
                            <ul>
                                <li className="post-date"><i className="flaticon-clock m-r10"/>7 Sep, 2024</li>
                                <li className="post-comment"><Link href="#"><i className="flaticon-speech-bubble"/><span>15</span></Link></li>
                                <li className="post-share"><i className="flaticon-share"/>
                                    <ul>
                                        <li><Link className="fab fa-facebook-f" href="https://www.facebook.com/"  target="_blank"></Link></li>
                                        <li><Link className="fab fa-twitter" href="#" scroll={false}></Link></li>
                                        <li><Link className="fab fa-linkedin-in" href="#" scroll={false}></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CommentData = () =>{
    return(
        <>
            <div className="comments-area style-1" id="comments">
                <h4 className="comments-title">8 COMMENTS</h4>
                <div className="clearfix">                    
                    <ul className="comment-list">
                        <li className="comment">
                            <CommentBlog imagename={ThemeImage.TestimonialPic1} name="Celesto Anderson" />
                            <ol className="children">
                                <li className="comment odd parent">                                                            
                                    <CommentBlog imagename={ThemeImage.TestimonialPic2} name="Jake Johnson" />
                                </li>
                            </ol>                            
                        </li>
                        <li className="comment">
                            <CommentBlog imagename={ThemeImage.TestimonialPic1} name="John Doe" />                                                    
                        </li>
                    </ul>
                    <LeaveForm />
                </div>
            </div>
        </>
    )
}

export const LeaveForm = () =>{
    return(
        <>
            {/* <!-- Form --> */}
            <div className="comment-respond style-1" id="respond">
                <h4 className="comment-reply-title" id="reply-title">LEAVE A REPLY <small> 
                    <Link className="d-none" href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> </small> 
                </h4>
                <form className="comment-form" id="commentform" method="post">
                    <p className="comment-form-author">
                        <label htmlFor="author">Name <span className="required">*</span></label>
                        <input type="text" name="Author"  placeholder="Author" id="author"/>
                    </p>
                    <p className="comment-form-email">
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="text" placeholder="Email" name="email" id="email"/>
                    </p>
                    <p className="comment-form-comment">
                        <label htmlFor="comment">Comment</label>
                        <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                    </p>
                    <p className="form-submit">
                        <button type="submit" className="btn btn-primary" id="submit">Submit Now<i className="fa fa-angle-right m-l10"></i></button>
                    </p>
                </form>
            </div>
        </>
    )
}