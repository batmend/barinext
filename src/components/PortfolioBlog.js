"use client"
import Image from "next/image"
import Link from "next/link";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { portfolio } from "@/data/portfolio"
import { useState , useRef, useEffect} from "react";


const portfolioList = [
    { category: "*", title: "All", isActive: true },
    { category: ".web", title: "Web Design" },
    { category: ".development", title: "Web Development" },
    { category: ".branding", title: "Branding" },
    { category: ".design", title: "Mobile App" },
    { category: ".seo", title: "SEO" },
];

export default function PortfolioBlog (){

    const [currentFilter, setCurrentFilter] = useState("*");
    const isotopContainer = useRef();
    const isotope = useRef();
    const initIsotop = async () => {
        const Isotope = (await import("isotope-layout")).default;
        const imagesloaded = (await import("imagesloaded")).default;
            isotope.current = new Isotope(isotopContainer.current, {
                itemSelector: ".card-container",
                layoutMode: "masonry", 
            });
            imagesloaded(isotopContainer.current).on("progress", function () {        
                isotope.current.layout();
            });
        };
        const updateCategory = (val) => {
            setCurrentFilter(val);
            isotope.current.arrange({
                filter: val,
            });            
        };
        useEffect(() => {
            initIsotop();
        }, []);

    return(
        <div className="clearfix">            
            <div className="site-filters style-1 clearfix center mb-5">
                <ul className="filters" data-bs-toggle="buttons">
                    {portfolioList.map((data, i)=>(
                        <li 
                            className={`btn ${
                                currentFilter == data.category ? "active" : ""
                            }`}
                            key={i}
                            onClick={() => updateCategory(data.category)}
                        >
                            <input type="radio"/>
                            <Link href="#" scroll={false}>{data.title}</Link> 
                        </li>
                    ))}						
                </ul>
            </div>
            <LightGallery
                plugins={[lgThumbnail, lgZoom]}                
                selector=".lightimg"
            >
                <div className="clearfix" ref={isotopContainer}>
                    <ul className="row lightgallery">                                                     
                            {portfolio.map((ele, ind)=>(
                                <li className={`card-container col-lg-3 col-md-6 col-sm-6 ${ele.category}`} key={ind}>
                                    <div className="dlab-box dlab-overlay-box style-1 m-b30">
                                        <div className="dlab-media dlab-img-overlay1 primary">
                                            <Image src={ele.imageSrc} alt=""/>
                                            <span data-src={ele.imageSrc.src} className="lightimg" title="Design">		
                                                <i className="la la-plus"/> 
                                                <Image src={ele.imageSrc} alt="" className="d-none " />
                                            </span>
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="title"><Link href="/services-details-2">Web Development</Link></h4>
                                            <ul className="tags-list">
                                                {ele.tags && ele.tags.map((item, i)=>(
                                                    <li key={i}><Link href="#" scroll={false}>{item}</Link></li>
                                                ))}                                                
                                            </ul>
                                            <Link href="/services-details-2" className="btn btn-light icon-btn"><i className="fa fa-angle-right"/></Link>
                                        </div>
                                    </div>
                                </li>
                            ))}		
                    </ul>	
                        
                    
                </div>
            </LightGallery>
        </div>
    )
}