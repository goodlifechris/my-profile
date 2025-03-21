import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Christopher",
  lastName: "Pius",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "App Developer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Nairobi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Basic Japanese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/goodlifechris",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/pius-christopher-3a28b341/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/goodlife_wagwan",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:christopherndugodata@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>App and Web developer</>,
  subline: (
    <>
      I'm Christopher, a seasoned software engineer, where I craft intuitive
      <br /> Mobile and Web application with UI/UX experiences in mind. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "Christopher Pius",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Christopher is a Kenyan based software engineer with a passion for transforming complex challenges
        into simple, elegant software solutions. His work spans digital interfaces, government interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
experiences: [
    {
      company: "Consultant Web and Mobile Engineering",
      timeframe: "2023 - Present",
     role: "Software Engineer",
     achievements: [
        "Developed Internal Innovation Challenge for Stanbic Zambia.",
        "Product developer on innovation portal during COVID-19 for Kenya Airways and Ministry of ICT.",
        "Created an educative portal for Graca Machel Trust to empower women.",
        "Worked with the University of Nairobi on an info-portal for a data-driven approach to control infectious diseases in Kenya & Africa."
      ],
      images: []
    },
    {
      company: "UXCRFT Ltd",
      timeframe: "2019 - 2023",
     role: "Founder and Software Engineer",
     achievements: [
        "Founded UXCRFT Ltd to mentor the community in coding and software development.",
        "Developed an Android interface for Hewani, a cutting-edge weather prediction project under Farasi Technologies in collaboration with MIT engineers. The app provided real-time insights into rainfall patterns, accurately forecasting when and where rain would fall before it happened. Designed for precision and usability, Hewani leveraged advanced meteorological data to deliver hyper-local predictions, revolutionizing weather tracking with seamless mobile integration.",
        "Worked on various innovation projects with the Ministry of Interior."
      ],
      images: []
    },
    {
      company: "Qhala Ltd",
      timeframe: "2019 - 2022",
     role: "Front-End Software Engineer",
     achievements: [
        "Front-end developer for the Huduma Namba project, enabling single-sign-on for government services.",
        "Contributed to the development of the National Education Management System.",
        "Researched and developed a hybrid app for Safaricom under Safaricom Alpha."
      ],
      images: []
    },
    {
      company: "Smart Business Solutions | Purple Fire",
      timeframe: "2017 - 2019",
     role: "Software Developer",
     achievements: [
        "Developed front-end applications for fintech clients like DTB Bank.",
        "Built innovative hybrid apps for Safaricom, focusing on research and development."
      ],
      images: []
    },
    {
      company: "WPP-Scangroup",
      timeframe: "2015 - 2017",
     role: "Internship Web & Android Developer",
     achievements: [
      "Developed an Android-based application that integrates with Mi Bands to track users' running activity. The app syncs data via an Android client and allows Safaricom employees to convert their steps into points. These points can be shared with their departments, enabling teams with the highest activity to participate in corporate social responsibility (CSR) initiatives. Built with a focus on real-time data syncing, user engagement, and promoting a healthy, impactful workplace culture. ",
      "Developed a church Android app as part of research and development.",
      "Created the Pampers IoT application using Estimote iBeacons for customer engagement."
      ],
      images: []
    }
  ]
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Strathmore University",
        description: <>Bachelor in business Information Technology.</>,
      },
      {
        name: "Strathmore University",
        description: <>Diploma in business information Technology.</>,
      },
      {
        name: "Strathmore University",
        description: <>CCNA.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React.js, Next.js",
        description: "Exceptional Quick development in Typescript frameworks.",
        images: []
      },
      {
        title: "Tailwind CSS, Ant Design, Material UI",
        description: "Expert in modern UI frameworks and styling solutions.",
        images: []
      },
      {
        title: "Vue.js, Nuxt.js",
        description: "Building next-gen apps with Vue.js and Nuxt.js.",
        images: []
      },
      {
        title: "Kotlin, Android",
        description: "Developing high-performance Android applications.",
        images: []
      },
      {
        title: "Dart, Flutter",
        description: "Building cross-platform mobile applications with Flutter.",
        images: []
      },
      {
        title: "MongoDB, PostgreSQL",
        description: "Experienced in NoSQL and SQL databases for scalable applications.",
        images: []
      },
      {
        title: "Figma, Adobe Illustrator",
        description: "Designing and prototyping user interfaces with Figma and Adobe tools.",
        images: []
      },
      {
        title: "Digital Ocean, AWS",
        description: "Deploying and managing cloud applications with Digital Ocean and AWS.",
        images: []
      }
    ]
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
