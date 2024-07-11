
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutSection from './components/pageContent/components/AboutSection';
import ContactSection from './components/pageContent/components/ContactSection';
import ProjectSection from './components/pageContent/components/ProjectSection';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
