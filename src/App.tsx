import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import About from './components/Sections/About/About';
import Faq from './components/Sections/Faq/Faq';
import Home from './components/Sections/Home/Home';
import RoadMap from './components/Sections/Roadmap/RoadMap';
import ShowCase from './components/Sections/ShowCase/ShowCase';
import Team from './components/Sections/Team/Team';
import GlobalStyles from './styles/Global';
import { light, dark } from './styles/Themes';

function App() {
  return (
    <>
      <GlobalStyles />
        <ThemeProvider theme={light}> 
          <Navigation />
          <Home />
          <About />
          <RoadMap />
          <ShowCase />
          <Team />
          <Faq />
          <Footer />
        </ThemeProvider>
    </>
  );
}

export default App;
