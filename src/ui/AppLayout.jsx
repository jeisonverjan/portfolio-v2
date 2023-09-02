import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: grid;
  max-width: 100%;
  min-height: 100dvh;
  max-height: 100dvh;
  //overflow: hidden;
  grid-template:
    "header" 8rem
    "main" auto
    "footer" 5rem / 100%;
`;

const Main = styled.div`
  grid-area: main;
`;

function AppLayout() {
  return (
    <div>
      <StyledAppLayout>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </StyledAppLayout>
    </div>
  );
}

export default AppLayout;
