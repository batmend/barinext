import { services } from "@/data/services";
import Image from "next/image";

export default function ServicesBlog(){
    return(
        <div className="row">
            {services.map((item, i)=>(
                <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                    <div className="icon-bx-wraper style-7 text-center m-lg-b30">
                        <div className="icon-media"> 
                            <Image src={item.imgName} width="215" alt=""/>
                        </div>
                        <div className="icon-content">
                            <h4 className="dlab-title">{item.title}</h4>
                            <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis.</p>
                        </div>
                    </div>
                </div>
            ))}                           
        </div>
    )
}