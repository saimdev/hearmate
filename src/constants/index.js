import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  benefitImage7,
  chromecast,
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
  companyLogo5,
  companyLogo7,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,

  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  notification2,
  notification3,
  notification4,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Hearing Solutions",
    url: "#hearing-solutions",
  },
  {
    id: "1",
    title: "Usage",
    url: "#how-to-use",
  },
  {
    id: "6",
    title: "Benefits",
    url: "#benefits",
  },
  {
    id: "6",
    title: "Why Choose Us",
    url: "#why-choose-us",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  companyLogo2,
  companyLogo3,
  companyLogo4,
  companyLogo5,
  companyLogo1,
  companyLogo7,
];

import {
  Ear,
  Volume2,
  Sliders,
  DollarSign,
  HeartPulse,
  Brain,
  Smartphone,
  ChartArea,
  AudioLines,
  Activity,
} from "lucide-react";

export const brainmastertServices = [
  "Noise Reduction",
  "Hearing Tests",
  "Affordable Solution",
];

export const brainmasterServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Noise Reduction",
    text: "Implement advanced noise reduction algorithms to enhance audio clarity in various environments.",
    date: "January 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Hearing Test",
    text: "Integrate a built-in hearing test feature for users to monitor their hearing health.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Suppressing User's Own Voice", // More descriptive title
    text: "Develop technology to minimize the user's own voice feedback for a more natural listening experience.",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Store to Buy AirPods", // More descriptive title
    text: "Create an integrated store within the app to allow users to conveniently purchase compatible AirPods.",
    date: "March 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "HearMate is designed to provide a seamless hearing experience with smart technology, personalized features, and unmatched comfort.";

export const collabContent = [
  {
    id: "0",
    title: "Need any smartphone Apple or Android",
  },
  {
    id: "1",
    title: "Need any Earbuds wired or wireless",

  },
  {
    id: "2",
    title: "HearMate Subscription Monthly or Annual",

  }
];


export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

