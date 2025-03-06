import { archive, category, post, tags } from "@/data/post";
import Image from "next/image";
import Link from "next/link";

export default function PostSidebar(){
    return(
        <aside className="side-bar sticky-top">
            <div className="widget">
                <div className="search-bx">
                    <form role="search">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="la la-search"/></span>
                            </div>
                            <input name="text" className="form-control" placeholder="Search" type="text"/>
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary"><i className="la la-long-arrow-right"/></button>
                            </span> 
                        </div>
                    </form>
                </div>
            </div>
            <div className="widget widget_categories">
                <h4 className="widget-title">Category</h4>
                <ul>
                    {category.map((item, ind)=>(
                        <li className="cat-item cat-item-26" key={ind}><Link href="#" scroll={false}>{item.title}</Link> ({item.num})</li> 
                    ))}                    
                </ul>
            </div>
            <div className="widget recent-posts-entry">
                <h4 className="widget-title">Recent Posts</h4>
                <div className="widget-post-bx">                    
                    {post.map((item,index)=>(
                        <div className="widget-post clearfix" key={index}>
                            <div className="dlab-media"> 
                                <Link href="/blog-details-2"><Image src={item.imageName} alt=""/></Link>
                            </div>
                            <div className="dlab-info">
                                <h4 className="title"><Link href="/blog-details-2">{item.title}</Link></h4>
                                <div className="dlab-meta">
                                    <ul>
                                        <li className="post-date"> 07 Sep, 2024 </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}                    
                </div>
            </div>
            <div className="widget widget widget_categories">
                <h4 className="widget-title">Archives</h4>
                <ul>
                    {archive.map((item, ind)=>(
                        <li key={ind}><Link href="#" scroll={false}>{item.title}</Link>({item.numb})</li>
                    ))}
                    
                </ul>
            </div>
            <div className="widget widget_tag_cloud">
                <h4 className="widget-title">Tags</h4>
                <div className="tagcloud"> 
                    {tags.map((item, ind)=>(
                        <Link href="#" scroll={false} key={ind}>{item.title}</Link>
                    ))}                   
                </div>
            </div>
        </aside>
    )
}