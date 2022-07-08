import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import About from './Sections/About/About';
import Faq from './Sections/Faq';
import Home from './Sections/Home/Home';
import RoadMap from './Sections/Roadmap/RoadMap';
import ShowCase from './Sections/ShowCase';
import Team from './Sections/Team';
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
