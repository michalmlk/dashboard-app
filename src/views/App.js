import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DashboardProvider } from '../providers/DashboardProvider';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import theme from '../assets/styles/theme';
import { Wrapper } from './App.styles';
import Team from './Team/Team';
import Form from './Form/Form';
import Tasks from './Tasks/Tasks';
import Profile from './Profile/Profile';
import BarContainer from './Bar/Bar';
import Assign from './Assign/Assign';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <DashboardProvider>
          <GlobalStyle />
          <MainTemplate>
            <Wrapper>
              <Routes>
                <Route path='/' element={<h1>dsads</h1>} />
                <Route path='/team' element={<Team />} />
                <Route path='/form' element={<Form />} />
                <Route path='/bar' element={<BarContainer />} />
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/assign-task' element={<Assign />} />
              </Routes>
            </Wrapper>
          </MainTemplate>
        </DashboardProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
