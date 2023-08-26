import { styled } from "styled-components";

const StyledMain = styled.main`
  background-color: white;
  position: relative;
  height: 100%;
  .greeting {
    background-color: var(--primary);
    padding: 2rem;
    display: grid;
    justify-content: center;
    text-align: center;
    color: var(--on-primary);
    gap: 1rem;
    padding-bottom: 6rem;
    //height: 20%;
    z-index: 1;

    span:first-child {
      font-size: 1.8rem;
    }
    span:nth-of-type(2) {
      font-family: "Rubik", sans-serif;
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
    }
  }
  .profilePhoto {
    position: absolute;
    height: auto;
    width: 230px;
    top: 5rem;
    right: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: transparent;
    }
  }
`;

function Main() {
  return (
    <StyledMain>
      <div className="greeting">
        <span>Hi, I am</span>
        <span>Jeison Verjan</span>
      </div>
      <div className="profilePhoto">
        <img src="/public/profilePhotoMode.png" alt="portfolio owner" />
      </div>
    </StyledMain>
  );
}

export default Main;
