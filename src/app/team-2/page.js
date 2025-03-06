import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { team } from "@/data/team";
import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";
import Link from "next/link";

export default function Team(){
    return(
        <>
            <Header headstyle=""/>
            <div className="page-content bg-white">		                
                <CommanTitle bgimg={ThemeImage.BannerBg4} cappageTitle="OUR TEAM" maintitle={"Home"} pagetitle={"Team"}/>
                <section className="content-inner" 
                    style={{backgroundImage: `url('${ThemeImage.BackBg1.src}')`}}
                >
                    <div className="container">
                        <div className="row">
                            {team.map((item, ind)=>(
                                <div className="col-lg-4 col-sm-6" key={ind}>
                                    <div className="dlab-team style-1 m-b30">
                                        <div className="dlab-media dlab-img-effect zoom zoom-slow">
                                            <Link href="#" scroll={false}><Image src={item.imageName} alt="card" /></Link>
                                        </div>    
                                        <div className="dlab-content">
                                            <div className="clearfix">
                                                <h4 className="dlab-name"><Link href="#" scroll={false}>{item.name}</Link></h4>
                                                <span className="dlab-position">Chief Exicutive Officer</span>
                                            </div>                                            
                                            <ul className="dlab-social-icon primary-light">
                                                <li><Link className="fab fa-facebook-f" href="https://www.facebook.com/dexignzone"  target="_blank"></Link></li>
                                                <li><Link className="fab fa-instagram" href="https://www.instagram.com/dexignzone/"  target="_blank"></Link></li>
                                                <li><Link className="fab fa-twitter" href="https://twitter.com/dexignzones"  target="_blank"></Link></li>
                                            </ul>                                            
                                        </div>                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>                 
            </div>
            <Footer />
        </>
    )
}