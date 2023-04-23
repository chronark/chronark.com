const projects = [
    {
        id: 1,
        title: "RomCom",
        date: "Aug 31, 2022",
        technologies: "HTML, CSS, JavaScript",
        description: "In this paired project, we finsihed a website that allows users to create their own romance novel covers.",
        githubUrl: "https://github.com/ajh0050/romcom",
        deployedUrl: "",
    },
    {
        id: 2,
        title: "FitLit",
        date: "Dec 6, 2022",
        technologies: "HTML, CSS, JavaScript, Mocha, Chai, Chart.js",
        description: "In this group project, we created a fitness tracker that allows users to track their activity, sleep, and hydration.",
        githubUrl: "https://github.com/Abekomon/FitLit",
        deployedUrl: "",
    },
    {
        id: 3,
        title: "Travel Tracker",
        date: "Jan 10, 2023",
        technologies: "HTML, CSS, Javascript, Mocha, Chai, Lighthouse",
        description: "In this solo project, I created a travel agency interface that allows users to plan their trips and see the estimated cost of their trip.",
        githubUrl: "https://github.com/ajh0050/Travel-Tracker",
        deployedUrl: "",
    },
    {
        id: 4,
        title: "Rancid Tomatillos",
        date: "Feb, 1, 2023",
        technologies: "React, React RouterV5, Cypress, Vercel, JSX, CSS",
        description: "In this solo project, I created a movie rating app that allows users to view movie details.",
        githubUrl: "https://github.com/ajh0050/rancid-tomatillos",
        deployedUrl: "https://rancid-tomatillos-ebon.vercel.app/",
    },
    {
        id: 5,
        title: "Tune Spoon Api",
        date: "Feb 18, 2023",
        technologies: "Express, Knex, Postgresql, pgAdmin, Fly.io, Heroku",
        description: "In this group project, we created a backend API for a music streaming service.",
        githubUrl: "https://github.com/nkinsaul/Tune-Spoon-api",
        deployedUrl: "",
    },
    {
        id: 6,
        title: "Animation Contemplation",
        date: "Feb 28, 2023",
        technologies: "React, React RouterV5, Cypress, Express.js, Heroku",
        description: "In this solo project, I created a website that allows users to search and view quotes from their favorite anime characters.",
        githubUrl: "https://github.com/ajh0050/Animation-Contemplation",
        deployedUrl: "https://animation-contemplation.herokuapp.com/",
    },
    {
        id: 7,
        title: "Grant Guru",
        date: "Mar 20, 2023",
        technologies: "Redux, Typescript, Express.js, Cypress, Github Actions, Heroku",
        description: "This project combined teams of backend and frontend developers to create a grant application website where you can filter and save grants to profiles.",
        githubUrl: "https://github.com/grant-guru/grant-guru-fe",
        deployedUrl: "https://grant-guru-fe.vercel.app/",
    },
    {
        id: 8,
        title: "Today We Lift",
        date: "April 10, 2023",
        technologies: "Next.js, Tailwind, Vercel, Google Domains",
        description: "In this single day hackathon solo project, I created a website that allows users to search for and view workout routines. ",
        githubUrl: "https://github.com/ajh0050/today-we-lift",
        deployedUrl: "https://www.todaywelift.com/",
    },
    {
        id: 9,
        title: "New York Times Clone",
        date: "April 21, 2023",
        technologies: "Next.js, Tailwind, Vercel, Context api, Puppeteer",
        description: "In this solo project, I created a clone of the New York Times website using their API and Puppetteer to scrape the article text(This feature only works on local).",
        githubUrl: "https://github.com/ajh0050/New-York-Times",
        deployedUrl: "https://new-york-times-eight.vercel.app/",
    },
]

const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
  
  export default sortedProjects;