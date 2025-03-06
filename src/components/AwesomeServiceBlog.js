import Link from 'next/link'


export default function AwesomeServiceBlog({cardStyle, title, iconName}){
    return(        
        <div className="icon-bx-wraper style-1 box-hover text-center m-b30">
            <div className={`icon-bx-md radius ${cardStyle}`}>
                <Link href="#" scroll={false} className="icon-cell">
                    <i className={iconName} />
                </Link>
            </div>
            <div className="icon-content">
                <h4 className="dlab-title">{title}</h4>
                <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. </p>
            </div>
        </div>
        
    )
}