import { features } from "@/data/services";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";

export default function FeatureBlog(){    
    return(
        <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="section-head style-1" >
                    <h6 className="sub-title">FETURES</h6>
                    <h2 className="title">OUR WORK FLOW</h2>
                </div>
                <div className="section-wraper-one">
                    {features.map((elem, ind)=>(
                        <div className="icon-bx-wraper style-2 left m-b30" key={ind}>
                            <div className={`icon-bx-md radius bg-white ${elem.colorStyle}`}> 
                                <Link href="#" scroll={false} className="icon-cell">
                                    <i className={elem.iconName}/>
                                </Link> 
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title">{elem.title}</h4>
                                <p>Mauris eleifend ipsum dolor, sit amet elementum tortor mattis interdum. Praesent ut lobortis purus.</p>
                            </div>
                        </div>
                    ))}                    
                </div>
            </div>
            <div className="col-xl-6 col-lg-5 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="dlab-media cf-r-img d-lg-block d-none">
                    <Image src={ThemeImage.AboutPic1} className="move-2" alt=""/>
                </div>
            </div>
        </div>
    )
}