// export const pricing = [
//   {
//     id: "0",
//     title: "Basic",
//     description: "AI chatbot, personalized recommendations",
//     price: "0",
//     features: [
//       "An AI chatbot that can understand your queries",
//       "Personalized recommendations based on your preferences",
//       "Ability to explore the app and its features without any cost",
//     ],
//   },
//   {
//     id: "1",
//     title: "Premium",
//     description: "Advanced AI chatbot, priority support, analytics dashboard",
//     price: "9.99",
//     features: [
//       "An advanced AI chatbot that can understand complex queries",
//       "An analytics dashboard to track your conversations",
//       "Priority support to solve issues quickly",
//     ],
//   },
//   {
//     id: "2",
//     title: "Enterprise",
//     description: "Custom AI chatbot, advanced analytics, dedicated account",
//     price: "199",
//     features: [
//       "An AI chatbot that can understand your queries",
//       "Personalized recommendations based on your preferences",
//       "Ability to explore the app and its features without any cost",
//     ],
//   },
// ];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Get started with essential hearing enhancement features.",
    price: "0",
    features: [
      "Effective Noise Reduction for everyday environments",
      "Easy-to-use Volume Control for comfortable listening",
      "Basic Sound Profiles for personalized audio experiences",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Unlock an enhanced hearing experience with advanced features.",
    price: "9.99",
    features: [
      "Advanced Noise Cancellation to minimize distracting background sounds",
      "Personalized Sound Profiles tailored to your specific hearing needs",
      "Built-in Hearing Tests to monitor your hearing health over time",
    ],
  },
  {
    id: "2",
    title: "Pro",
    description: "Experience ultimate hearing clarity and control with premium features.",
    price: "29.99",
    features: [
      "All Premium Features, including advanced noise cancellation ",
      "Premium Sound Profiles for the most refined listening experience",
      "Remote Audio Adjustments (if applicable)", // Only include if this feature exists
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Crystal-Clear Sound",
    text: "Experience rich, natural sound that enhances your listening experience.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    icon: AudioLines,
    imageUrl: benefitImage2,
    bg_color: "red",
  },
  {
    id: "1",
    title: "Personalized Hearing",
    text: "Tailor your listening profile to your specific needs and preferences.",
    backgroundUrl: "./assets/benefits/card-2.svg",
    icon: Ear,
    imageUrl: benefitImage3,
    light: true,
    bg_color: "red",
  },
  {
    id: "2",
    title: "Noise Reduction",
    text: "Minimize background noise and focus on the sounds you want to hear.",
    backgroundUrl: "./assets/benefits/card-3.svg",
    icon: Volume2,
    imageUrl: benefitImage4,
    bg_color: "red",
  },
  {
    id: "3",
    title: "Volume Control",
    text: "Easily adjust volume levels for comfortable listening in any environment.",
    backgroundUrl: "./assets/benefits/card-4.svg",
    icon: Sliders,
    imageUrl: benefitImage5,
    light: true,
    bg_color: "red",
  },
  {
    id: "4",
    title: "Hearing Tests",
    text: "Monitor your hearing health with built-in hearing test functionality.",
    backgroundUrl: "./assets/benefits/card-5.svg",
    icon: Activity,
    imageUrl: benefitImage6,
    bg_color: "red",
  },
  {
    id: "5",
    title: "Affordable Alternative",
    text: "Enjoy high-quality hearing enhancement without the high cost of traditional hearing aids.",
    backgroundUrl: "./assets/benefits/card-6.svg",
    icon: DollarSign,
    imageUrl: benefitImage7,
    bg_color: "red",
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];


// Advantages



export const advantagesData = [
  {
    id: 1,
    title: "Personalized Hearing",
    description: "Experience customized sound that adapts to your hearing needs.",
    image: "path-to-your-image/advantage1.png",
    icon: Ear,
  },
  {
    id: 2,
    title: "Noise Reduction",
    description: "Block out unwanted noise and focus on the sounds that matter.",
    image: "path-to-your-image/advantage2.png",
    icon: Volume2,
  },
  {
    id: 3,
    title: "Smart Volume Control",
    description: "Automatically adjusts sound levels based on your environment.",
    image: "path-to-your-image/advantage3.png",
    icon: Sliders,
  },
  {
    id: 4,
    title: "Affordable & Effective",
    description: "Get premium hearing enhancement without expensive hearing aids.",
    image: "path-to-your-image/advantage4.png",
    icon: DollarSign,
  },
  {
    id: 5,
    title: "Hearing Health Monitoring",
    description: "Built-in hearing tests to track and improve your hearing.",
    image: "path-to-your-image/advantage5.png",
    icon: HeartPulse,
  },
  {
    id: 6,
    title: "Report Generation with Graphs",
    description: "Get detailed reports and visual graphs to monitor your hearing progress.",
    image: "path-to-your-image/advantage6.png",
    icon: ChartArea,
  },
  {
    id: 8,
    title: "AI-Powered Sound Optimization",
    description: "Uses artificial intelligence to fine-tune sound for different environments.",
    image: "path-to-your-image/advantage8.png",
    icon: Brain,
  },
  {
    id: 11,
    title: "Easy App Control",
    description: "Control your hearing experience with a user-friendly mobile app.",
    image: "path-to-your-image/advantage11.png",
    icon: Smartphone,
  },
];



// Testimonial

export const testimonials = [
  {
    id: "0",
    name: "John Doe",
    review: "The sound quality is absolutely amazing! It feels so natural and immersive.",
    rating: 5,
    displayPicture: notification4,
    iconUrl: benefitIcon1,
    backgroundUrl: "./assets/benefits/card-1.svg",
    imageUrl: benefitImage7,
    light: true,
  },
  {
    id: "1",
    name: "Sarah Smith",
    review: "I love how I can personalize my listening experience. It's a game-changer!",
    rating: 4.5,
    displayPicture: notification2,
    iconUrl: benefitIcon2,
    backgroundUrl: "./assets/benefits/card-2.svg",
    imageUrl: benefitImage7,
    light: true,
  },
  {
    id: "2",
    name: "Michael Johnson",
    review: "The noise reduction feature helps me focus better. Definitely worth it!",
    rating: 5,
    displayPicture: notification3,
    iconUrl: benefitIcon4,
    backgroundUrl: "./assets/benefits/card-3.svg",
    imageUrl: benefitImage7,
    light: true,
  },
  {
    id: "3",
    name: "Emily Davis",
    review: "Adjusting volume levels has never been easier. Super convenient and effective!",
    rating: 4,
    displayPicture: notification4,
    iconUrl: benefitIcon3,
    backgroundUrl: "./assets/benefits/card-4.svg",
    imageUrl: benefitImage7,
    light: true,
  },
  {
    id: "4",
    name: "James Wilson",
    review: "I can now monitor my hearing health effortlessly. Highly recommend!",
    rating: 4.5,
    displayPicture: notification2,
    iconUrl: benefitIcon4,
    backgroundUrl: "./assets/benefits/card-5.svg",
    imageUrl: benefitImage7,
    light: true,
  },
  {
    id: "5",
    name: "Sophia Martinez",
    review: "Affordable and high-quality! I no longer need expensive hearing aids.",
    rating: 5,
    displayPicture: notification2,
    iconUrl: benefitIcon1,
    backgroundUrl: "./assets/benefits/card-6.svg",
    imageUrl: benefitImage7,
    light: true,
  },
];

