import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import { styled } from "styled-components";

const StyledFlicking = styled(Flicking)`
  width: 100%;
  background-color: var(--background);
  span {
    font-size: 1rem;
    margin-right: 5rem;
    margin-top: auto;
    background-color: lightgray;
    border-radius: 0.5rem;
    padding: 0%.5rem;
    box-shadow: var(--shadow-lg);
  }
`;


function SliderTest() {
  const plugins = [
    new AutoPlay({ duration: 2500, direction: "NEXT", stopOnHover: false }),
  ];
  return (
      <StyledFlicking
        plugins={plugins}
        moveType="freeScroll"
        bound={true}
        circular={true}
      >
        <span className="button mr-2 is-white">🍎 Apple</span>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        <span className="button mr-2 is-white">🥝 Kiwi</span>
        <span className="button mr-2 is-white">🍎 Apple</span>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        <span className="button mr-2 is-white">🥝 Kiwi</span>
        <span className="button mr-2 is-white">🍎 Apple</span>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        <span className="button mr-2 is-white">🥝 Kiwi</span>
        <span className="button mr-2 is-white">🍎 Apple</span>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        <span className="button mr-2 is-white">🥝 Kiwi</span>
        <span className="button mr-2 is-white">🍎 Apple</span>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        <span className="button mr-2 is-white">🥝 Kiwi</span>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        <span className="button mr-2 is-white">🥝 Kiwi</span>
        <span className="button mr-2 is-white">🍎 Apple</span>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        <span className="button mr-2 is-white">🥝 Kiwi</span>
        <span className="button mr-2 is-white">🍎 Apple</span>
        <span className="button mr-2 is-white">🍉 Watermelon</span>
        <span className="button mr-2 is-white">🥝 Kiwi</span>
      </StyledFlicking>
  );
}

export default SliderTest;
