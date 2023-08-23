import IconGenerator from "./ui/iconGenerator";

function App() {
  const technology = [
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
    "cssmodules"
  ];
  return <IconGenerator technology={technology} />;
}

export default App;
