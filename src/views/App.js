import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavigationProvider } from '../providers/NavigationProvider';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import theme from '../assets/styles/theme';
import { Wrapper } from './App.styles';
import Team from './Team/Team';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavigationProvider>
          <GlobalStyle />
          <MainTemplate>
            <Wrapper>
              <Routes>
                <Route path='/' element={<h1>dsads</h1>} />
                <Route path='/team' element={<Team />} />
                <Route path='/' element={<h1>dsads</h1>} />
                <Route path='/' element={<h1>dsads</h1>} />
              </Routes>
            </Wrapper>
          </MainTemplate>
        </NavigationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
