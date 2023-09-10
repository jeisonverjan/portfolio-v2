import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DarkModeProvider } from "./context/DarkModeContext";

import Projects from "./pages/Projects";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="projects/:projectId" element={<Project />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
