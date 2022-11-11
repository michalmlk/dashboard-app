import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import theme from '../assets/styles/theme';
import { Wrapper } from './App.styles';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path='/' element={<h1>dsads</h1>} />
              <Route path='/team' element={<h1>team</h1>} />
              <Route path='/' element={<h1>dsads</h1>} />
              <Route path='/' element={<h1>dsads</h1>} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default App;
