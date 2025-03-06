import { ThemeImage } from "./ThemeImage";

export const post = [
    {
        title:'Fusce mollis felis quis tristique',
        imageName : ThemeImage.RecentBlogGrid1,
    },
    {
        title:'Fusce mollis felis quis tristique',
        imageName : ThemeImage.RecentBlogGrid2,
    },
    {
        title:'Fusce mollis felis quis tristique',
        imageName : ThemeImage.RecentBlogGrid3,
    },
    {
        title:'Fusce mollis felis quis tristique',
        imageName : ThemeImage.RecentBlogGrid2,
    },
];
export const archive = [
    {
        title:'January', numb: '3'
    },
    {
        title:'Fabruary', numb: '4'
    },
    {
        title:'March', numb: '4'
    },
    {
        title:'April', numb: '3'
    },
    {
        title:'May', numb: '4'
    },
    {
        title:'Jun', numb: '1'
    },
    {
        title:'July', numb: '4'
    },
];
export const tags = [
    {
        title:'Business',
    },
    {
        title:'News',
    },
    {
        title:'Brand',
    },
    {
        title:'Website',
    },
    {
        title:'Internal',
    },
    {
        title:'Strategy',
    },
    {
        title:'Brand',
    },
    {
        title:'Mission',
    },
];

export const category = [
    { title:'Audio', num:'3'},
    { title:'Beauty', num:'4'},
    { title:'Fashion', num:'3'},
    { title:'Images', num:'1'},
    { title:'Lifestyle', num:'3'},
];

export const allpost = [
    {
        ...post,
        ...archive,
        ...tags,
        ...category
    },
];
