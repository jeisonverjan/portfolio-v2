import { styled } from "styled-components";
import { TiArrowBack } from "react-icons/ti";
import { BiCommentX } from "react-icons/bi";
import ButtonLink from "../ui/ButtonLink";
import { useNavigate } from "react-router-dom";

const StyledPageNotFound = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100dvh;
  background-color: var(--background);
`;

const Box = styled.div`
  background-color: var(--surface);
  color: var(--on-surface);
  font-family: inherit;
  display: grid;
  gap: 2rem;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  border-radius: 1rem;

  .button-box {
    margin: 0 auto;
    width: 15rem;
  }

  .title-box {
    display: flex;
    line-height: 0;
    align-items: center;
    gap: 2rem;

    .icon {
      font-size: 8rem;
      color: var(--error);
    }
  }
`;

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <StyledPageNotFound>
      <Box>
        <div className="title-box">
          <BiCommentX className="icon" />
          <h1>The page you are looking for could not be found</h1>
        </div>
        <div className="button-box">
          <ButtonLink
            text="Back"
            type="primary"
            size="medium"
            onClick={() => navigate("/")}
          >
            <TiArrowBack />
          </ButtonLink>
        </div>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
