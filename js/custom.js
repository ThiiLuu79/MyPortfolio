/*
File that contains the custom constants for home page.
Modify the values here to customize your page.
*/

//Personnal informations
const user = {
    full_name:"The Minh Luong",
    initials:"tm",
    title:"Software Engineering Student",
    country:"Montreal, Canada",
    email:"the-minh.luong.1@ens.etsmtl.ca"
}
//Links
const links = {
    linkedin:"https://www.linkedin.com/in/tmluong19/",
    github:"https://github.com/ThiiLuu79",
    instagram:"https://www.instagram.com/thiiluu/",
    facebook:"https://www.facebook.com/theminh.luong"
}
//About
const about = {
    p1:`Student at <b>ÉTS</b> (École de Technologie Supérieure), which translates as Superior Technology School,
    in Montreal, Canada. Majoring in <b>Software Engineering</b>, I am slowly discovering the value
    of computer science in today's world. I've always been passionated about video games and websites and I wanted to
    know how those complex programs and softwares were made. Luckily now, not only I can understand the technical skills
    behind those, but I can also recreate them.`,
    p2:`I have started programming with the C languague, in 2020. This is when I developed an interest
    in programming. Since then, I enjoy making my own projects and learning new things. In my free time, I enjoy
    arts and drawing tattoo designs.`
}
//Projects
const projects = {
    project1:"Websites",
    project2:"Games",
    project3:"Art Gallery"
}
//Education
const education = {
    school1:"ÉTS",
    schoolLocation1: user.country,
    program1:"Software enginnering program (Bachelor's degree)",
    programDuration1:"2020 - Present",
    school2:"Maisonneuve College",
    schoolLocation2: user.country,
    program2:"Pure and applied sciences program",
    programDuration2:"2018 - 2020"
}
//Copyright
const start_year = "2021";

//Head informations
const headInfo = {
    author: user.full_name,
    description: "The Minh Luong's portfolio and projects",
    keywords: "Portfolio, Projects, Websites, Games, Arts, Art Gallery, Experiences, Education, The Minh Luong",
}

//Head customization
document.querySelector('meta[name="description"]').setAttribute("content", headInfo.description);
document.querySelector('meta[name="keywords"]').setAttribute("content", headInfo.keywords);
document.querySelector('meta[name="author"]').setAttribute("content", headInfo.author);
//Title
var t = document.querySelector('title');
t.innerHTML = user.initials + "'s portfolio";
