import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";
import SocialButtons from "./SocialButtons";
import TextReducer from "./TextReducer";
import ProjectInfo from "./ProjectInfo";

const project = {
  id: 14,
  name: "the wild oasis",
  shortDescription:
    "Streamlined cabin rental management. React app with Supabase integration.",
  description:
    "Elevate your cabin rental business with our React-based web application. Seamlessly interfacing with Supabase, this app empowers you to effortlessly manage reservations, check-ins, check-outs, user creation, and reservation status changes. The comprehensive system also offers real-time statistics, graphing income, reservations, check-ins, and check-outs. Protected by a robust authentication system, only authorized personnel can access the app. Powered by React Query and asynchronous processes, the app optimizes data handling, while React Hook Form ensures smooth user interactions. The inclusion of Recharts, date-fns, and error boundaries enhances the app's visual appeal, usability, and reliability. Seamless navigation is guaranteed with React Router, and the use of Styled Components enhances aesthetic flexibility. Dark mode and filtering features further enhance user experience, while Vite ensures fast, modern performance. Hosted on Vercel, the application combines accessibility and visual appeal. Whether you're managing reservations or analyzing financials, our app provides a comprehensive, responsive solution for streamlined cabin rental management.",
  projectLink: "https://the-wild-oasys-v1.vercel.app/",
  projectCode: "https://github.com/jeisonverjan/the-wild-oasys",
  difficultyLevel: "",
  mainPicture:
    "https://firebasestorage.googleapis.com/v0/b/storage-images-4b0f3.appspot.com/o/portfolio-projects-imgs%2Fthe-wild-oasys.png?alt=media&token=3c1cacba-faa9-45e7-b6c3-96b75afe674d",
  likes: 0,
  loves: 0,
  lastUpdate: "08/08/2023",
  technology: [
    "react",
    "reactquery",
    "supabase",
    "reactrouter",
    "reacthookform",
    "styledcomponents",
    "vite",
    "html5",
    "eslint",
    "vercel",
    "git",
  ],
  tags: [
    "asynchronous",
    "fetch",
    "recharts",
    "date-fns",
    "react-error-boundary",
    "react-hook-form",
    "protectedRoute",
    "useContext",
    "ES6",
    "react-hot-toast",
    "user management",
    "darkMode",
    "filter",
  ],
};

const StyledProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;

  .image {
    width: 100%;
    height: 25rem;
    transition: all 0.3s ease-in-out;
    margin: 0 auto;

    :hover {
      filter: opacity(0.9);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
    }
  }
`;

function ProjectContainer() {
  return (
    <StyledProjectContainer>
      <div className="image">
        <a href={project.projectLink} target="_blank" rel="noreferrer">
          <img src={project.mainPicture} alt="screenshot of the web page" />
        </a>
      </div>
      <SocialButtons padding="1.5rem" fontSize="4rem" />
      <ProjectInfo fontSizeTitle="3rem" fontSizeText="2rem">
        <h1>{project.name}</h1>
        <TextReducer numberWords={15}>{project.description}</TextReducer>
      </ProjectInfo>
    </StyledProjectContainer>
  );
}

export default ProjectContainer;
