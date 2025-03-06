import Image from "next/image";
import { ThemeImage } from "@/data/ThemeImage";

export default function Newslatter(){
    return(
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="dlab-media m-b30">
                        <Image src={ThemeImage.AboutImg9} className="move-2" alt=""/>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                    <div className="section-head style-1 text-white">
                        <h6 className="sub-title text-white">NEWSLETTER</h6>
                        <h2 className="title m-b15">SUBSCRIBE TO OUR NEWSLETTER</h2>
                        <p>Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non.</p>
                    </div>
                    <div className="dlab-subscribe style-2 max-w500">
                        <form className="dzSubscribe">
                            <div className="dzSubscribeMsg"></div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address"/>
                                    <div className="input-group-addon">
                                        <button name="submit" value="Submit" type="submit" className="btn btn-primary">Subscribe Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    )
}