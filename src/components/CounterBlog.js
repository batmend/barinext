import { counter } from '@/data/counter';
import Link from 'next/link';
import CountUp from 'react-countup';

export default function CounterBlog(){
    return(
        <>
            <div className="row counter-inner">
                {counter.map((item, ind)=>(
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s" key={ind}>
                        <div className="icon-bx-wraper style-4 text-center m-b30">
                            <div className={`icon-bx-sm radius m-b20 ${item.designStyle}`}> 
                                <Link href="#" scroll={false} className="icon-cell">
                                    <i className={item.iconName} />
                                </Link> 
                            </div>
                            <div className="icon-content">
                                <span className="title">{item.title}</span>
                                <h2 className="counter-title m-b0 text-primary"><CountUp end={item.counterNumber} duration={6} /> {item.mintext}</h2>                                
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    )
}