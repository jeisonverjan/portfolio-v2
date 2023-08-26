import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary: #622aff;
  --primary-variant: #dccfed;
  --secondary: #331c52;
  --background: #ffffff;
  --surface: #e1ebed;
  --error: #b00020;
  --on-primary: #ffffff;
  --on-secondary: #ffffff;
  --on-background: #253034;
  --on-surface: #253034;
  --on-error: #ffffff;

  --shadow-sm: 0 0.16rem 0.32rem 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 0.64rem 0.96rem -0.16rem rgba(0, 0, 0, 0.1),
    0 0.32rem 0.64rem -0.16rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 1.6rem 2.4rem -0.48rem rgba(0, 0, 0, 0.1),
    0 0.64rem 0.96rem -0.32rem rgba(0, 0, 0, 0.05);
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  min-height: 100dvh;
}

body {
  font-family: 'Nunito', sans-serif;

  transition: color 0.3s, background-color 0.3s;
  min-height: 100dvh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  //filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

.active {
  color: var(--primary);
}

`;

export default GlobalStyles;
