module.exports = {
  siteTitle: 'Hi! I\'m Edgars!',
  siteDescription: `My online site to showcase me and what I've been up to`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Edgars Avenins',
  githubUsername: 'edgars-avenins',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `I am a full-stack web developer with a background in logistics who recently up-skilled in web development for a change
  of career. While doing work in different fields of the industry I have always been drawn back to problem-solving and
  improving processes. Therefore, I have been self-learning web development for two years while also working full-time
  shift work. I was certain of this transition as being challenged by complex problems and seeing that there are so many
  solutions to the same problem just brings me pure joy. Recently I graduated from Enspiral Dev Academy and now I am
  looking for an opportunity to make a difference and grow.`,
  skills: [
    {
      name: 'HTML',
      level: 75
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 65
    },
    {
      name: 'React',
      level: 80
    },
    {
      name: 'Angular',
      level: 45
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
      name: 'Express',
      level: 70
    },
    {
      name: 'RESTful APIs',
      level: 75
    },
    {
      name: 'Unit testing',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more portifolio items here */
    {
      company: "Enspiral Dev Academy",
      begin: {
        month: 'mar',
        year: '2020'
      },
      duration: 'present',
      occupation: "Bootcamp Facilitator",
      description: "Support students through bootcamp by guiding them on the right path and explaining programming concepts."
  
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