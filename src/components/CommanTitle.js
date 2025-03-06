import Link from "next/link";

export default  function CommanTitle({bgimg, pagetitle, maintitle, cappageTitle}){
    return(
        <>
            <div className="dlab-bnr-inr overlay-primary-dark" 
                style={{backgroundImage: `url('${bgimg.src}')`}}
            >
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1>{cappageTitle}</h1>                        
                        <nav className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="#" scroll={false}>{maintitle}</Link></li>
                                <li className="breadcrumb-item active">{pagetitle}</li>
                            </ul>
                        </nav>                        
                    </div>
                </div>
            </div> 
            
        </>
    )
}