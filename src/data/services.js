import { ThemeImage } from "./ThemeImage";

export const services = [
    {
        id: 1,
        imgName: ThemeImage.ServicesPic1,        
        title: "Web Development",
    },
    {
        id: 2,
        imgName: ThemeImage.ServicesPic2,        
        title: "Strategy & Research",
    },
    {
        id: 3,
        imgName: ThemeImage.ServicesPic3,        
        title: "Growth Tracking",
    },
];

export const features = [
    {
        id: 1,
        iconName: "flaticon-idea",  
        colorStyle:"text-red",      
        title: "Idea & Analysis Gathering",
    },
    {
        id: 2,
        iconName: "flaticon-line-graph",  
        colorStyle:"text-yellow ",      
        title: "Design & Developing",
    },
    {
        id: 3,
        iconName: "flaticon-rocket",
        colorStyle:"text-green",
        title: "Testing & Lunching",
    },
];

export const serviceBlog = [
    {
        imageName:ThemeImage.ServicesPic1,
        title:'Web Development',
    },
    {
        imageName:ThemeImage.ServicesPic2,
        title:'Strategy & Research',
    },
    {
        imageName:ThemeImage.ServicesPic3,
        title:'Growth Tracking',
    },
    {
        imageName:ThemeImage.ServicesPic4,
        title:'Web Solution',
    },
    {
        imageName:ThemeImage.ServicesPic5,
        title:'Company Branding',
    },
    {
        imageName:ThemeImage.ServicesPic6,
        title:'24x7 Support',
    },
];

export const progressbar = [
    {
        title:'SEO',
        value:'80%'
    },
    {
        title:'Designing',
        value:'90%'
    },
    {
        title:'Development',
        value:'85%'
    },
    {
        title:'Marketing',
        value:'70%'
    }
]; 


export const awesomeServices = [
    {
        id: 1,
        iconName: "flaticon-office",
        title: "Strategy & Research",
        cardStyle: "shadow-yellow bg-yellow",
    },
    {
        id: 2,
        iconName: "flaticon-website",   
        title: "Web Development",
        cardStyle: "shadow-red bg-red",
    },
    {
        id: 3,
        iconName: "flaticon-pie-charts", 
        title: "Web Solution",
        cardStyle: "shadow-green bg-green",
    },
    {
        id: 4,
        iconName: "flaticon-dollar",
        title: "Company Branding",
        cardStyle: "bg-skyblue shadow-skyblue",
    },
    {
        id: 5,
        iconName: "flaticon-line-graph",   
        title: "SEO & Marketing",
        cardStyle: "bg-orange shadow-orange",
    },
    {
        id: 6,
        iconName: "flaticon-help", 
        title: "24X7 Support",
        cardStyle: "bg-maroon shadow-maroon",
    },
];

export const allServices = [
    ...services,
    ...features,
    ...serviceBlog,
    ...progressbar,
    ...awesomeServices
];