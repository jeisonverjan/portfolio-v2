import { ABOUT_ME } from "../utils/constants";
import { RESUME_LINK } from "../utils/constants";
import { styled } from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { BsDownload } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ButtonLink from "../ui/ButtonLink";

const StyledContainer = styled.div`
  background-color: var(--surface);
  padding: 0rem 2rem;
  text-align: center;
  display: grid;
  grid-template:
    "description"
    "buttons";
  height: 100%;

  .description {
    grid-area: description;
    color: var(--on-surface);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    h1 {
      font-family: "Rubik", sans-serif;
    }
    span {
      font-family: "Lora", serif;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: var(--primary);

      h2 {
        font-size: 1.5rem;
        color: var(--on-surface);
      }
    }
    p {
      text-align: justify;
    }
  }

  .image {
    grid-area: image;
    width: 70%;
    height: auto;
    margin: 0 auto;
    display: none;
    margin: 0 auto;
    filter: drop-shadow(0.5rem 0.5rem 0.5rem var(--primary));
  }

  .buttons {
    grid-area: buttons;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-content: center;
    margin-bottom: 1rem;
    max-height: 4rem;
  }

  @media (min-width: 768px) {
    grid-template:
      "image description" auto
      "image buttons" auto / 1fr 1.5fr;

    .description {
      font-size: 1.8rem;
      padding-right: 2rem;

      span {
        font-size: 3rem;
        h2 {
          font-size: 2.5rem;
        }
      }
    }

    .image {
      display: grid;
      place-content: center;
    }

    .buttons {
      gap: 4rem;
    }
  }
`;

function AboutMeContainer() {
  return (
    <StyledContainer>
      <div className="description">
        <h1>About me</h1>
        <span>
          <FaLocationDot />
          <h2>Bogota, Colombia</h2>
        </span>
        <p>{ABOUT_ME}</p>
      </div>
      <div className="image">
        <img src="/aboutMe.png" alt="one and zero circle" />
      </div>
      <div className="buttons">
        <ButtonLink
          text="Resume"
          type="primary"
          size="medium"
          href={RESUME_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <BsDownload />
        </ButtonLink>

        <ButtonLink
          text="E-mail"
          type="primary"
          size="medium"
          href="mailto:jeisonverjan@gmail.com"
        >
          <MdEmail />
        </ButtonLink>
      </div>
    </StyledContainer>
  );
}

export default AboutMeContainer;
