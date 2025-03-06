import { ThemeImage } from "./ThemeImage";

export const blog = [
    {
        id: 1,
        imageName: ThemeImage.BlogGridPic1, 
        title: "Praesent ut lobortis purus hasellus accumsan.",
        name: 'Johne Doe',
        
    },
    {
        id: 2,
        imageName: ThemeImage.BlogGridPic2,       
        title: "Donec feugiat mollis nisi in dignissim. Morbi lectus.",
        name: 'Gofy Theis',
        
    },
    {
        id: 3,
        imageName: ThemeImage.BlogGridPic3, 
        title: "Quisque sem tortor, convallis in arcu finibus.",
        name: 'John Digi',
        
    },
    {
        id: 4,
        imageName: ThemeImage.BlogGridPic2,        
        title: "Maecenas maximus augue eget libero dictum.",
        name: 'Karni Kapor',

    },
];

export const allBlog = [
    ...blog,
];