import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Computer Vision",
    icon: web,
  },
  {
    title: "Natural Language Processing",
    icon: mobile,
  },
  {
    title: "NodeJS and RestAPI",
    icon: backend,
  },
  {
    title: "Databases",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "tensorflow",
    icon: "https://img.icons8.com/color/512/tensorflow.png",
  },
  {
    name: "pytorch",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/640px-PyTorch_logo_icon.svg.png",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Tensorflow (2023) and Web development (2022) certifications",
    name: "Udemy",
  },
  {
    testimonial:
      "2 ⭐ Competetive programmer (2022 - present)",
    name: "Codechef",
  },
  {
    testimonial:
      "Runner Up in Srushti State Level Hackathon (2022)",
    name: "BMS, Bengaluru",
  },
];

const projects = [
  {
    name: "AI Art Discriminator",
    description:
      "Resnet-V2-50 Model trained to differentiate AI art and human art",
    tags: [
      {
        name: "cnn",
        color: "blue-text-gradient",
      },
      {
        name: "imageprocessing",
        color: "green-text-gradient",
      },
      {
        name: "transferlearning",
        color: "pink-text-gradient",
      },
    ],
    image: "https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg",
    source_code_link: "https://github.com/kausthub-kannan/all-ml-notebboks/blob/main/AI%20Image%20Detection.ipynb",
  },
  {
    name: "Poultry Diseases Detection",
    description:
      "Poultry Diseases Detection via feces using MobileNet-V2 model.",
    tags: [
      {
        name: "cnn",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "transferlearning",
        color: "pink-text-gradient",
      },
    ],
    image: "https://w0.peakpx.com/wallpaper/33/184/HD-wallpaper-baby-chicks-cute-tiny-two-chicken-chicks.jpg",
    source_code_link: "https://github.com/kausthub-kannan/all-ml-notebboks/blob/main/poultry-disease-detection.ipynb",
  },
  {
    name: "Skimlite",
    description:
      "NLP model which is capable of summerizing a medical research paper into Method, Objectives and others",
    tags: [
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
      {
        name: "tokens",
        color: "green-text-gradient",
      },
      {
        name: "tensroflow-hub",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ds.at/Z0XzOA/rs:fill:750:0/plain/2022/07/11/lofi.jpg",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
