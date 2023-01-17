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

//Projects
/*Projects names*/
class Project {
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
const project1 = new Project("Websites projects","Websites","websites.html");
const project2 = new Project("Games projects","Games","games.html");
const project3 = new Project("Drawing projects","Art Gallery","art.html");
const project4 = new Project("Photography projects","Photo Gallery","photo.html");
const project5 = new Project("School Projects","School Projects","school.html");

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
const school1 = new School ("ÉTS",user.country,"Bachelor of Engineering - BE, Software Engineering","2020 - Present");
const school2 = new School ("Maisonneuve College",user.country,"Pure and applied sciences program","2018 - 2020");

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
const link1 = new Link("linkedin","https://www.linkedin.com/in/tmluong19/");
const link2 = new Link("github","https://github.com/ThiiLuu79");
const link3 = new Link("instagram","https://www.instagram.com/thiiluu/");
const link4 = new Link("facebook","https://www.facebook.com/theminh.luong");

//Copyright
/*Portfolio's year of creation*/
const start_year = "2021";
