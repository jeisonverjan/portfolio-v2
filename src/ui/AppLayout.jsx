import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: grid;
  width: 100%;
  min-height: 100dvh;
  max-height: 100dvh;
  overflow: hidden;
  grid-template:
    "header" 8rem
    "main" auto
    "footer" 10%;
`;

function AppLayout() {
  return (
    <div>
      <StyledAppLayout>
        <Header />
        <Outlet />
        <Footer />
      </StyledAppLayout>
    </div>
  );
}

export default AppLayout;
