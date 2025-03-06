import { ThemeImage } from "@/data/ThemeImage";
import Image from "next/image";

const SiteDown =()=>{
    return(       
        <div className="page-content bg-white">
            <div className="content-block">                                        
                <div className="section-full bg-white page-down overlay-black-dark" 
                    style={{backgroundImage:`url('${ThemeImage.SiteImage.src}')`, backgroundSize:"cover", backgroundPosition:"center"}}
                >
                    <div className="container-fluid">
                        <div className="pagedown-title">
                            <Image src={ThemeImage.VlcImage} alt="vlc"/>
                            <h1>Site Is Down <br/>For Maintenance</h1>
                            <p>This is the Technical Problems Page. <br/>Or any other page.</p>
                        </div>
                    </div>
                </div>                                        
            </div>                              
        </div>       
    )
}
export default SiteDown;