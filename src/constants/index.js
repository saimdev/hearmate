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
  notification2,
  notification3,
  notification4,
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
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "How to use",
    url: "#how-to-use",
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
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
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

export const brainmastertServices = [
  "AI Conversation Practice",
  "Personalized Language Tutoring",
  "AI Language Partner",
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
    title: "AI Conversation Practice",
    text: "Enable realistic, interactive conversations with the AI, including role-playing and scenario-based learning.",
    date: "January 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Personalized Learning Plans",
    text: "Develop customized learning paths based on individual user progress and learning goals.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Pronunciation Feedback",
    text: "Provide real-time feedback on user pronunciation, helping them improve their speaking skills.",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Multi-Language Support",
    text: "Expand language offerings to include more languages beyond the initial set.",
    date: "March 2024",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
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
    description: "Start learning with limited AI conversations.",
    price: "0",
    features: [
      "Limited access",
      "Basic vocabulary",
      "Community forum access",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Unlock unlimited AI conversations and personalized learning.",
    price: "9.99", // Or adjust as needed
    features: [
      "Unlimited AI conversation practice",
      "Personalized learning plans",
      "Advanced vocabulary and grammar",
    ],
  },
  {
    id: "2",
    title: "Pro", // Changed from Enterprise to Pro, more fitting for individual learners
    description: "Master any language with personalized coaching",
    price: "29.99", // Or adjust as needed
    features: [
      "All Premium features",
      "One-on-one coaching sessions", // Or specify frequency
      "Personalized feedback",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Speak Fluently",
    text: "Practice speaking with our AI chat partner and gain confidence in your conversational skills.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Learn Anytime, Anywhere",
    text: "Access your AI language tutor on any device, whenever you have time to learn.",
    backgroundUrl: "./assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "2",
    title: "Personalized Learning",
    text: "Our AI adapts to your learning style and pace, providing customized lessons and feedback.",
    backgroundUrl: "./assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage4,
  },
  {
    id: "3",
    title: "Instant Feedback",
    text: "Receive immediate feedback on your pronunciation and grammar, helping you improve quickly.",
    backgroundUrl: "./assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage5,
    light: true,
  },
  {
    id: "4",
    title: "Engaging Conversations",
    text: "Enjoy realistic and interactive conversations with our AI, making language learning fun and engaging.",
    backgroundUrl: "./assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage6,
  },
  {
    id: "5",
    title: "Expand Your Vocabulary",
    text: "Learn new words and phrases in context, enriching your vocabulary and language proficiency.",
    backgroundUrl: "./assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage7,
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
