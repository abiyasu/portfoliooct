import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'

const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={(lightTheme)}>
      <Body>Portfolio</Body>
    </ThemeProvider>
  );
}

export default App;
