"use client"
import { pricing } from "@/data/pricing";
import Link from "next/link";
import { useState } from "react";

export default function PricningBlog(){
    const [cardActive, setCardActive] = useState(2);
    return(
        <>
            {pricing.map((item, ind)=>(
                <div className="col-lg-4 col-md-6" key={ind}>
                    <div className={`pricingtable-wrapper style-1 ${cardActive === item.id? 'active' : ''}`}
                        onMouseEnter={()=>setCardActive(item.id)}
                    >
                        <div className="pricingtable-inner">
                            <div className="pricingtable-title">
                                <h3 className="title">{item.title}</h3>
                            </div>
                            <div className="pricingtable-price"> 
                                <h2 className="pricingtable-bx">${item.money1}<small>/Month</small></h2>
                            </div>                 
                            <p className="text">Aliquam dui lacus, lobortis quis sapien non.</p>
                            <ul className="pricingtable-features">
                                <li>Graphic Design </li>
                                <li>Web Design</li>
                                <li>UI/UX</li>
                                <li>HTML/CSS</li>
                                <li>SEO Marketing</li>
                                <li>Business Analysis</li>
                            </ul>
                            <div className="pricingtable-footer"> 
                                <Link href="/pricing-table-2" className="btn btn-primary rounded-md">Start Now <i className="fa fa-angle-right m-l10" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}            
        </>
    )
}