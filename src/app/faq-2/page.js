"use client"
import Accordion from 'react-bootstrap/Accordion';
import CommanTitle from "@/components/CommanTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeImage } from "@/data/ThemeImage";
import { accordData } from "@/data/accordion";


export default function Faq(){
    return(
        <>
            <Header headstyle={""} />
            <div className="page-content bg-white">
                <CommanTitle bgimg={ThemeImage.BannerBg2} cappageTitle="FAQ" pagetitle={"FAQ"} maintitle={"Home"} />
                <section className="content-inner" style={{backgroundImage: `url('{${ThemeImage.SiteImage.src}}')`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto">                                
                                <Accordion className="dlab-accordion" id="accordionFaq" defaultActiveKey={1}>
                                    {accordData.map((item, ind)=>(
                                        <Accordion.Item eventKey={item.id} className="card" key={ind}>
                                            <Accordion.Header className="card-header" id="faqOne">
                                                <h5 className="dlab-title">                                                
                                                   {item.title}                                                    
                                                </h5>
                                            </Accordion.Header>
                                            <Accordion.Body className="card-body">                                            
                                                <p className="m-b0">Quisque ac quam nibh. Nullam nunc tortor, malesuada sed est eu, ultricies egestas risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque pulvinar enim urna, nec rutrum orci luctus id.</p>                                            
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}                                    
                                </Accordion>
                            </div>                          
                        </div>
                    </div>
                </section>               
            </div>   
            <Footer />
        </>
    )
}