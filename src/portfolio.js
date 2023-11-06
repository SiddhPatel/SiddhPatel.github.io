/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Siddh Patel",
  title: "I'm Siddh Patel",
  nickname: "",
  subTitle: (
    "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / AWS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZOttYpVO1CrdMrGLMcTZs5aa3VX9-99H/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SiddhPatel",
  linkedin: "https://www.linkedin.com/in/siddh9979/",
  gmail: "patelsiddh1990@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces Web applications"
    ),
    emoji("⚡ Manage data with SQL, MySQL, MongoDB, PostgreSQL"),
    emoji(
      "⚡ Integration of cloud services services such as  AWS / GCP / Azure"
    ),
    emoji("⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases")
  ],
  

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */


  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "San Jose State University",
      logo: require("./assets/images/sjsu.jpeg"),
      subHeader: "Master's in Software Engineering ",
      duration: "August 2021 - May 2023",
      
    },
    {
      schoolName: "Charotar University of Science and technology",
      logo: require("./assets/images/charusat.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "July 2016 - April 2020",
      descBullets: ["Mentor of Executive Central Council at University to manage Technical and Non-technical Events"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud Services",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Brightmind Enrichment",
      companylogo: require("./assets/images/bme.png"),
      date: "August 2023 – Present",
      descBullets: [
        "Integrated Node.js and Express.js for server-side logic and HTTP request handling.",
        "Adopted MongoDB for data storage, designed schemas, and built data access services.",
        "Assembled scalable React components, integrated Redux, and React-Router for enhanced app navigation."
      ]
    },
    {
      role: "Software Engineer",
      company: "Cybage Software",
      companylogo: require("./assets/images/cybage.png"),
      date: "January 2023 – May 2023",
      descBullets: [
        "Contributed to diverse web application modules using MERN Stack technologies.",
        "Implemented GraphQL APIs to improve data querying efficiency.",
        "Utilized TDD with JEST for automated testing and JIRA for project management."
      ]
    },
    {
      role: "Software Engineer",
      company: "Basil Realty & Infra Solution LLP",
      companylogo: require("./assets/images/basil.png"),
      date: "May 2020 – July 2021",
      descBullets: [
        "Integrated 2300 property test files into Selenide Test AFT scripts, ensuring comprehensive test coverage.",
        "Implemented CI/CD pipeline with TeamCity, AWS EKS, and AWS Fargate, reducing deployment time by 40%.",
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Infintrix Global Pvt Ltd.",
      companylogo: require("./assets/images/Infintrix.png"),
      date: "December 2019 – April 2020",
      descBullets: [
        "Collaborated on high-performance RESTful API services with SQL expertise.",
        "Developed a predictive feature for precise temperature forecasting using Decision Tree Regression, TensorFlow, and Python.",
        "Optimized temperature monitoring, reducing search time by 80% (10s to 2s)."
      ]
    },
    {
      role: "Software Development Team Lead",
      company: "CHARUSAT",
      companylogo: require("./assets/images/charusat.png"),
      date: "December 2018 – March 2020",
      descBullets: [
        "Led diverse teams in creating Android and web apps with Java, Kotlin, and advanced technologies.",
        "Implemented database-driven applications in Java using JDBC, JavaBeans, and Hibernate.",
        "Enhanced productivity by 18% and accelerated project completion by 20% with adaptive planning and AWS integration."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "ENHANCING HANDS-ON EXPERIENCE WITH UNIQUE PROJECTS",
  projects: [
    {
      image: require("./assets/images/carla.png"),
      projectName: "Autonomous Vehicle using Cloud",
      projectDesc: "Built an EC2, ELB, and Auto-Scaling system for CARLA simulations, with Amazon RDS and MongoDB Atlas for data storage, and a user-friendly online dashboard.",
     /* footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]*/
    },
    {
      image: require("./assets/images/ubereats.jpeg"),
      projectName: "Uber Eats Clone",
      projectDesc: "Constructed a high-performing application with Redux, tested using JMeter, and reduced latency through MongoDB data pooling while configuring a Kafka Message queue.",
      /*footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]*/
    },
    {
      image: require("./assets/images/performance.webp"),
      projectName: "Performance Appraisal System",
      projectDesc: "Developed an employer performance tracking system with an admin-controlled appraisal cycle and rating-based employee evaluations.",
     /* footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]*/
    },
    {
      image: require("./assets/images/ecobuild.jpeg"),
      projectName: "Ecobuild",
      projectDesc: "Created an informative and educational app that provides location-based data on environmental metrics such as pollution, COVID-19 spread, chemical safety, and alternative fuels.",
     /* footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]*/
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hackathon",
      subtitle:
        "Second Runner up in my first hackathon which was organized by Thomson Reuters.",
      image: require("./assets/images/tr.jpeg"),
      imageAlt: "Hackathon Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1qKJrCwxZVsVYDluOTpwl3CiQBx63F76c/view?usp=sharing"
        },
      ]
    },
    {
      title: "Google Developer Student Club",
      subtitle:
        "Core team of the DSC CHARUSAT powered by Google. Representing the team as the Frontend and ML Lead. ",
      image: require("./assets/images/dsc.png"),
      imageAlt: "DSC",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/11utQrZuHitKjeB9Sz8LcQylhlXzpwsS-/view?usp=sharing"
        }
      ]
    },

    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "Completed Certifcation of AWS Certified Solutions Architect - Associate",
      image: require("./assets/images/aws.jpeg"),
      imageAlt: "AWS",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1imM6h_0q_psfLDaQcny7s5PaNzAdj8uy/view?usp=sharing"},
      ]
    },
    {
      title: "Microsoft certified Azure Data Fundamentals",
      subtitle: "Completed Certifcation of Microsoft certified Azure Data Fundamentals",
      image: require("./assets/images/azure.webp"),
      imageAlt: "Azure",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1imM6h_0q_psfLDaQcny7s5PaNzAdj8uy/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
  subtitle:
    "Highlighting My Research Endeavors: A Glimpse into My Academic Journey .",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  publications: [
    {
      url: "https://drive.google.com/file/d/1Tqup0C_noilHkjpLIBlemNVNTyX5ES90/view?usp=sharing",
      title: "Security Testing with JMeter",
      description:
        "Security testing ensures that confidential data remains confidential and that users can only perform authorized tasks. Web application penetration tests are crucial in the secure software development lifecycle to minimize security-related design and coding errors. Specialized areas of security testing require specific tools for testing."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Whatsapp group data chat analysis using big data analysis",
      description:
        "Technology has transformed communication, flooding the internet with unstructured data. Big Data analysis tools and text mining were used in a research paper to analyze WhatsApp group chats, revealing insights about emotions, user activity, and message counts."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections


// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Hire Me!",
  number: "+1 (860)593-6935",
  email_address: "patelsiddh1990@gmail.com"
};



const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable
};
