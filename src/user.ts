interface ExternalLinks {
  mobile?: string;
  email?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  snapchat?: string;
  pinterest?: string;
  reddit?: string;
  tiktok?: string;
  youtube?: string;
  whatsapp?: string;
  whatsappBusiness?: string;
  wechat?: string;
  telegram?: string;
  vimeo?: string;
  flickr?: string;
  xing?: string;
  viadeo?: string;
  quora?: string;
  discord?: string;
  git?: string;
  yelp?: string;
  tripAdvisor?: string;
  glassdoor?: string;
  behance?: string;
  medium?: string;
  dribbble?: string;
  github?: string;
  website?: string;
  X?:string;
 
}



export interface UserProps {
  name: string;
  designation: string;
  description: string;
  companyName: string;
  photo: string;
  phoneNumber: string;
  gender: "male" | "female",
  emailId: string;
  CreatorName: string;
  employeeid?:string;
  employeeDepartment?:string;
  externalLinks?: ExternalLinks;
}

const users: UserProps[] = [
  {
    name: "Divakar C T",
    designation: "Application Development Lead",
    description: "overseeing the creation of advanced applications and integrating cutting-edge generative AI technologies. He leads a team of developers, ensuring high performance and innovative AI-driven solutions to drive the company's strategic goals.",
    companyName: "XYLOINC",
    employeeid:"XDC-123",
    employeeDepartment:"Software Development",
    photo: "",
    gender: "male",
    phoneNumber: "9500291638",
    CreatorName: "PRODUCT BY XYLOINC",
    emailId: "divakar.ct@xyloinc.com",
    externalLinks: {
      linkedin: "https://www.linkedin.com/in/myself-dhivi",
      medium: "https://medium.com/@myselfdhivi",
      behance: "https://behance.net/myself_dhivi",
      github: "https://github.com/myself-dhivi",
    }
  },
  {
    name: "Nishanth K R",
    designation: "Application Development Intern",
    description: "At XYLOINC creating ideas and dreams into innovative and industry leading products , You name it and we make it .",
    companyName: "XYLOINC",
    employeeid:"I-XDC-512",
    employeeDepartment:"Product Design",
    gender: "male",
    photo: "",
    phoneNumber: "9566367838",
    CreatorName: "PRODUCT BY XYLOINC",
    emailId: "nishanthkr.xyloinc.2024@gmail.com",
    externalLinks: {
      linkedin: "https://www.linkedin.com/in/nishanth-k-r-0ab0aa22a/",
      github: "https://github.com/nishanth-kr1321",
      instagram: "https://www.instagram.com/__nishanth_13/"
      
      
    }
  },
  {
    name: "Sivasankari S",
    designation: "Head HR Recruitment | DBI Senior Associate",
    description: "At Xyloinc collaborating closely with cross-functional teams to streamline workflows, boost efficiency, and ensure the successful execution of digital initiatives. Her expertise in digital business improvement, combined with her strategic thinking, makes her a valuable asset to the company.",
    companyName: "XYLOINC",
    employeeid:"XDC-124",
    employeeDepartment:"BDE senior and HR",
    gender: "female",
    photo: "",
    phoneNumber: "9944047438",
    CreatorName: "PRODUCT OF XYLOINC",
    emailId: "sankari.s@xyloinc.com",
    externalLinks: {
      linkedin: "https://www.linkedin.com/in/sivasankari-subramania/",
      instagram: "https://www.instagram.com/i_sankari_subramanian_"
    }
  },
  {
    name: "Praba R C",
    designation: "Founder & CEO",
    description: "At Xyloinc leading with a visionary approach and an unwavering commitment to innovation. Under my leadership, Xyloinc has achieved remarkable growth and has successfully navigated the challenges of the digital landscape. With a keen eye for identifying market opportunities and a strategic mindset, we have propelled the company to new heights.",
    companyName: "XYLOINC",
    gender: "male",
    photo: "",
    phoneNumber: "9791135646",
    CreatorName: "PRODUCT OF XYLOINC",
    emailId: "praba@xyloinc.com",
    externalLinks: {
      linkedin: "https://www.linkedin.com/in/praba-rc/",
      
    }
  },
  {
    name: "Prasanna S",
    designation: "Application Development Intern",
    description:"At Xyloinc,a dedicated Application Developer specializing in crafting responsive and user-friendly mobile applications using React Native and Expo. With a keen eye for detail and a passion for innovative solutions,consistently deliverying high-quality applications that enhance user experience. His expertise in mobile development ensures that each project not only meets but exceeds client expectations.",
    companyName: "XYLOINC",
    employeeid:"I-XDC-514",
    employeeDepartment:"Product Design",
    gender:"male",
    photo: "",
    phoneNumber: "6380258932",
    CreatorName:"PRODUCT OF XYLOINC",
    emailId: "rahulprasanna012@gmail.com",
    externalLinks: {
      linkedin: "https://www.linkedin.com/in/prasanna-samson/",
      github: "https://github.com/prasanna-samson",
      X:"https://x.com/PRASANNA120503",
       }
  },
{
  name: "Nishanth S",
  designation: "Application Development Intern",
  description: "As an Application Development intern at Xyloinc, Nishanth S specializes in Java, Spring Boot, Postgres, and MongoDB. He is dedicated to contributing to the creation of advanced applications by integrating cutting-edge technologies.",
  companyName: "XYLOINC",
  employeeid:"I-XDC-513",
  employeeDepartment:"Product Design",
  gender: "male",
  photo: "",
  phoneNumber: "9385905366",
  CreatorName: "PRODUCT OF XYLOINC",
  emailId: "nishanth.xyloinc.2024@gmail.com",
  externalLinks: {
    linkedin: "https://www.linkedin.com/in/nishanth-s-915632252",
    github: "https://github.com/Nishanth1010",
    instagram:"https://www.instagram.com/nishanthh__02"
  }
  },
{
  name: "Latangi M",
  designation: "UI UX Engineer",
  description: " Senior UI/UX Engineer specializing in intuitive, engaging designs using design tools and collaborating with developers. Expert in user research, wireframing, and responsive design for seamless user experiences.",
  companyName: "XYLOINC",
  employeeid:"I-XDC-511",
  employeeDepartment:"Product Design",
  gender:"female",
  photo: "",
  phoneNumber: "8637652138",
  CreatorName:"PRODUCT OF XYLOINC",
  emailId: "latangi.m@xyloinc.com",
  externalLinks: {
    linkedin: " https://www.linkedin.com/in/latangi-murali-43448b238?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B48D0pa%2B7Ty60MXrLocTdZA%3D%3D",
    github: "https://github.com/latangi",
    }
  },
{
  name: "Rathijah R",
  designation: "Application Development Intern",
  description: "At Xyloinc,excelling in building responsive mobile applications using React Native and Expo.Expertise in ensuring the delivery of high-quality, user-friendly apps that meet the latest industry standards.",
  companyName: "XYLOINC",
  employeeid:"I-XDC-516",
  employeeDepartment:"Product Design",
  gender: "female",
  photo: "",
  phoneNumber: "7598373822",
  CreatorName: "PRODUCT OF XYLOINC",
  emailId: "rathijah.xyloinc.2024@gmail.com",
  externalLinks: {
    linkedin: "https://www.linkedin.com/in/rathijah-r-1962882388",
    github: "https://github.com/Rathijah",
    instagram:"https://www.instagram.com/rathija_raja_004"
  }
},
{
  name: "Rajapriya R",
  designation: "Application Development intern",
  description: "At Xyloinc,An adept Application Development intern focused on building responsive websites using ReactJS.Contributions ensuring the creation of modern, high-performance web applications that provide seamless user experiences.",
  companyName: "XYLOINC",
  employeeid:"I-XDC-515",
  employeeDepartment:"Product Design",
  gender: "female",
  photo: "",
  phoneNumber: "7904943774",
  CreatorName: "PRODUCT OF XYLOINC",
  emailId: "rajapriya.xyloinc.2024@gmail.com",
  externalLinks: {
    linkedin: "www.linkedin.com/in/rajapriya08",
    github: "https://github.com/rajapriyaRamadoss",
    instagram:"https://www.instagram.com/_rajapriya_08"
  }
},
{
  name: "Swetha R",
  designation: "Application Development intern",
  description: "At Xyloinc, An Application Development intern specializing in building responsive websites using Node.js and Express.Contributing to creating robust and efficient web applications that enhance user experiences.",
  companyName:"XYLOINC",
  employeeid:"I-XDC-517",
  employeeDepartment:"Product Design",
  gender: "female",
  photo: "",
  phoneNumber: "9345707597",
  CreatorName: "PRODUCT OF XYLOINC",
  emailId: "swetha.xyloinc.2024@gmail.com",
  externalLinks: {
    linkedin: "www.linkedin.com/in/swetharamamoorthy",
    github: "https://github.com/SwethaRamoorthi",
    instagram: "https://www.instagram.com/swetha_ramamoorthy_2003"
  }
},
{
  name: "Manikandan PP",
  designation: "UI/UX Designer Internship",
  description: "At Xyloinc,A talented UI/UX Designer intern focused on creating responsive websites and mobile applications.Expertise in ensuring visually appealing and user-friendly designs that enhance overall user experience.",
  companyName: "XYLOINC",
  employeeid:"I-XDC-518",
  employeeDepartment:"Product Design",
  gender: "male",
  photo: "",
  phoneNumber: "8438598035",
  CreatorName: "PRODUCT OF XYLOINC",
  emailId: "manikandanpp.xyloinc.2024@gmail.com",
  externalLinks: {
    linkedin: "https://www.linkedin.com/in/mani-kandan-pp",
    behance: "https://behance.net/manikandan315",
    github: "https://github.com/MANIKANDANP23"
  }
},
];

export default users;
