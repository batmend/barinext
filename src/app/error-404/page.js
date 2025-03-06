import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeImage } from "@/data/ThemeImage";
import Link from "next/link";

export default function ErrorPage(){
    return(
        <>
            <Header headstyle="" />
            <div className="page-content bg-white">		
                <CommanTitle  bgimg={ThemeImage.BannerBg1} cappageTitle={"404"} pagetitle="404"  maintitle="Home" />
                <div className="section-full" style={{backgroundImage: `url('${ThemeImage.BackBg4.src}')`}}>
                    <div className="container">
                        <div className="error-page text-center">
                            <div className="dlab_error">404</div>
                            <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                            <Link href="/" className="btn btn-primary radius-no"><span className="p-lr15">Back to Homepage</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}