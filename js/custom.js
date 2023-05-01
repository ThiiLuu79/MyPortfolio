/*
File that contains the custom constants for home page.
Modify the values here to customize your page.
These values are used in blueprints.js
*/

//Personnal informations
/*Informations about the portfolio's owner*/
const user = {
    full_name:"The Minh Luong",
    initials:"tml",
    title:"Software Engineering Student",
    country:"Montreal, Canada",
    email:"the-minh.luong.1@ens.etsmtl.ca"
}

//Head informations
/*Head's content*/
const headInfo = {
    author: user.full_name,
    description: "The Minh Luong's portfolio and projects",
    keywords: "Portfolio, Projects, Websites, Games, Arts, Art Gallery, Photography, Experiences, Education, The Minh Luong",
    title: user.initials + "'s portfolio"
}

//About
/*Content for about section*/
const about = {
    p1:`Student at <b>ÉTS</b> (École de Technologie Supérieure), which translates as Superior Technology School,
    in Montreal, Canada. Majoring in <b>Software Engineering</b>, I am slowly discovering the value
    of computer science in today's world. I've always been passionated about video games and websites and I wanted to
    know how those complex programs and softwares were made. Luckily now, not only I can understand the technical skills
    behind those, but I can also recreate them.`,
    p2:`I have started programming with the C languague, in 2020. This is when I developed an interest
    in programming. Since then, I enjoy making my own projects and learning new things. In my free time, I enjoy
    arts, drawing tattoo designs and taking pictures.`
}

//Pages
/*other pages*/
class Page {
    constructor(
        type,
        name,
        url
    ){
        this.type = type;
        this.name = name;
        this.url = url;
    }
}
const relativeViewsFolder = "views/"
const workExp = new Page("Work experiences","Work experiences", relativeViewsFolder + "experiences.html");
const webPro = new Page("Websites projects","Websites", relativeViewsFolder + "websites.html");
const gamePro = new Page("Games projects","Games", relativeViewsFolder + "games.html");
const drawPro = new Page("Drawing projects","Art Gallery", relativeViewsFolder + "art.html");
const photoPro = new Page("Photography projects","Photo Gallery", relativeViewsFolder + "photo.html");
const schoolPro = new Page("School Projects","School Projects", relativeViewsFolder + "school.html");


//Education
/*Define schools for education*/
class School {
    constructor(
        name,
        location,
        program,
        duration
    ) {
        this.name = name;
        this.location = location;
        this.program = program;
        this.duration = duration;
    }
}
const ets = new School ("ÉTS",user.country,"Bachelor of Engineering - BE, Software Engineering","2020 - Present");
const maisonneuve = new School ("Maisonneuve College",user.country,"Pure and applied sciences","2018 - 2020");

//Links
/*Define links*/
class Link {
    constructor(
        name,
        url
    ) {
        this.name = name;
        this.url = url;
    }
}
//Socials
const linkedin = new Link("linkedin","https://www.linkedin.com/in/tmluong19/");
const github = new Link("github","https://github.com/ThiiLuu79");
const instagram = new Link("instagram","https://www.instagram.com/thiiluu/");
const facebook = new Link("facebook","https://www.facebook.com/theminh.luong");
//Web pages
const wimw = new Link("WeatherApp","https://whatismyweather.netlify.app");
const csjv = new Link("csjvOpac","https://csjv-biblio.inlibro.net/");
const ccfv = new Link("ccfvOpac","https://ccfvancouver.inlibro.net/");
const csszg = new Link("CSS Zen Garden","https://csszengardentm.netlify.app");
const ttt = new Link("Tititea","https://tititea.netlify.app");


//Copyright
/*Portfolio's year of creation*/
const start_year = "2021";

//Working experiences dates
const ciussDateStart = new Date(2019, 7);
const ciussDateEnd = new Date(2019, 8);
const inlibroDateStart = new Date(2022, 0);
const inlibroDateEnd = new Date(2022, 3);