"use client"
import React, {  useEffect, useReducer, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeImage } from "@/data/ThemeImage";

import {menuItems} from '../data/menulist'
const reducer = (previousState, updatedState) => ({
	...previousState,
	...updatedState,
});
  
const initialState = {
	active : "",
}
  

export default function Header({headstyle}) {
	const [headerSticky, setHeaderSticky] = React.useState(false);
	useEffect(() => {
	  window.addEventListener("scroll", () => {
		setHeaderSticky(window.scrollY > 50);
	  });
	}, []);
   	const [openToggle, setOpenToggle] = useState(false);
   	const [state, setState] = useReducer(reducer, initialState);
	const handleMenuActive = status => {		
		setState({active : status});			
		if(state.active === status){				
			setState({active : ""});
		}   
	}

	let path = '';
	if (typeof window !== 'undefined') {
		path = window.location.pathname;
		path = path.split("/");
		path = path[path.length - 1];
	}	
    useEffect(() => {
		menuItems.forEach((data) => {						
			data.submenu?.forEach((item) => {				
				if (path === item.href) {
					setState({ active: data.title })
				}          
			})
		})
    }, [path]);

   return(
	<header className={`site-header header mo-left ${headstyle}`}>
	{/* <!-- Main Header --> */}
		<div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerSticky ? 'is-fixed':''}`}>
			<div className="main-bar clearfix ">
				<div className="container clearfix">					
					{/* <!-- Website Logo --> */}
					<div className="logo-header logo-dark">
						<Link href="#" scroll={false}>
							<Image 
								src={ThemeImage.logoPng} 
								alt="logo" 
								width={112}
                				height={28}
							/>
						</Link>
					</div>					
					{/* <!-- Nav Toggle Button --> */}
					<button className={`navbar-toggler  navicon justify-content-end ${openToggle ? 'open' : 'collapsed'}`} 
						onClick={()=>setOpenToggle(!openToggle)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>					
					{/* <!-- Extra Nav --> */}
					<div className="extra-nav">
						<div className="extra-cell">
							<Link href="/contact-us-2" className="btn btn-primary">Get A Quote <i className="fa fa-angle-right m-l10"/></Link> 
						</div>
					</div>					
					<div className={`header-nav navbar-collapse collapse justify-content-end ${openToggle ? 'show' : ''}`}>
						<div className="logo-header logo-dark">
							<Link href="#" scroll={false}>
								<Image 
									src={ThemeImage.logoPng} 
									alt="" 
									width={112}
									height={28}
								/>
							</Link>
						</div>
						<ul className="nav navbar-nav navbar">
							{menuItems.map((item, index)=>(
								<li className={`${item.submenu ? "sub-menu-down" : ""} ${ state.active === item.title ? 'open' : ''}`}  key={index} >
									<Link href={item.href}
										onClick={() => {handleMenuActive(item.title)}}
									><span>{item.title}</span></Link>
									{item.submenu && (
										<ul className="sub-menu">
											{item.submenu.map((subitem, ind)=>(
												<li key={ind} className={`${subitem.href === path ? 'active' : ''}`}>
													<Link href={subitem.href}>{subitem.title}</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
								
						</ul>
						<div className="dlab-social-icon">
							<ul>
								<li><Link target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"/></Link></li>
								<li><Link target="_blank" href="https://twitter.com/" ><i className="fab fa-twitter"/></Link></li>
								<li><Link target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"/></Link></li>
								<li><Link target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"/></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
   )
}