import { styled } from "styled-components";
import ContactIcons from "./ContactIcons";
import ButtonProjects from "./ButtonProjects";

const StyledMain = styled.main`
  display: grid;
  grid-template:
    "greeting greeting" 30%
    "profession photo"
    "contactIcons photo"
    "projects-button photo" / 1fr 3fr;
  background-color: var(--surface);
  color: var(--on-surface);
  height: 100%;

  .greeting {
    grid-area: greeting;
    background-color: var(--primary);
    color: var(--on-primary);
    display: grid;
    place-content: center;
    text-align: center;

    .greet {
      font-size: 3.5rem;
    }
    .name {
      font-family: "Rubik", sans-serif;
      font-size: 5rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      display: flex;
      gap: 1rem;
    }
  }
  .profilePhoto {
    grid-area: photo;
    display: grid;
    overflow: hidden;
    margin-top: -3rem;
    img {
      width: 280px;
      height: 100%;
      background-color: transparent;
      filter: drop-shadow(0.2rem 0rem 0.3rem var(--primary));
    }
  }

  .profession {
    grid-area: profession;
    font-family: "Rubik";
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 2.5rem;
    font-weight: bolder;
    padding: 1rem 0.5rem;
    text-align: center;
    line-height: 0.8;
  }

  @media (min-width: 768px) {
    grid-template:
      "greeting photo"
      "profession photo"
      "contactIcons photo"
      "projects-button photo";
    .profilePhoto {
      .photo-bg {
        width: 100%;
        height: 100%;
        background-color: var(--primary);
        grid-area: 1 / 1 / 2 / 2;
        clip-path: polygon(100% 1%, 0 0, 100% 100%);
      }
      img {
        z-index: 3;
        margin: 0 auto;
        width: 40rem;
        height: 100%;
        grid-area: 1 / 1 / 2 / 2;
      }
    }
    .greeting {
      background-color: var(--surface);
      color: var(--on-surface);
      padding-top: 2rem;

      .greet {
        font-size: 3rem;
      }
      .name {
        font-size: 6rem;
        flex-direction: column;
        line-height: 1;
        font-weight: 900;
        text-transform: uppercase;
      }
    }
    .profession {
      justify-content: center;
      gap: 0.5rem;
      font-size: 4rem;
    }
  }
`;

function Main() {
  return (
    <StyledMain>
      <div className="greeting">
        <span className="greet">Hi, I am</span>
        <div className="name">
          <span>Jeison</span>
          <span>Verjan</span>
        </div>
      </div>
      <div className="profilePhoto">
        <div className="photo-bg"></div>
        <img src="/public/profilePhotoMode.png" alt="portfolio owner" />
      </div>
      <div className="profession">
        <span>Full-Stack</span>
        <span>Developer</span>
      </div>
      <ContactIcons />
      <ButtonProjects />
    </StyledMain>
  );
}

export default Main;
