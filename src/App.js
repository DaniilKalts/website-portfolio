import './App.css';
import Acomplishments from './components/Acomplishments/Acomplishments';
import BackgroundAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Timeline from './components/TimeLine/TimeLine';
import { Section } from './styles/GlobalComponents';

function App() {
  return (
    <>
      <Header />
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <Footer />
    </>
  );
}

export default App;
