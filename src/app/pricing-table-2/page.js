import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricningBlog from "@/components/PricingBlog";
import { ThemeImage } from "@/data/ThemeImage";

export default function PricingTable(){
    return(
        <>
            <Header headstyle=""/>            
                <div class="page-content bg-white">
                    <CommanTitle bgimg={ThemeImage.BannerBg3} cappageTitle="PRICING TABLE" maintitle={"Home"} pagetitle={"Pricing Table"} />
                    <section className="content-inner"
                        style={{backgroundImage: `url('${ThemeImage.BackBg1.src}')`}}
                    >
                        <div className="container">
                            <div className="row pricingtable-wraper-1">
                                <PricningBlog />
                            </div>
                        </div>
                    </section>                
                </div>
            <Footer />  
        </>
    )
}