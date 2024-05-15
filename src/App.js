import {useState} from 'react';
import styled,{ThemeProvider} from 'styled-components';
import {lightTheme,darkTheme} from './utils/Themes';

const Container = styled.div`
  display: flex:
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;
function App() {
  //hooks
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar />
        Podstream

      </Container>
    </ThemeProvider>
    
  );
}

export default App;
