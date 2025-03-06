"use client"
import { useEffect, useState } from 'react';
import moment from 'moment';
import Image from "next/image";
import { ThemeImage } from "@/data/ThemeImage";
import Link from "next/link";

export default function ComingSoon(){
    const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
    useEffect(() => {
		setInterval(() => {
			const now = moment();
			const then = moment('2021-10-27 12:12:12', 'YYYY-MM-DD hh:mm:ss');
			const countdown = moment(then - now);
			setDays(countdown.format('D'));
			setHours(countdown.format('HH'));
			setMinutes(countdown.format('mm'));
			setSeconds(countdown.format('ss'));
		}, 1000);
	}, []);
    return(
        <>
            <div className="page-content bg-white">            
                <div className="content-block">                
                    <div className="section-full bg-white coming-soon overlay-black-dark" 
                        style={{backgroundImage:`url('${ThemeImage.BackJpg2.src}')`, backgroundSize:"cover"}}
                    >
                        <div className="container">
                            <div className="text-center">
                                <div className="cs-logo">
                                    <div className="logo"><Image src={ThemeImage.logowhitePng} alt="logo"/></div>
                                </div>
                                <div className="cs-title">Coming Soon</div>
                                <div className="countdown text-center">
                                    <div className="date"><span className="time days">{days}</span>
                                        <span>Days</span>
                                    </div>
                                    <div className="date"><span className="time hours">{hours}</span>
                                        <span>Hours</span>
                                    </div>
                                    <div className="date"><span className="time mins">{minutes}</span>
                                        <span>Minutess</span>
                                    </div>
                                    <div className="date"><span className="time secs">{seconds}</span>
                                        <span>Second</span>
                                    </div>
                                </div>
                                <ul className="countdown-social">
                                    <li><Link className="fab fa-facebook-f" href="https://www.facebook.com/dexignzone"  target="_blank"></Link></li>{" "}
                                    <li><Link className="fab fa-instagram" href="https://www.instagram.com/dexignzone/"  target="_blank"></Link></li>{" "}
                                    <li><Link className="fab fa-twitter" href="https://twitter.com/dexignzones"  target="_blank"></Link></li>{" "}
                                    <li><Link href="https://www.google.com/" target="_blank" className="fab fa-google-plus-g"></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>
        </>
    )
}