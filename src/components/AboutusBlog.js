import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function AboutusBlog({btnBlog}){
    return(        
        <div className="row align-items-center">
            <div className="col-md-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dz-media">
                    <Image src={ThemeImage.AboutImage4} className="move-1" alt="sign" />
                </div>
            </div>
            <div className="col-md-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="section-head style-1 mb-4">
                    <h6 className="sub-title">ABOUT US</h6>
                    <h2 className="title">HOW  WE CAN HELP YOUR BUSINESS GOAL</h2>
                </div>
                <p className="m-b20">Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.</p>
                { btnBlog ?
                    <Fragment>
                        <Image src={ThemeImage.SignPng} alt="sign" />
                        <h4 className="m-b30">CEO Jhone Doe</h4>                
                        <Link href="/about-us-2" className="btn btn-primary">Learn More <i className="fa fa-angle-right m-l10 scale2"/> </Link>
                    </Fragment>
                    :
                    <Fragment>
                        <p className="m-b20">Mauris egestas eleifend sapien eu malesuada. Phasellus at metus eget sapien tristique accumsan non sit amet augue.</p>
						<div className="row">
							<div className="col-sm-6">
								<ul className="list-arrow primary">
									<li>Nulla dict posuere veliitae.</li>
									<li>Etiam orci magna, accumsan.</li>
									<li>Donec fringilla velit risusquis.</li>
									<li>Aliquam pulvinar tempor.</li>
								</ul>
							</div>
							<div className="col-sm-6">
								<ul className="list-arrow primary">
									<li>Nulla dict posuere veliitae.</li>
									<li>Etiam orci magna, accumsan.</li>
									<li>Donec fringilla velit risusquis.</li>
									<li>Aliquam diam tempor.</li>
								</ul>
							</div>
						</div>
                    </Fragment>
                }
            </div>
        </div>
    )
}