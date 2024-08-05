interface ExternalLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  X?: string;
  behance?: string;
  dribbble?: string;
  github?: string;
  twitter?: string;
  youtube?: string;
  pinterest?: string;
  website?: string;
  medium?: string;
  reddit?: string;
  tiktok?: string;
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
  externalLinks?: ExternalLinks;
}

const users: UserProps[] = [
  {
    name: "Divakar C T",
    designation: "Application Development Lead",
    description: "overseeing the creation of advanced applications and integrating cutting-edge generative AI technologies. He leads a team of developers, ensuring high performance and innovative AI-driven solutions to drive the company's strategic goals.",
    companyName: "XYLOINC",
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
    description: "As an Application Development Intern specializing in Java, MERN stack, and Next.js, he contributes to the creation of advanced applications by integrating cutting-edge generative AI technologies. He collaborates with a team of developers, ensuring high performance and innovative AI-driven solutions to support the company's strategic goals.",
    companyName: "XYLOINC",
    gender: "male",
    photo: "",
    phoneNumber: "9566367838",
    CreatorName: "PRODUCT BY XYLOINC",
    emailId: "nishanthkr.xyloinc.2024@gmail.com",
    externalLinks: {
      linkedin: "https://www.linkedin.com/in/nishanth-k-r-0ab0aa22a/",
      github: "https://github.com/nishanth-kr1321",
      instagram: "https://www.instagram.com/__nishanth_13/",
    }
  },
  {
    name: "Sivasankari S",
    designation: "Digital Business Improvement Associate",
    description: "At Xyloinc collaborating closely with cross-functional teams to streamline workflows, boost efficiency, and ensure the successful execution of digital initiatives. Her expertise in digital business improvement, combined with her strategic thinking, makes her a valuable asset to the company.",
    companyName: "Xyloinc",
    gender: "female",
    photo: "",
    phoneNumber: "9944047438",
    CreatorName: "Product By Xyloinc",
    emailId: "sankari.s@xyloinc.com",
    externalLinks: {
      linkedin: "https://www.linkedin.com/in/sivasankari-subramania/",
      instagram: "https://www.instagram.com/i_shankari_subramanian_"
    }
  },
  {
    name: "Praba R C",
    designation: "Founder & CEO",
    description: "At Xyloinc leading with a visionary approach and an unwavering commitment to innovation. Under my leadership, Xyloinc has achieved remarkable growth and has successfully navigated the challenges of the digital landscape. With a keen eye for identifying market opportunities and a strategic mindset, we have propelled the company to new heights.",
    companyName: "Xyloinc",
    gender: "male",
    photo: "",
    phoneNumber: "9791135646",
    CreatorName: "Product By Xyloinc",
    emailId: "praba@xyloinc.com",
    externalLinks: {
      linkedin: "https://www.linkedin.com/in/praba-rc/",
      // instagram: "https://www.instagram.com/i_shankari_subramanian_"
    }
  }
];

export default users;
