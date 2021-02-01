module.exports = {
  siteTitle: 'Hi! I\'m Edgars!',
  siteDescription: `My online site to showcase me and what I've been up to`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Edgars Avenins',
  githubUsername: 'edgars-avenins',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `I am a full-stack web developer with a background in logistics, forestry, construction, demolition, engine maintenance and thanks to all these jobs I'm now here. I worked as a bootcamp facilitator at Enspiral Dev Academy. In my most recent move further into IT World I landed an internship at Snapper Services Ltd. This has been a wonderful insight in all the movings bits and pieces that make things happen.`,
  skills: [
    {
      name: 'Web Fundamentals',
      level: 75
    },
    {
      name: 'React/Hooks',
      level: 80
    },
    {
      name: 'Angular 10',
      level: 50
    },
    {
      name: 'Redux',
      level: 60
    },
    {
      name: 'NodeJs',
      level: 65
    },
    {
      name: 'Java',
      level: 60
    },
    {
      name: 'Express',
      level: 75
    },
    {
      name: 'SQLite',
      level: 70
    },
    {
      name: 'MySQL',
      level: 65
    },
    {
      name: 'RESTful APIs',
      level: 75
    },
    {
      name: 'Unit testing',
      level: 60
    },
    /* more skills here */
  ],
  jobs: [
    /* more portifolio items here */
    {
      company: "Snapper Services Ltd.",
      begin: {
        month: 'nov',
        year: '2020'
      },
      duration: 'current',
      occupation: "Web Development Intern",
      description: "Build productys and services that help you and me and businesses run better, faster, more efficiently!"
  
    }, {
      company: "Enspiral Dev Academy",
      begin: {
        month: 'mar',
        year: '2020'
      },
      duration: '8 mon',
      occupation: "Bootcamp Facilitator",
      description: "Faciliate students from the moment they start learning up to graduating them in the World. Supporting them through the EDA journey both technically and mentally."
  
    },  {
      company: "Enspiral Dev Academy",
      begin: {
        month: 'Oct',
        year: '2019'
      },
      duration: '3 mon',
      occupation: "Student Web Developer",
      description: "Learning through simulated work environment I followed Agile practices and was challenged by new technologies constantly."
  
    }, {
      company: "Bosspac",
      begin: {
        month: 'jan',
        year: '2019'
      },
      duration: '5 mon',
      occupation: "Intern Web Developer",
      description: `Bosspac is an accounting platform where my main task was to fix bugs and familiarize myself with the
      codebase which helped me to learn how to ask good questions.`
    },
  ],
  portifolio: [
    {
      image: "/images/map.png",
      description: "Foraged & Found",
      url: "https://github.com/edgars-avenins/where-the-goods-at",
      live: "https://foraged-and-found.herokuapp.com/#/"
    },
    {
      image: "/images/robot.png",
      description: "XML data",
      url: "https://github.com/edgars-avenins/honey-pot",
      live: "https://xml-data.herokuapp.com/#/"
    },
    {
      image: "/images/workout.png",
      description: "Flex Time",
      url: "https://github.com/edgars-avenins/workout-app",
      live: "http://flex-time.herokuapp.com/#/"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/hashtag/climatechange",
    linkedin: "https://www.linkedin.com/in/edgars-avenins",
    github: "https://github.com/edgars-avenins",
    email: "edgars.avenins@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portifolio',
    }
  ]
}