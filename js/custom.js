/*
File that contains the custom constants for home page.
Modify the values here to customize your page.
These values are used in blueprints.js
*/

//Personnal informations
/*Informations about the portfolio's owner*/
const user = {
    full_name:"The Minh Luong",
    initials:"tm",
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
    p1:`I'm currently a Software Engineering student at ETS, with a passion for coding and problem-solving. 
    My last experience as a Full Stack Developer intern at National Bank of Canada gave me the opportunity to work on diverse projects and enhance my skills. 
    My expertise lies in Java, JavaScript and SQL, 
    enabling me to tackle front-end, back-end and database development challenges.`,

    p2:`As I look towards the future, my goal is to become a senior developer, 
    contributing my skills and knowledge to complex software solutions. 
    During my previous internships, I had the chance to work as a Full Stack Developer, where I customized websites for various clients. 
    This experience honed my ability to deliver tailored solutions that meet unique requirements.`,

    p3:`One of the defining qualities I bring to my work is resilience. I approach challenges with determination, 
    always seeking innovative solutions to overcome obstacles. Outside of my professional life, 
    I find joy in expressing my creativity through drawing and photography.`
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
const personalPro = new Page("Personal projects","Personal Projects", relativeViewsFolder + "personal.html");
const drawPro = new Page("Drawing projects","Art Gallery", relativeViewsFolder + "art.html");
const photoPro = new Page("Photography projects","Photo Gallery", relativeViewsFolder + "photo.html");
const academicPro = new Page("Academic Projects","Academic Projects", relativeViewsFolder + "academic.html");


//Education
/*Define schools for education*/
class School {
    constructor(
        name,
        location,
        program,
        startDuration,
        endDuration
    ) {
        this.name = name;
        this.location = location;
        this.program = program;
        this.startDuration = startDuration;
        this.endDuration = endDuration;
    }
}

const startMaisonneuve = new Date(2018, 0);
const endMaisonneuve = new Date(2020, 0);
const startETS = new Date(2020, 0);
const endETS = new Date();

const ets = new School ("ÉTS",user.country,"Bachelor of Engineering - BE, Software Engineering", startETS, endETS);
const maisonneuve = new School ("Maisonneuve College",user.country,"Pure and applied sciences", startMaisonneuve, endMaisonneuve);

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
const portfolioStartYear = new Date(2021, 0);
const portfolioEndYear = new Date();

//Working experiences dates
const ciussDateStart = new Date(2019, 7);
const ciussDateEnd = new Date(2019, 8);
const inlibroDateStart = new Date(2022, 0);
const inlibroDateEnd = new Date(2022, 3);
const nbcDateStart = new Date(2023, 4, 14);
const nbcDateEnd = new Date(2023, 7, 30);