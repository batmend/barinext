import { ThemeImage } from "./ThemeImage";

export const pricing = [
    {
        id: 1,
        imgName: ThemeImage.ServicesPic4,        
        title: "Basic Plan",
        money1:'49',
    },
    {
        id: 2,
        imgName: ThemeImage.ServicesPic5,        
        title: "Standart Plan",
        money1:'199',
    },
    {
        id: 3,
        imgName: ThemeImage.ServicesPic6,        
        title: "Premium Plan",
        money1:'149',
    },
];

export const allPricing = [
    ...pricing,
    
];