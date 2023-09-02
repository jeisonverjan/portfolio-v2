import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledProjectGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1rem;
`;

const projects = [
  {
    id: 1,
    name: "bank app",
    shortDescription: "Manage finances, transactions & credits.",
    projectLink: "https://bankappl.netlify.app/",
    difficultyLevel: "beginner",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FbankAppMain.PNG?alt=media&token=4bbe9dd0-6416-41e1-b471-105c5180048b",
    likes: 150,
    loves: 350,
  },
  {
    id: 2,
    name: "poke api",
    shortDescription: "Random Pokémon info cards, responsive.",
    projectLink: "https://frontendpokeapi.netlify.app/",
    difficultyLevel: "beginner",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FpokeApiMain.png?alt=media&token=eea38a4d-8b62-4e28-a403-fff9aeb0ba29",
    likes: 0,
    loves: 15,
  },
  {
    id: 3,
    name: "quote generator",
    shortDescription: "Random quotes displayed instantly.",
    projectLink: "https://jsquotegenerator.netlify.app/",
    difficultyLevel: "beginner",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FquoteGeneratorMain.PNG?alt=media&token=59a136b3-3908-4484-9e64-3eb90b3eafc4",
    likes: 250,
    loves: 0,
  },
  {
    id: 4,
    name: "todo app",
    shortDescription: "Task manager with localStorage",
    projectLink: "https://jstodoappl.netlify.app/",
    difficultyLevel: "beginner",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FtodoAPPmain.PNG?alt=media&token=4d9b4e23-d70b-4eb1-8e47-6e3d3e845860",
    likes: 1,
    loves: 0,
  },
  {
    id: 5,
    name: "usePopcorn",
    shortDescription:
      "Discover, rate, and track movies. Responsive React movie app",
    projectLink: "https://usepopcorn-v2.netlify.app/",
    difficultyLevel: "intermediate",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FusePopcornMain.JPG?alt=media&token=a42ec28a-45b5-4048-8ccc-50cadf69f0ca",
    likes: 10,
    loves: 9,
  },
  {
    id: 6,
    name: "dishHunt",
    shortDescription: "Explore, cook, and save recipes.",
    projectLink: "https://dishhunt.netlify.app/",
    difficultyLevel: "intermediate",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FdishHuntMain.JPG?alt=media&token=f28de941-21b2-49ab-8c11-00bbc20c8496",
    likes: 0,
    loves: 0,
  },
  {
    id: 7,
    name: "maphy",
    shortDescription:
      "Geo-based game. Click world map, earn points. Responsive fun.",
    projectLink: "https://maphy.netlify.app/",
    difficultyLevel: "intermediate",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FmaphyMain.JPG?alt=media&token=36eb5231-d662-48ea-907c-af3e753aaaf4",
    likes: 1500,
    loves: 230,
  },
  {
    id: 8,
    name: "pet adoption",
    shortDescription:
      "Flask-powered pet adoption. Responsive, user-friendly, adoption platform",
    projectLink: "https://pet-adoption-github-io.vercel.app/",
    difficultyLevel: "intermediate",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FpetAdoptionMain.png?alt=media&token=b9a2f1b7-c546-4a75-a67e-61b7ee5d80ca",
    likes: 0,
    loves: 0,
  },
  {
    id: 9,
    name: "open trivia",
    shortDescription:
      "Engaging React quiz game. Responsive, knowledge-testing fun",
    projectLink: "https://open-trivia-v2.netlify.app/",
    difficultyLevel: "intermediate",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FopenTriviaMain.JPG?alt=media&token=67d09bb9-17e1-412d-9ba4-c7e667e067d7",
    likes: 0,
    loves: 0,
  },
  {
    id: 10,
    name: "weather app",
    shortDescription: "Swift weather forecasts. Real-time React weather app.",
    projectLink: "https://weather-app-v4.netlify.app/",
    difficultyLevel: "intermediate",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FweatherAppMain.JPG?alt=media&token=dbfd02ed-b259-489d-af47-466ac7a957e8",
    likes: 0,
    loves: 0,
  },
  {
    id: 11,
    name: "JML analyzer",
    shortDescription:
      "Data analysis app. Node, Express, MongoDB for advanced analytics.",
    projectLink: "https://jml-analizer-github-io.vercel.app/",
    difficultyLevel: "advanced",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FjmlAnalyzerMain.JPG?alt=media&token=d45535a3-1e3b-4ad1-aae5-ab669a5706a9",
    likes: 0,
    loves: 0,
  },
  {
    id: 12,
    name: "react shopping cart",
    shortDescription: "Effortless pizza ordering",
    projectLink: "https://pizza-shopping-kart.netlify.app/",
    difficultyLevel: "advanced",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FreactCartMain.JPG?alt=media&token=ca459505-d4f4-4274-b594-b65b540769f2",
    likes: 45,
    loves: 2,
  },
  {
    id: 13,
    name: "world wise",
    shortDescription:
      "World-travel mapping. React app with Auth0, Firebase, and interactive maps",
    projectLink: "https://worldwise-v2.vercel.app/",
    difficultyLevel: "advanced",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FworldWiseMain.JPG?alt=media&token=5d9f0d8f-4943-4fd0-920c-01e39ac291c5",
    likes: 10,
    loves: 9,
  },
  {
    id: 14,
    name: "the wild oasis",
    shortDescription:
      "Streamlined cabin rental management. React app with Supabase integration.",
    projectLink: "https://the-wild-oasys-v1.vercel.app/",
    difficultyLevel: "",
    mainPicture:
      "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2FtheWildOasysMain.JPG?alt=media&token=18c30536-6412-4fac-bc0b-c3778c4d3c92",
    likes: 150,
    loves: 320,
  },
];

function ProjectGallery() {
  return (
    <StyledProjectGallery>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </StyledProjectGallery>
  );
}

export default ProjectGallery;
